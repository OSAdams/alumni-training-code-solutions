# typescript-and-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSON?

  - _J_ ava _S_ cript _O_ bject _N_ otation
  - A lightweight data-interchange format
  - Text-based format for representing structured data

- What are serialization and deserialization?

  - _Serialization_ turns the JSON data into a string. The string can be used as a stream of bytes so that it can be transferred over a networked.
  - _Deserialization_ turns the JSON string into a usable object.

- Why are serialization and deserialization useful?

  - _Serialization_ is important because it is useful when you want to transmit data across a network
  - _Deserialization_ is important because it allows us to access that data in the object

- How do you serialize a data structure into a JSON string using TypeScript?

  - ```js
    JSON.stringify(object);
    ```

- How do you deserialize a JSON string into a data structure using TypeScript?

  - ```js
    JSON.parse(string);
    ```

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
