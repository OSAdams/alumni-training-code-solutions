console.log('Hello World!');

const $title = document.querySelector('h1');
console.log('value of $title: ', $title);
console.dir($title);

const $explanation = document.getElementById('explanation');
console.log('value of $explanation: ', $explanation);
console.dir($explanation);

const $hint = document.querySelector('.hint');
console.log('value of $hint: ', $hint);
console.dir($hint);

const $p = document.querySelectorAll('p');
console.log('value of $p: ', $p);
console.dir($p);

const $exampleLink = document.querySelectorAll('.example-link');
console.log('value of $exampleLink: ', $exampleLink);
console.dir($exampleLink);
