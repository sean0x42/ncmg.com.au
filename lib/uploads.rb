# frozen_string_literal: true

class Uploads
  def self.jpeg?(blob)
    blob.content_type.include? 'jpeg'
  end

  def self.optimize
    { strip: true }
  end

  def self.optimize_jpeg
    {
      strip: true,
      'sampling-factor': '4:2:0',
      quality: '85',
      interlace: 'JPEG',
      colorspace: 'sRGB'
    }
  end

  def self.optimize_hash(blob)
    return optimize_jpeg if jpeg? blob

    optimize
  end

  def self.resize_to_limit(width:, height:, blob:)
    {
      resize: "#{width}x#{height}>"
    }.merge(optimize_hash(blob))
  end

  def self.resize_to_fit(width:, height:, blob:)
    {
      resize: "#{width}x#{height}"
    }.merge(optimize_hash(blob))
  end

  def self.resize_to_fill(width:, height:, blob:, gravity: 'Center')
    blob.analyze unless blob.analyzed?

    cols = blob.metadata[:width].to_f
    rows = blob.metadata[:height].to_f
    if width != cols || height != rows
      scale_x = width / cols
      scale_y = height / rows
      if scale_x >= scale_y
        cols = (scale_x * (cols + 0.5)).round
        resize = cols.to_s
      else
        rows = (scale_y * (rows + 0.5)).round
        resize = "x#{rows}"
      end
    end

    {
      resize: resize,
      gravity: gravity,
      background: 'rgba(255, 255, 255, 0.0)',
      extent: cols != width || rows != height ? "#{width}x#{height}" : ''
    }.merge(optimize_hash(blob))
  end
end
