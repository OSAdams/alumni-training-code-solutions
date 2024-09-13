# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  - A _promise_ object
- What is the default request method used by `fetch()`?

  - `'GET'`

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

  - You specify the request method in the second argument of the `fetch()` funciton call. The second argument takes an init object, in which you add a root key-value pari of `{ method: 'GET' }`

- How does `fetch` report errors?
  - `fetch` reports errors with a TYpeError. It does not report 404's and some other negative response as errors. So successful loads will also need to theck that `response.ok` did not come back as false.

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
