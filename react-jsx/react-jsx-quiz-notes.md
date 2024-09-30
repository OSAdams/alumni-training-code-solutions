# react-jsx-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSX?

  - JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

- How does React use JSX to render components?

  - JSX is transformed using a tool like Babel. Babel compiles JSX down to React.createElement() calls. THese calls create JavaScript objects for each element, which React calls "React elements". React takes these React elements and ultimately renders them to the DOM. THis is done using the ReactDOM.render() method in web applications. THis method takes a React element and a DOM container node, and updates the container with the React elements and any of its children.

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
