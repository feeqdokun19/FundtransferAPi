require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Joi = require('joi')
const port = process.env.PORT
 


app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Fund transfer is happening on ${port}`)
})

app.use(morgan('combined'))
 

app.get('/',(req, res) => {
    res.status(200).send({
        status: "Succsessfully login",
        Message: "Welcome Gentlemen",
        Data: [],

    });
});

app.use('/', (req, res, next) => {
    res.status(400).send({
        status: "Invalid error ",
        message: "It appears that you are new, Sorry, you cannot perform transation here"
    });
});

