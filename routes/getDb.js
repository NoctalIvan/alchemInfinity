module.exports = {
  init(app, db) {
    app.get('/db', (req, res) => {
      res.send({
        elements: db.elements,
        recipies: db.recipies,
      })
    })
  }
}
