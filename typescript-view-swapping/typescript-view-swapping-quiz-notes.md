# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  - A reference to the object onto which the event was dispatched

- What is the effect of setting an element to `display: none`?

  - It hides the element with the CSS Rule Set from the DOM
  - The element will have no effect on the page

- What does the `element.matches()` method take as an argument and what does it return?

  - `element.matches()` takes a CSS Selector as an argument and returns a `Boolean` value

- How can you retrieve the value of an element's attribute?

  - Calling `element.getAttribute()` and passing a string value as an argument

- At what steps of the solution would it be helpful to log things to the console?

  - The `event.target` to verify the node we are clicking
  - The `element.matches('.class')` to verify the boolean value of the node we are clicking
  - The `element.getAttribute('class')` to verify the class attribute value of the node we are clicking
  - Technically at every single step

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

  - Each and every tab would have their own `addEventListener()` method and callback function definition

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

  - Conditionals would be written for every element clicked
  - There would be a lot of repeated code

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
