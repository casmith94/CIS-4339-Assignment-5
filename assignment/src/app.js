const express = require("express")
const ejs = require("ejs")
const parser = require("body-parser")
const fetchCountries = require(".")
const app = express()

app.use(express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.get('/',(req,res) => {
    res.render('home.ejs', {countryName: fetchCountries.getNames()})
})

app.post("/information",(req,res) => {
    const countryName = req.body.country
    res.render("information.ejs",{country: fetchCountries.findCountry(countryName)})
})

app.post("/registration",(req,res)=>{
    res.render("registration.ejs")
})

app.listen(8080, () => {
    console.log("http://localhost:8080")
})