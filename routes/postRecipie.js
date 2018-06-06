module.exports = {
    init(app, db) {
      app.post('/recipie', (req, res) => {
        const [elem1, elem2] = [req.body.elem1, req.body.elem2].sort((a,b) => a.localeCompare(b))
        const product = req.body.product

        if( !db.elements[elem1] ||
            !db.elements[elem2] || 
            !product.map || 
            product.find(p => db.elements[p] == undefined)){
            res.status(404).send()
            return
        }

        if(db.recipies[elem1] && db.recipies[elem1][elem2]){
          res.status(409).send()
          return
        }
        
        if(!db.recipies[elem1]) db.recipies[elem1] = {}
        db.recipies[elem1][elem2] = product

        db.saveRecipies()
        res.status(204).send()
      })
    }
  }
  