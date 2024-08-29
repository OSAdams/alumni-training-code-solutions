# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  - To help us work with data through our application
  - To help us debug our code

- What is the purpose of events and event handling?

  - Events allow us to track things happening in our system (or `DOM`)
  - Event Handling allows our code to react, or fire, that is not the default interaction

- Are all possible parameters required to use a JavaScript method or function?

  - No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

  - `element.addEventListener('typeOfEvent', callBackFunction)`
  - `addEventListener`

- What is a callback function?

  - a `function` passed into another functions as an argument, which is then invoked inside the outer function to complete some kind of routine or action

- What object is passed into an event listener callback when the event fires?

  - The `event` object is passed into an event listener callback when the event fires

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

  - The `event.target` is the specific `element` listening for the `event`
  - We can `console.log` the event target element
  - We can look up documentation on MDN

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  - The _callback function_ is a reference to the defined function

  ```js
  element.addEventListener('click', handleClick());
  ```

  - The _callback function_ is calling the function and using the return value of the function

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
