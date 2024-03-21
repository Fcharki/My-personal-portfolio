const mongoose = require("mongoose");

const TrajetSchema = mongoose.Schema(
    {
        depart: {
            type: String,
            required: [true, "Ajouter votre place de départ"],
        },
        destination: {
            type: String,
            required: [true, "Ajouter votre place d'arrivée"],
        },
        date: {
            type: Date,
            required: [true, "Ajouter la date de départ"],
        },
        nbPlaces: {
            type: Number,
            required: [true, "Ajouter le nombre de places"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Trajet", TrajetSchema);