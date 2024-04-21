document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "Quelle est ta qualité la plus admirable?",
      answers: ["Courage", "Loyauté", "Intelligence", "Ambition"],
    },
    {
      question: "Quel est ton animal préféré?",
      answers: ["Lion", "Blaireau", "Aigle", "Serpent"],
    },
    {
      question: "Comment réagis-tu face à un défi?",
      answers: [
        "Je fonce tête baissée",
        "Je reste calme et soutiens mes amis",
        "J'analyse la situation",
        "Je trouve une façon de tirer avantage de la situation",
      ],
    },
    {
      question: "Quelle matière préfères-tu à Poudlard?",
      answers: [
        "Défense contre les forces du Mal",
        "Soins aux créatures magiques",
        "Sortilèges",
        "Potions",
      ],
    },
    {
      question: "Quel objet emporterais-tu avec toi sur une île déserte?",
      answers: ["Une épée", "Une couverture", "Un livre", "Un miroir"],
    },
    {
      question: "Quel genre de personne es-tu lors d'une soirée?",
      answers: [
        "La vie de la fête",
        "Le fidèle ami",
        "Le penseur",
        "Le stratège",
      ],
    },
    {
      question: "Si tu pouvais choisir, quelle capacité aimerais-tu avoir?",
      answers: [
        "Être invincible",
        "Être inséparable",
        "Être le plus intelligent",
        "Être le plus puissant",
      ],
    },
    {
      question: "Quel sort préfères-tu?",
      answers: ["Expelliarmus", "Riddikulus", "Accio", "Avada Kedavra"],
    },
    {
      question: "Quelle est ta devise?",
      answers: [
        "Faire ce qui est juste",
        "Faire ce qui est nécessaire",
        "Faire ce qui est sage",
        "Faire ce qui est avantageux",
      ],
    },
    {
      question: "Que crains-tu le plus?",
      answers: ["L'échec", "L'obscurité", "L'ignorance", "Le pouvoir"],
    },
  ];
  let questionIndex = 0;
  let scores = { Gryffondor: 0, Poufsouffle: 0, Serdaigle: 0, Serpentard: 0 };

  function displayQuestion() {
    if (questionIndex < questions.length) {
      const currentQuestion = questions[questionIndex];
      const answersContainer = document.getElementById("answers-container");
      document.getElementById("question-bubble").textContent =
        currentQuestion.question;
      answersContainer.innerHTML = "";
      currentQuestion.answers.forEach((answer, index) => {
        const answerDiv = document.createElement("div");
        answerDiv.textContent = answer;
        answerDiv.classList.add("answer");
        answerDiv.onclick = function () {
          answerQuestion(index);
        };
        answersContainer.appendChild(answerDiv);
      });
    } else {
      showResult();
    }
  }

  function answerQuestion(answerIndex) {
    const houses = ["Gryffondor", "Poufsouffle", "Serdaigle", "Serpentard"];
    scores[houses[answerIndex]] += 1; // Incrémente le score de la maison correspondante
    questionIndex++;
    displayQuestion();
  }

  function showResult() {
    const result = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    ); // Trouve la maison avec le score le plus élevé
    document.getElementById("question-bubble").textContent =
      "La maison qui vous correspond le mieux est " + result + "!";
    document.getElementById("answers-container").innerHTML = ""; // Efface les réponses
  }

  displayQuestion();
});
