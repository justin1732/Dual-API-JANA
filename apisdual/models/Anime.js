const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnimeSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    description: {
        type: String,
    },
    saved: {
        type: Boolean,
        default: false
    }
});

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports = Anime;
