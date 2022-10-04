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
        make: req.body.make,
        
      })
        console.log("Favorite has been added!");
        res.redirect("/results");
    } catch (err) {
      console.log(err);
    }
  },
  getFavorites: async (req, res) => {
		try {
			const comment = await Favorite.find({ favorite: req.body.id });
			res.render("myfavorites.ejs", { favorite: comment });
		} catch (err) {
			console.log(err);
		}
  },
  deleteFavorite: async (req, res) => {
		try {
			// Find post by id
			let favorite = await Favorite.findById({ _id: req.params.id });
			// Delete post from db
			await Favorite.remove({ _id: req.params.id });
			console.log("Deleted Post");
			res.redirect("/myfavorites");
		} catch (err) {
			res.redirect("/myfavorites");
		}
	}, 
}