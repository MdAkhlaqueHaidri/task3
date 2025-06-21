// QUIZ FUNCTIONALITY
const questions = [
  { question: "What is 7 + 10?", answer: "17" },
  { question: "Capital of France?", answer: "Paris" },
  { question: "CSS stands for?", answer: "Cascading Style Sheets" }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");

function showQuestion() {
  const q = questions[currentQuestion];
  questionContainer.innerHTML = `
    <p>${q.question}</p>
    <input type="text" id="answer" placeholder="Your Answer" />
  `;
}

nextBtn.addEventListener("click", () => {
  const userAnswer = document.getElementById("answer").value.trim();
  if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionContainer.innerHTML = "Quiz completed!";
    scoreDisplay.textContent = `Your Score: ${score}/${questions.length}`;
    nextBtn.style.display = "none";
  }
});

showQuestion();

// IMAGE CAROUSEL
const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3"
];
let currentImg = 0;

function updateCarousel() {
  document.getElementById("carousel-img").src = images[currentImg];
}

function nextImage() {
  currentImg = (currentImg + 1) % images.length;
  updateCarousel();
}

function prevImage() {
  currentImg = (currentImg - 1 + images.length) % images.length;
  updateCarousel();
}

// JOKE API FETCH
function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=single")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = data.joke;
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Failed to load joke.";
    });
}