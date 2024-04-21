document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "Quel animal te représente le mieux ?",
      answers: ["Lion", "Chat", "Chouette", "Serpent"],
    },
    {
      question: "Quelle est ton activité préférée ?",
      answers: ["Aventure", "Lire", "Réfléchir", "Planifier"],
    },
    {
      question: "Quel élément te correspond le plus ?",
      answers: ["Feu", "Terre", "Air", "Eau"],
    },
    {
      question: "En cas de conflit, tu es plutôt ?",
      answers: ["Combatif", "Défensif", "Observateur", "Manipulateur"],
    },
    {
      question: "Quel est ton moment de la journée préféré ?",
      answers: ["Matin", "Après-midi", "Soirée", "Nuit"],
    },
    {
      question: "Quel climat préfères-tu ?",
      answers: ["Chaud", "Tempéré", "Frais", "Froid"],
    },
    {
      question: "Quel type de film préfères-tu ?",
      answers: ["Action", "Drame", "Science-fiction", "Horreur"],
    },
    {
      question: "Si tu étais un sorcier, quelle capacité voudrais-tu avoir ?",
      answers: ["Vol", "Invisibilité", "Télépathie", "Immortalité"],
    },
    {
      question: "Quel genre de musique préfères-tu ?",
      answers: ["Rock", "Classique", "Jazz", "Electro"],
    },
    {
      question: "Quel est ton type de vacances idéal ?",
      answers: ["Exploration", "Relaxation", "Culture", "Aventure"],
    },
  ];

  let questionIndex = 0;
  let scores = { Bois: {}, Artefact: {} };

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
    // Assign scores to wood and artefact based on answer index
    const bois = ["Chêne", "Saule", "Ébène", "Vigne"];
    const artefacts = [
      "Plume de phénix",
      "Cœur de dragon",
      "Ventricule de troll",
      "Cheveu de vélane",
    ];
    let selectedWood = bois[answerIndex % 4];
    let selectedArtefact = artefacts[answerIndex % 4];

    if (!scores["Bois"][selectedWood]) {
      scores["Bois"][selectedWood] = 0;
    }
    if (!scores["Artefact"][selectedArtefact]) {
      scores["Artefact"][selectedArtefact] = 0;
    }

    scores["Bois"][selectedWood]++;
    scores["Artefact"][selectedArtefact]++;

    questionIndex++;
    displayQuestion();
  }

  function showResult() {
    let bestWood = Object.keys(scores["Bois"]).reduce((a, b) =>
      scores["Bois"][a] > scores["Bois"][b] ? a : b
    );
    let bestArtefact = Object.keys(scores["Artefact"]).reduce((a, b) =>
      scores["Artefact"][a] > scores["Artefact"][b] ? a : b
    );

    document.getElementById("question-bubble").textContent =
      "La combinaison idéale pour ta baguette est le bois de " +
      bestWood +
      " avec un cœur de " +
      bestArtefact +
      ".";
    document.getElementById("answers-container").innerHTML = "";
  }

  displayQuestion();
});
