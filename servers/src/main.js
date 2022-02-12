const path = require('path')
const express = require('express');
const hbs = require('hbs')
const request = require('request')

const app = express();

//heroku provide their own port
const port = process.env.PORT || 1200;

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

app.get('/fisalis', (req, res)=>{
    /*res.render('fisalis-project-web/index', {
        title: 'index'
    })*/
    res.sendFile(path.join(__dirname, '../views/fisalis-project-web/index.html'))
})

app.get('/weather', (req, res)=>{
    console.log('lat:', req.query.lat)
    console.log('lon:', req.query.lon)

    request.post({
        uri: 'https://api.openweathermap.org/data/2.5/weather?lat=2&lon=-1&appid=d0102c72998dec1079dad02859dfdd1e',
        callback: (error, response, body)=>{
            const responseBody = JSON.parse(body);
            console.log(responseBody.weather[0].description);
        }
    })

    res.render('weather', {
        title: 'weather'
    })
})
app.get('/products', (req, res)=>{
    console.log('lat:', req.query.lat)
    console.log('lon:', req.query.lon)
    
    res.render('products', {
        title: 'products'
    })
})

app.get('/json', (req, res)=>{
    res.send({
        field1: 'field1',
        field2: 'field2',
        field3: 'field3',
        field4: 'field4',
        field5: 'field5',
        field6: 'field6'
    })
})

app.get('/fetch', (req, res)=>{

    // fetch('api.openweathermap.org/data/2.5/weather?lat=2&lon=-1&appid=d0102c72998dec1079dad02859dfdd1e').then((response)=>{
    //     console.log(response)
    // })

    res.render('fetch', {
        data: 'data'
    })
})

app.get('*', (req, res)=>{
    
    res.render('404', {
        title: 'page note found 404'
    })
})


//port where heroku listen
app.listen(port, ()=>{
    console.log('listening on')
})




