const fs = require('fs')
/*
const book = {
    'title': 'star wars',
    'author': 'Matheus'
}

const stringJson = JSON.stringify(book);

console.log(stringJson);

fs.writeFileSync('json_book.json', stringJson);

*/
const data = fs.readFileSync('json_book.json')
console.log('bufferData: ', data)
console.log('stringData: ', data.toString())
const jsonData = JSON.parse(data);
console.log('before - jsonData: ', jsonData)
jsonData.name = "Mateus"
jsonData.planet = "Earth"
jsonData.age = 25
console.log('after - jsonData: ', jsonData)
const stringData = JSON.stringify(jsonData)
fs.writeFileSync('json_person.json', stringData);

