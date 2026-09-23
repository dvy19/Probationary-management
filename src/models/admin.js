const mongoose=require("mongoose")

const meeting = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

    day: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    mode: {
        type: String,
        enum: ["offline", "online"],
        required: true
    }

}, {
    timestamps: true
});

const Meeting = mongoose.model("Meeting", meeting);

module.exports=Meeting