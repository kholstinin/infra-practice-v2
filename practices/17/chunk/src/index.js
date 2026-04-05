const a = 5;

console.log(a + 5);

import('./small.js').then(({data}) => {
  console.log(data);
})

import('./small.css');