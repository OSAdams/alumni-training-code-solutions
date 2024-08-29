# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?

  - No, it only creates the element object

- How do you add an element as a child to another element?

  - You call the `appendChild` method with an argument of a node you want to add as a child to the element
  - ```js
    $element.appendChild(variableName);
    ```

- What do you pass as the arguments to the `element.setAttribute()` method?

  - First argument is a attribute name, the second argument is a `string` of the value you want to add or change

- What steps do you need to take in order to insert a new element into the page?

  - Append the new element ot an existing element
  - ```js
    $parentName = document.querySelector('someElement');
    $childName = document.createElement(elementType);
    $parentName.appendChild($childName);
    ```

- What is the `textContent` property of an element object for?

  - `textContent` is used to represent the text in between element tags

- Name two ways to set the `class` attribute of a DOM element.

  - ```js
    $element.className = 'value';
    ```
    ```js
    $element.setAttribute('class', 'value');
    ```

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

  - Defining a function is better for code organization, readability, scalability, and it is easier to loop through

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
