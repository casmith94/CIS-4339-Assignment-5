const fetch = require('sync-fetch')
const getCountries = fetch('https://restcountries.eu/rest/v2/all',{}).json()

const findCountry = (countryName) => {
    for (const[key,country] of Object.entries(getCountries)){
        if (country.name.includes(countryName)){
            return country
        }}}

const getNames = () => {
    let countryNames = []

    for (const[key, country] of Object.entries(getCountries)){
        let name = ''
        countryNames.push(country.name)
    }
    return countryNames.sort()
}

module.exports = {getNames, findCountry}