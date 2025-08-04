// quiz.js (Template)
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Tool Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    answer: 1
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet"],
    answer: 0
  }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQ];
  document.getElementById("question").innerText = q.question;
  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (i === q.answer) score++;
      currentQ++;
      if (currentQ < quizData.length) loadQuestion();
      else showResult();
    };
    options.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("quiz-container").innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}

document.addEventListener("DOMContentLoaded", loadQuestion);
