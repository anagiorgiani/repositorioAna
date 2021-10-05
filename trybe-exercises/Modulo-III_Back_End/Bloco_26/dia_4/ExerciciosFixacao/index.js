const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());

const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.get('/drinks/search', function(req, res) {
    const { name, maxPrice, minPrice } = req.query;
    const drinkFilter = drinks.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price > parseInt(minPrice))
    if (!drinkFilter) return res.status(404).json({ message: 'Drink Not Found !' });
    res.status(200).json(drinkFilter)

})


app.get('/drinks', function(req, res) {
    res.json(drinks.sort(function(a,b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }));
});

app.get('/drinks/:id', function(req, res) {
    const { id } = req.params;
    const drink = drinks.find((i) => i.id === parseInt(id));
    if (!drink) return res.status(404).json({ message: 'Drink Not Found !' });
    res.status(200).json(drink)

})

app.post('/drinks', function(req, res){
    const {id, name, price} = req.body;
    drinks.push({id, name, price});
    res.status(201).json({message: "drinks created sucessufuly"})
});


app.listen(3002, () => {
    console.log('Ouvindo a porta 3001')
});