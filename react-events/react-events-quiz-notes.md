# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?

  - It is similar to an event in JavaScript. The difference is that in React, we can apply the event and event handler directly to the React element.

- What is an "event handler"? Which component declares the handler?

  - A function that executes upon the event firing.
  - In React, you can create custom event handlers by declaring them in the function/component. Custom event handlers declared in an individual component may not be used universally.

- How do you pass an event handler to a React component?

  - You pass the event handler function as props in the component.

- What is the naming convention for event handlers?

  - `<Component onElementAction={() => eventHandler} />`
  - `<Component onClick={eventHandler} />`

- What is an "event handler prop"? Which component declares the prop?

  - A prop with a state read. The local component declares the prop.

- What are some custom event handler props a component may wish to define?

  - A component may wish to defined their own custom event handler. If the handler will be used elsewhere, it should be defined in the main App component.

- What is the naming convention for custom event handler props?

  - The naming convention for custom event handler props is `onAction`

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
