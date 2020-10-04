import React from 'react'

export default function jsx (type, props, ...children) {
  const newProps = { ...props }
  if (typeof type === 'string') {
    newProps.ref = (element) => {
      // merge existing ref prop
      if (props && props.ref) {
        if (typeof props.ref === 'function') {
          props.ref(element)
        } else if (typeof props.ref === 'object') {
          props.ref.current = element
        }
      }

      if (element) {
        if (props && props.bindProps && typeof props.bindProps === 'object') {
          Object.entries(props.bindProps).forEach(([key, value]) => {
            element[key] = value
          })
          element.removeAttribute('bindProps')
        }
      }
    }
  }

  return React.createElement.apply(null, [type, newProps, ...children])
}
