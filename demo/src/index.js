/* eslint-disable no-unused-vars */
/** @jsx bindProps */
import React, { useState } from 'react'
import { render } from 'react-dom'

import bindProps from '../../src'

import './web-component'

export default function SomeComponent (props) {
  const [ testObj, setTestObj ] = useState({})
  const [list, setList] = useState(['web components', 'react'])

  function whatsCool (event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    setList([...list, formData.get('whatsCool')])
    form.reset()
  }

  function onSubmit (event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const newObj = { ...testObj }

    newObj[formData.get('key')] = formData.get('value')
    setTestObj(newObj)
    form.reset()
  }

  return <div>
    TestObj {JSON.stringify(testObj)}
    <form onSubmit={onSubmit}>
      <label htmlFor="key">Key</label>
      <input id="key" name="key" type="text"/>

      <label htmlFor="value">Value</label>
      <input id="value" name="value" type="text"/>

      <button type="submit">Submit</button>
    </form>

    <form onSubmit={whatsCool}>
      <label htmlFor="whatsCool">What's cool</label>
      <input id="whatsCool" name="whatsCool" />
      <button type="submit">Submit</button>
    </form>

    <web-component
      bindProps={{ testItem: testObj }}
    ></web-component>

    <test-el bindProps={{ list: list }}></test-el>
  </div>
}

render(<SomeComponent/>, document.querySelector('#demo'))
