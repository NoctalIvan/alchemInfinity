const fs = require('fs')
const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())

const main = async () => {
  const db = {
    elements: require('./db/elements'),
    recipies: require('./db/recipies')
  }

  db.saveElements = () => fs.writeFile(__dirname + '/db/elements.json', JSON.stringify(db.elements), () => {})
  db.saveRecipies = () => fs.writeFile(__dirname + '/db/recipies.json', JSON.stringify(db.recipies), () => {})

  const routes = [
    require('./routes/getDb'),
    require('./routes/getIcons'),
    require('./routes/postElement'),
    require('./routes/postRecipie'),
  ]
  routes.forEach(r => r.init(app, db))

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
}

main()