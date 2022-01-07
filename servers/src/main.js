const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express();

console.log(__dirname)
console.log(__filename)
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
console.log(publicPath)

//config express path
app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
// hbs.registerPartials(partialsPath)
let html = `hey hou`

// app.com
// app.com/help
// app.com/about

app.get('', (req, res)=>{
    res.render('index', {
        title: 'WELCOME'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'HELP'
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: 'HELP-notfound'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'about'
    })
})

app.get('/weather', (req, res)=>{
    res.render('weather', {
        title: 'weather'
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title: 'page note found 404'
    })
})

app.listen(3000, ()=>{
    console.log('listening on')
})



