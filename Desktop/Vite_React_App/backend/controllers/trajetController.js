
const asyncHandler = require("express-async-handler");

const Trajet = require('../models/trajetModel');

//* retourner la liste des trajets
const getTrajet = asyncHandler(async (req, res) => {
    const trajets = await Trajet.find({});
    res.status(200).json(trajets);
})

//* ajouter un trajet
const setTrajet = asyncHandler(async (req, res) => {
    try {
        const trajet = await Trajet.create({
            depart: req.body.depart,
            destination: req.body.destination,
            date: new Date(req.body.date), // Parse date string to Date object
            nbPlaces: req.body.nbPlaces,
        });
        res.status(201).json(trajet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//* rechercher un trajet
const searchTrajet = asyncHandler(async (req, res) => {
    const { depart, destination, date, nbPlaces } = req.body;
    const query = {};
    if (depart) query.depart = depart;
    if (destination) query.destination = destination;
    if (date) query.date = date;
    if (nbPlaces) query.nbPlaces = nbPlaces;
  
    try {
      const trajets = await Trajet.find(query);
      if (!trajets || trajets.length === 0) {
        return res.status(404).json({ message: 'Aucun trajet trouvé' });
      }
  
      res.status(200).json(trajets);
    } catch (error) {
      console.error('Error searching trajets:', error);
      res.status(500).json({ message: 'Erreur lors de la recherche des trajets' });
    }
  });
  



//* supprimer un trajet
const deleteTrajet = asyncHandler(async (req, res) => {
    const trajet = await Trajet.findById(req.params.id);
    if (!trajet) {
        res.status(400);
        throw new Error("Trajet non trouvé");
    }
    
    await trajet.deleteOne();
    res.status(200).json({id: req.params.id});
});

module.exports = {getTrajet, setTrajet, searchTrajet,  deleteTrajet};