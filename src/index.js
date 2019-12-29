const express = require('express')
const Product = require('./models/HomeAppliances')
require('./db/mongoose')


const app = express()
const port = process.env.PORT

app.use(express.json())

app.post('/products', (req, res) => {
    const product = new Product(req.body)
    product.save().then(() => {
        res.status(201).send(product)
    }).catch( (error) => {
        res.status(400).send(error)
    })
})

app.get('/products/:category', (req, res) => {
    const category = req.params.category
    var arr = new Array()
    var parr = new Array()
    Product.find({category : category}).then((products) => {
        if(!products){
            return res.status(404).send()
        }
        const data = products
        data.forEach((product) => {
            if(!arr.includes(product.sub_category)){
                arr.push(product.sub_category)
                parr.push(product)
            }

        })
       
        res.send(parr)
    
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/products/:category/:sub_category', (req, res) => {
    const category = req.params.category
    const sub_category = req.params.sub_category
    var arr = new Array()
    Product.find({category : category, sub_category : sub_category}).then((products) => {
        if(!products){
            return res.status(404).send()
        }
        res.send(products)
    
    }).catch((error) => {
        res.status(500).send(error)
    })

    
})

app.get('/products/:category/:sub_category/:product', (req, res) => {
    const category = req.params.category
    const sub_category = req.params.sub_category
    const product = req.params.product
    var arr = new Array()
    Product.find({category : category, sub_category : sub_category, product : product}).then((products) => {
        if(!products){
            return res.status(404).send()
        }
        res.send(products)
    
    }).catch((error) => {
        res.status(500).send(error)
    })
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})