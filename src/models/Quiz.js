const mongoose=require("mongoose")

const questionSchema = new mongoose.Schema({
    
    question: {
        type: String,
        required: true,
        trim: true
    },

    options: {
        type: [String],
        required: true,
        validate: {
            validator: function (value) {
                return value.length === 4;
            },
            message: "Each question must have exactly 4 options"
        }
    },

    correctAnswer: {
        type: String,
        required: true
    },

    marks: {
        type: Number,
        default: 1
    }
});


const quizSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    totalQuestions: {
        type: Number,
        default: 5
    },

    totalMarks: {
        type: Number,
        default: 5
    },

    questions: {
        type: [questionSchema],
        required: true,
        validate: {
            validator: function (value) {
                return value.length === 5;
            },
            message: "Quiz must contain exactly 5 questions"
        }
    },

    isActive: {
        type: Boolean,
        default: false
    },

    date: {
        type: Date,
        required: true
    },

    domain: {
        type: String,
        required: true,
        trim: true
    },

    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {
    timestamps: true
});


const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;