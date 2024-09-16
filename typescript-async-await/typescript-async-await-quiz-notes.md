# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

  - To allow code to be read _sequentially_
  - The `await` keyword is used to indicate that the JavaScript Runtime should 'wait' or 'pause' until the asynchronous function completes

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

  - `async` and `await` look like synchronous code and allow for using `try` and `catch`.
  - `Promise.then()` becomes `await` and `Promise.catch()` becomes `try` and `catch`

- When do you use `async`?

  - When you want to call a function `asynchronously`

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

  - You use `await` when calling an asynchronous function. You do not use `await` when you are calling a synchronous function, as it has no effect

- How do you handle errors with `await`?

  - You handles errors with `await` by nesting `await` under `try` and following both with `catch`

- What do `try`, `catch` and `throw` do? When do you use them?

  - `try` and `catch` are used as an `if/else` statement for `asynchronous` functions.
  - The `try` code block executes until an `error` occurs, and the `catch` code block executes if there is an error.
  - `throw` is used to instantiate an `error` and can be used immediately pivot from `try` to `catch`

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

  - the `Promise` will run but it will be returned at the moment called as `pending`.
  - The `catch` would not be executed on error

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

  - I'm use to `Promise.then`, I'm new to `async/await`
  - I'll use both and be happy

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
