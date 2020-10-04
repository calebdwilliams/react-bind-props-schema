import { LitElement, html } from 'lit-element'

console.log({LitElement})

export class TestEl extends LitElement {
  static get properties () {
    return {
      list: { type: Array },
      user: { type: Object }
    }
  }

  render () {
    return html`<ul>
      ${this.list.map(item => html`<li>${item} is cool</li>`)}
      </ul>`
  }
}

customElements.define('test-el', TestEl)

export class WebComponent extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this._testItem = {}
  }

  connectedCallback () {
    this.shadowRoot.innerHTML = `<pre></pre>`
    this.wrapper = this.shadowRoot.querySelector('pre')
  }

  get testItem () {
    return this._testItem
  }

  set testItem (_testItem) {
    this._testItem = _testItem
    if (this.wrapper) {
      this.wrapper.innerHTML = JSON.stringify(_testItem, null, 2)
    }
    console.log(_testItem)
    return true
  }
}

if (!customElements.get('web-component')) {
  customElements.define('web-component', WebComponent)
}
