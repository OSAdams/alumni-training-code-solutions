# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

  - Logical AND `&&` are used for a set of boolean operands and will be `true` only if all expressions are `true`, otherwise it will return `false` if any of the expressions are false
    - Used in an `if` statement, if all the expressions return `true` the following code block will be executed
  - Logical OR `||` are used for a set of boolean operands and will be `true` if one of the expressions return `true`
    - Used in an `if` statement, if one of the expressions return `true` the following code block will be executed
  - Outside of `if` statements
    - Logical AND `&&` returns the first falsy value
      - If all the values are truthy, the value of the last operand is returned
      - ```js
        [1, 2, 3] && 'Hello World';
        ```
      - In this example, `'Hello World'` is returned because the array literal `[1, 2, 3]` is true and `'Hello World'` is the last truthy value
      - ```js
        '' && 'Hello World';
        ```
      - In this example, `''` is returned because `''` is a falsy value
      - ```js
        [1, 2, 3] && false && '' && 'Hello World';
        ```
      - In this example, `false` is returned because it is the first falsy value
    - Logical OR `||` returns the first truthy value
      - ```js
        'Hello World' || '';
        ```
      - In this example, `'Hello World'` is returned because it is the only truthy value
      - ```js
        '' || [1, 2, 3] || 'Hello World';
        ```
      - In this example, `[1, 2, 3]` is returned because it is the first truthy value

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

  - Short circuit evaluation is used to executed code until a short circuit (or conditional fail) occurs. When the short circuit occurs, instead of erroring, the code moves on past the evaluation

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

  - The nullish coalescing `??` operator returns its right-hand side operand when it left-hand side operand is `null` or `undefined`, otherwise it returns the left-hand side operand
    - ```js
      null ?? 'hello world';
      ```
    - In this example, `'hello world'` is returned
    - ```js
      0 ?? 42;
      ```
    - In this example, `0` is returned

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

  - The `?:` ternary operator is syntactical sugar for `if/else` statements
  - `?:` is different from an `if/else` statement because it can be assigned to a variable

- What is the `?.` (optional chaining) operator? When would you use it?

  - The `?.` optional chaining operator allows for calling on properties that may or may not be undefined. If the property before `?.` is null or undefined, it stops the evaluation and returns undefined

- What is `...` (spread) syntax? How do you use it with arrays and objects?

  - The `...` spread syntax allows an iterable, such as a string or an array, to be expanded in places where zero or more arguments, or elements, are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created

- What data types can be spread into an array? Into an object?

  - Any iterable object
  - All data types can be spread into an array or object

- How does spread syntax differ from rest syntax?

  - The spread syntax expands an array into its elements, while rest syntax collects multiple elements and condenses them into a single element
  - spread:
    ```js
    const numbers = [5, 6, 7];
    const moreNumbers = [1, 2, 3, 4, ...numbers];
    // moreNumber = [1, 2, 3, 4, 5, 6, 7]
    ```
  - rest:
    ```js
    const numbers = [5, 6, 7];
    function myFunction(...array) {
      return array;
    }
    // [5, 6, 7] expected
    ```

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
