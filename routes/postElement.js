const fs = require('fs')

module.exports = {
    init(app, db) {
      app.post('/element', (req, res) => {
        const elem = {
          name: req.body.name,
          icon: {
            url: req.body.icon.url,
            color: req.body.icon.color
          }
        }

        if(db.elements[elem.name]){
          res.status(409).send()
          return
        }
        
        db.elements[elem.name] = elem
        fs.writeFile(__dirname + '/../db/elements.json', JSON.stringify(db.elements), () => {})
        res.status(204).send()
      })
    }
  }
  