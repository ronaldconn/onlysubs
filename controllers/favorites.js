const Favorite = require('../models/Favorites')
const Results = require('../controllers/results')
const { request } = require('http')

module.exports = {
  addFavorite: async (req, res) => {
    
    try {
      console.log(req.body)
      
      await Favorite.create({

        imageUrl: req.body.img,
        year: req.body.year,
        dateDropped: req.body.date,
        yardLocation: req.body.location,
        row: req.body.row,
        vin: req.body.vin,
        
      })
        console.log("Favorite has been added!");
        res.redirect("/results");
    } catch (err) {
      console.log(err);
    }
  },
  getFavorites: async (req, res) => {
		try {
			const comment = await Favorite.find({ favorite: req.body });
			res.render("myfavorites.ejs", { favorite: comment });
		} catch (err) {
			console.log(err);
		}
}
}