import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  try {
    const msg = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error);
  }
}

async function throwSeveral(): Promise<void> {
  try {
    let msg = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', msg);
    msg = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', msg);
    msg = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral3:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error);
  }
}

async function throwChained(): Promise<void> {
  try {
    let msg = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', msg);
    msg = await read(msg, false);
    console.log(elapsed(), 'throwChained2:', msg);
    msg = await read(msg, false);
    console.log(elapsed(), 'throwChained3:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
  }
}

throwOnce()
  .then(() => throwSeveral())
  .then(() => throwChained());
