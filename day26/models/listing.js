const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url:{
        type: String,
        default: "https://unsplash.com/photos/couple-watches-sunset-over-the-manhattan-bridge-v4rA2O0_IVI",
        set: (v) => v === "" ? "https://unsplash.com/photos/couple-watches-sunset-over-the-manhattan-bridge-v4rA2O0_IVI" : v,
    },
    filename:String
    
},
    price: Number,
    location: String,
    country: String,
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;