const quizSettings = (req, res) => {
    res.render('quiz-settings')
};

const quizQuestion = (req, res) => {
    res.render('quiz-question')
};

const questionFeedback = (req, res) => {
    res.render('question-feedback')
};

const quizFeedBack = (req, res) => {
    res.render('quiz-feedback')
}




module.exports = {
    quizSettings,
    quizQuestion,
    questionFeedback,
    quizFeedBack,


}