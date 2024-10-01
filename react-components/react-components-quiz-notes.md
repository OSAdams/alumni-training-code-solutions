# react-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React component?

  - Reusable UI Elements
  - A combination of markup, CSS, and JavScript

- How do you define a component in React?

  - Export the component: `export default ...`
  - Define the function: `... function Profile() { ... }`
    - React component names must start with a capital letter. Components are classes.
  - Add markup `{ return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" /> }`
    - If your markup isn't on the same line, wrap the return value in parenthesis
  - ```js
    export default function Profile() {
      return (
        <div>
          <h1>Hello World!</h1>
        </div>
      );
    }
    ```

- How is a component "rendered" (made visible on the browser page)?

  - React components return JSX markup which is compiled into JS files which can be read by the browser.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
