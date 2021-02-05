const externalUrlPropType = (props, propName, componentName) => {
  const regex = /^(https?|http):\/\/[^\s$.?#].[^\s]*$/gm
  if (!regex.test(props[propName])) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed`)
  }
}

export default externalUrlPropType
