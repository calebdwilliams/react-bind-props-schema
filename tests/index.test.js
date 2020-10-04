/** @jsx bindProps */
import expect from 'expect'
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'

// eslint-disable-next-line no-unused-vars
import bindProps from 'src/'

export default function Component () {
  const [list, setList] = useState(['react'])
  const ref = useRef()
  const input = useRef()

  function onSubmit (event) {
    setList([...list, input.current.value])
    event.target.reset()
  }

  return <form onSubmit={onSubmit}>
    <label htmlFor="whatsCool">What's cool?</label>
    <input name="whatsCool" id="whatsCool" ref={input}/>

    <button type="submit">Submit</button>
    <div id="target" ref={ref} bindProps={{ list: list }}></div>
  </form>
}

describe('The bindProps pragma', () => {
  let node, target, input

  const renderComponent = () => {
    render(<Component/>, node)
    target = document.getElementById('target')
    input = document.querySelector('input[name=whatsCool]')
  }

  beforeEach(() => {
    node = document.createElement('div')
    document.body.appendChild(node)
  })

  afterEach(() => {
    document.body.removeChild(node)
    unmountComponentAtNode(node)
  })

  it('binds to properties', () => {
    renderComponent()
    expect(target.list.length).toBe(1)
  })

  it('will update the bound property', () => {
    renderComponent()
    input.value = 'web components'
    input.form.dispatchEvent(new Event('submit'))

    expect(target.list.length).toBe(2)
  })
})
