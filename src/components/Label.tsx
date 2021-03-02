import React, { FunctionComponent } from 'react'

interface LabelProps {
  htmlFor: string
  isOptional?: boolean
}

const Label: FunctionComponent<LabelProps> = (props) => (
  <label
    htmlFor={props.htmlFor}
    className="block text-white mb-0.5 font-medium"
  >
    {props.children}
    {props.isOptional && <span className="text-grey-300"> (Optional)</span>}
  </label>
)

export default Label
