# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?\

  - Assigning properties of an object to individual variables with the same names by default
  - Pulling apart something structured and segmenting it into independent and individual objects

- What is the syntax for `Object` destructuring?

  - ```js
    const { firstName, lastName } = person;
    ```
  - ```js
    const { property1, property2 } = object;
    ```
  - ```js
    const { firstName: fName, lastName: lName } = person;
    ```

- What is the syntax for `Array` destructuring?

  - ```js
    const array = [10, 20, 30];
    const [a, b, c] = array;
    a === 10;
    b === 20;
    c === 30;
    ```

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?

  - The object or array name is to the right of the assignment operator `=`, instead of the being left of the assignment operator `=` when you're assigning and object or array literal to a variable

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
