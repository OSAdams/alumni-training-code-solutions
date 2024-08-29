# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?

  - The `className` property is the class attribute value of the DOM element
  - Gets and set the value of the class `attribute` of the specified element

- How do you update the CSS class attribute of an element using JavaScript?

  - Query the DOM for an element and assigning a value to the `className` property of the `HTML Element` object

- What is the `textContent` property of element objects?

  - The `textContent` property represents the `string` value between the tags of the `HTML Element`

- How do you update the text within an element using JavaScript?

  - Call the `textContent` method of the `querySelector` method of the `document` object and assign a `string` value
  - ```js
    document.querySelector('element').textContent = 'class value';
    ```

- Is the `event` parameter of an event listener callback always useful?

  - Yes. It is required to manipulate the dom from user interaction.
  - It is useful because it allows for specificity

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?

  - More complicated

- Why is storing information about a program in variables better than only storing it in the DOM?

  - Performance, `query`ing the dom uses a lot of resources so it is better to store the value in a `variable` which will reduce repetition

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
