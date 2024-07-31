# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?

  - To group together a set of variables (data) and functions (functionality) to create a model of something

- What are object properties?

  - Variables within an object
  - key: value pairs `"hello": "world"`

- Describe object literal notation.

  - `const ourObject = { first: "value", second: "value" }`
  - An array of `key: value` pairs
  - `keys` and `values` are seperated with a colon `:`
  - `key: value` pairs are seperated with a comma `,`
  - `key: value` pairs are within a set of curley braces `{}`

- How do you remove a property from an object?

  - `delete object.property`
  - You remove a property by using dot notation with the `delete` operator

- What are the two ways to get or update the value of a property?

  - Using dot notation `object.property` will return the `value` of the `property`
  - Using bracket notation `object['property']` will return the `value` of the `'property'`

- What is the purpose of interfaces in TypeScript?

  - to help name the `types` in object properties
  - Allows you to define the shape of an object, ensuring that objects adhere to a specific structure

- What are two different ways to describe the shape of an object in TypeScript?

  - `type Object = { propert: string, property?: number }`
  - `interface Object { propert: string, property?: number }`
  - type and interface

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?
  - optional properties in types/interfaces will look as follows `interface Person { name: string, age?: number }`
  - you can describe these possibly available properties while still also preventing use of properties that are not part of the interface
  - Allows objects to have a variable structure while still ensuring type safety

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
