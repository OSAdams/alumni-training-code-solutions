'use strict';
async function getUserData() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}
getUserData();
async function getPokemonData() {
  const url = 'https://pokeapi.co/api/v2/pokemon/1';
  try {
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.error(error);
  }
}
getPokemonData();
