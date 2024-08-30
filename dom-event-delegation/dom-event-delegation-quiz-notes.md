# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  - The `event.target` is the target element that initiated the event, it doesn't change through the bubbling process
  - `event.target` is referred to as the targeted element

- Why is it possible to listen for events on one element that actually happen its descendent elements?

  - _Event bubbling_
  - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors

- What DOM element property tells you what type of element it is?

  - `event.target.tagName`
  - `elementVariable.tagName`

- What does the `element.closest()` method take as its argument and what does it return?

  - The `element.closest()` takes a string in reference to an element tag, class name, or id and returns the parent element matching the argument

- How can you remove an element from the DOM?

  - Using the `remove()` method of the element object

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

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
