# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  - To help us work with data through our application
  - To help us debug our code

- What is a "model"?

  - A 'model' is a representation of something, or an `object`

- Which "document" is being referred to in the phrase Document Object Model?

  - The `HTML` document

- What is the word "object" referring to in the phrase Document Object Model?

  - Every `HTML` tag in the HTML document
  - Every _tree node_ is an `object`

- What is a DOM Tree?

  - The DOM Tree is a representation of all `objects` in the `DOM`

- Give two examples of `document` methods that retrieve a single element from the DOM.

  - `document.querySelector()`
  - `document.getElementById()`

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

  - `document.querySelectorAll()`

- Why might you want to assign the return value of a DOM query to a variable?

  - To store the element `object` for later use
  - Limits the repetition of querying the DOM

- What `console` method allows you to inspect the properties of a DOM element object?

  - `console.dir()`

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

  - We want the `HTML DOM` to load before we can query for elements in `JavaScript`
  - Querying the `DOM` takes a lot of resources, so it's better to store the value in a `variable` just once. Storing the value in a `variable` makes it so we do not need to search, or `query`, the element again

- What does `document.querySelector()` take as its argument and what does it return?

  - a `string` value that returns the first eligible element

- What does `document.querySelectorAll()` take as its argument and what does it return?

  - A `string` value that is formatted as a CSS selector. It retursn all objects that would be selected by the given selector

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
