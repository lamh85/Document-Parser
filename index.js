// TODO: find a better library because of this:
// https://gitlab.com/autokent/pdf-parse/-/issues/15

console.log('point 0 =======================')
import fs from 'fs'
import pdf from 'pdf-parse'

console.log('point A =======================')
const dataBuffer = fs.readFileSync('./subjects/camp.pdf')
console.log('point B =======================')

pdf(dataBuffer).then(data => {
  console.log(data)
})
