# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

  - Special functions that are only available while React is rendering.
  - They let you call, or "hook into", different React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

- What is the purpose of state in React?

  - To store data that needs to be remembered for the component.
  - Trigger React to render the component with new data (re-rendering)
  - It helps to retain data between renders.

- Why can't we just maintain state in a local variable?

  - To have a responsive UX, we need to update the state to re-render the component with new or updated data.
  - Updating a local variable does not affect the components life cycle.

- What two actions happen when you call a `state setter` function?

  - Updates a state variable in which triggers React to re-render the component.

- When does the local `state variable` get updated with the new value?

  - When an event listener callback state setter function is called in which the state values are updated directly, triggering a re-render of the component.

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
