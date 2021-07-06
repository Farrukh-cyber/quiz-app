const INITIAL_STATE= {
    questions:[
        {
            question: "HTML stands for __________",
            options: [
              "Hypertext markup langauge",
              "Programming langauge",
              "markup language",
            ],
            correctAns: "Hypertext markup langauge",
          },
          {
            question: "CSS stands for __________",
            options: [
              "Cascading Style sheet",
              "Programming langauge",
              "markup language",
            ],
            correctAns: "Cascading Style sheet",
          },
          {
            question: "HTML is programming language",
            options: ["True", "False"],
            correctAns: "False",
          }
    ]
}


const reducer = (state = INITIAL_STATE) => {
  return state;
};

export default reducer;
