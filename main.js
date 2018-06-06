const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())

const main = async () => {
  const db = {
    elements: require('./db/elements'),
  }

  const routes = [
    require('./routes/getDb'),
    require('./routes/getIcons'),
    require('./routes/postElement'),
  ]
  routes.forEach(r => r.init(app, db))

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
}

main()