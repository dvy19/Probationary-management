const Quiz=require('../models/Quiz')

const createQuiz = async (req, res) => {

    try {

        console.log(req.body)


        const {
            title,
            description,
            totalMarks,
            totalQuestions,
            questions,
            isActive,
            date,
            domain
        } = req.body;


        

        // Check questions
        if (!questions || questions.length !== 5) {
            return res.status(400).json({
                message: "Exactly 5 questions are required"
            });
        }

        // Validate each question
        for (const question of questions) {

            // Question text
            if (!question.question) {
                return res.status(400).json({
                    message: "Question is required"
                });
            }

            // Options
            if (!question.options || question.options.length !== 4) {
                return res.status(400).json({
                    message: "Each question must have exactly 4 options"
                });
            }

            // Correct answer
            if (!question.correctAnswer) {
                return res.status(400).json({
                    message: "Correct answer is required"
                });
            }

            // Correct answer must be one of the options
            if (!question.options.includes(question.correctAnswer)) {
                return res.status(400).json({
                    message: "Correct answer must be one of the options"
                });
            }
        }

        // Create quiz
        const quiz = await Quiz.create({
            title,
            description,
            domain,
            totalMarks,
            totalQuestions: questions.length,
            questions,
            date,
            isActive
        });

        console.log("quiz")

        return res.status(201).json({
            message: "Quiz is created",
            quiz
        });

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            message: "Error creating quiz",
            error: error.message
        });

    }
};


module.exports=createQuiz