const path = require('path')
const express = require('express');

const app = express();

console.log(__dirname)
console.log(__filename)
const publicPath = path.join(__dirname, '../public')
console.log(publicPath)

//config express path
app.use(express.static(publicPath))

let html = `hey hou`

// app.com
// app.com/help
// app.com/about

app.get('', (req, res)=>{
    res.send('hello express!')
})

app.get('/help', (req, res)=>{
    res.send('help page!')
})

app.get('/about', (req, res)=>{
    res.send('about page!')
})

app.get('/weather', (req, res)=>{
    res.send(html)
})

app.listen(3000, ()=>{
    console.log('listening on')
})

