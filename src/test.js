const names = 'egoor miha paha olya venya'.split(' ')

const computes = names.reduce((acc, name) => {
  return acc + '+' + name
}, '')

console.log(computes)
