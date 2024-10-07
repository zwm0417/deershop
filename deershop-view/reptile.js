/** @type {Object[]} */
let aaa = []
const asd = {}
aaa.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (Array.isArray(item[key])) {
      delete item[key]
    }
    if (typeof item[key] === 'string' && item[key].length >= 255) {
      asd[key] = true
    }
  })
})
console.log('aaa: ', aaa)
console.log('asd: ', asd)
