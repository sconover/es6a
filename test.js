import "https://unpkg.com/mocha@8.3.2/mocha.js"
import "https://unpkg.com/chai@4.2.0/chai.js"
import { html, render } from "https://unpkg.com/lit-html@1.2.1?module"

const assert = chai.assert

mocha.setup("tdd")

suite("x", () => {
    test("foo", () => {
        assert.equal(1, 2)
    })
})

export function renderPage(root) {
    mocha.checkLeaks()
    mocha.run()
}

export function run(root) {
    render(
        html`
            <link
                href="https://unpkg.com/mocha@8.3.2/mocha.css"
                rel="stylesheet"
            />
            <div id="mocha"></div>
        `,
        root,
    )

    mocha.checkLeaks()
    mocha.run()
}
