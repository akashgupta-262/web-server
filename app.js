const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//define path
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates')

//setup handler and views
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//static 

app.use(express.static(publicDirectoryPath));
// console.log(publicDirectoryPath);
app.get('', (req, res) => {
    res.render('index', {
        title: 'dhoni',
        name: 'mahendra'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'dont provide search'

        })
    }

    console.log(req.query)
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/cloud', (req, res) => {
    if (!req.query.search) {
         return res.send({
            error: 'dont provide cloud'

        })
    }

    console.log(req.query)
    res.send({
        forecast: 'sky',
        location: 'japan'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})