const getIcons = require('./../icons/getIcons')

module.exports = {
    init(app, db) {
      app.get('/icons', async (req, res) => {
        const images = await getIcons(req.query.q)
        res.send(images)
      })
    }
  }
  