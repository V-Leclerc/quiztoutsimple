import questions from "./data.js";

const question = document.getElementById("question");
const answers = document.getElementById("answers-list");
let questionId = 0;
let questionType = {
    "quiz": 0,
    "duel": 0,
    "coupParCoup": 0,
    "coupMaitre": 0
};
let currentTarget = "quiz";
let selectedButton = null;
let actualMenu = null;
const quiz = questions.questionList;
const duel = questions.duelQuestion;
const coupParCoup = questions.qcm;
const coupMaitre = questions.masterQuestion;

// Question de base
const showingQuestion = () => {
    question.innerHTML = `<p class="d-flex justify-content-center">${actualMenu[questionId].question}</p>`;

    // Récupère la question selon l'id du quiz sélectionné et boucle pour récupérer toutes les propositions
    for (const el of actualMenu[questionId].answerList) {
        // Si le quiz en cours est celui du coup de maître, la troisième proposition sera un point d'interrogation
        // Sinon, il affichera les propositions normalement
        if (actualMenu === coupMaitre && el.answer === 3) {
            answers.innerHTML += `<button type="submit" class="answer-button col-3 btn custom-btn btn-lg btn-light btn-outline-dark mb-2 opacity-100" id="${el.answer}" value=${el.goodAnswer}>?</button>`;
        } else {
            answers.innerHTML += `<button type="submit" class="answer-button col-3 btn custom-btn btn-lg btn-light btn-outline-dark mb-2 opacity-100" id="${el.answer}" value=${el.goodAnswer}>${el.text}</button>`;
        }
    }
    answers.innerHTML += `<button type="submit" class="col-5 btn btn-secondary mt-1" id="show-answer">Afficher la réponse</button>`;

    // On ajoute un event listener sur chaque bouton
    // Tant que l'utilisateur n'a pas validé son choix, il peut cliquer sur une autre proposition qui sera affiché en jaune
    document.querySelectorAll(".answer-button").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            if (selectedButton) {
                selectedButton.classList.remove("btn-warning");
                selectedButton.classList.add("btn-light", "btn-outline-dark");
            }

            selectedButton = e.target;
            selectedButton.classList.remove("btn-light", "btn-outline-dark");
            selectedButton.classList.add("btn-warning");
        })
    })

    // Selon le quiz en cours, cliquer sur le bouton pour afficher les réponses va agir de manière différente
    if (actualMenu === coupParCoup) {
        document.getElementById("show-answer").addEventListener("click", oneWrong);
    } else if (actualMenu === coupMaitre) {
        // Ici, cliquer sur le bouton pour afficher la réponse va bloquer les autres propositions et afficher le vrai texte de la troisième proposition
        document.getElementById("show-answer").addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("3").textContent = `${actualMenu[questionId].answerList[2].text}`;
            document.querySelectorAll(".answer-button").forEach(button => button.disabled = true);
            document.getElementById("show-answer").addEventListener("click", showingAnswer);
        });
    } else {
        document.getElementById("show-answer").addEventListener("click", showingAnswer);
    }
}

// Affichage de la réponse
const showingAnswer = (e) => {
    // On évite le rafraîchissement de la page et on désactive tous les boutons (à l'exception du bouton pour la question suivante qui viendra plus tard)
    e.preventDefault();
    e.target.disabled = true;
    document.querySelectorAll(".answer-button").forEach(button => button.disabled = true);

    // Cette boucle sert à afficher la bonne réponse, que l'utilisateur l'ait sélectionné auparavant ou non
    for (const el of actualMenu[questionId].answerList) {
        if (el.goodAnswer === true) {
            document.getElementById(`${(el.answer).toString()}`).classList.remove("btn-light", "btn-outline-dark", "btn-warning");
            document.getElementById(`${(el.answer).toString()}`).classList.add("btn-success");
        }
    }

    // Si l'utilisateur n'a pas sélectionné la bonne réponse, la proposition vire au rouge pendant que la bonne réponse vire au vert
    if (selectedButton.value === "false") {
        selectedButton.classList.remove("btn-warning");
        selectedButton.classList.add("btn-danger");
    }

    // On incrémente la variable qui est utilisée pour afficher la question en cours
    questionId++;
    answers.innerHTML += `<button type="submit" class="col-5 btn btn-primary mt-1" id="next-question">Question suivante</button>`;

    // Pour afficher la prochaine question, on efface les balises de la question et des propositions avant de revenir sur la fonction pour afficher la question
    document.getElementById("next-question").addEventListener("click", () => {
        question.innerHTML = "";
        answers.innerHTML = "";
        showingQuestion();
    })
};

// Question "coup par coup"
// Sensiblement la même chose que pour afficher une réponse normale, à la différence où la prochaine question ne pourra être affichée qu'une fois la mauvaise réponse sélectionnée
const oneWrong = (e) => {
    e.preventDefault();

    if (selectedButton.value === "true") {
        selectedButton.classList.remove("btn-warning");
        selectedButton.classList.add("btn-success");
        selectedButton.disabled = true;
        selectedButton = null;
    } else {
        selectedButton.classList.remove("btn-warning");
        selectedButton.classList.add("btn-danger");
        e.target.disabled = true;
        document.querySelectorAll(".answer-button").forEach(button => button.disabled = true);

        questionId++;
        answers.innerHTML += `<button type="submit" class="col-5 btn btn-primary mt-1" id="next-question">Question suivante</button>`;

        document.getElementById("next-question").addEventListener("click", () => {
            question.innerHTML = "";
            answers.innerHTML = "";
            showingQuestion();
        })
    }
}

// Démarrage
document.querySelectorAll(".nav-link").forEach(nav => {
    nav.addEventListener("click", (e) => {
        // A chaque changement de quiz, l'objet questionType va enregistrer l'id de la question en cours et l'associer au jeu correspondant
        // Le jeu en question ayant la valeur currentTarget, qui va changer en fonction du bouton sur lequel l'utilisateur a appuyé
        questionType[currentTarget] = questionId;
        switch (e.target.id) {
            /* Dans les cas suivants : 
            - on clean les balises 
            - on change la valeur actualMenu qui affichera les questions et propositions
            - la variable responsable de la question en cours récupère l'id correspond au jeu sélectionné
            - on lance la fonction responsable de l'affichage de la question
            */
            case "quiz":
                if (actualMenu === quiz) {
                    break;
                } else {
                    question.innerHTML = "";
                    answers.innerHTML = "";
                    actualMenu = quiz;
                    currentTarget = "quiz";
                    questionId = questionType[currentTarget];
                    showingQuestion();
                }
                break;
            case "duel":
                if (actualMenu === duel) {
                    break;
                } else {
                    question.innerHTML = "";
                    answers.innerHTML = "";
                    actualMenu = duel;
                    currentTarget = "duel";
                    questionId = questionType[currentTarget];
                    showingQuestion();
                }
                break;
            case "coup-par-coup":
                if (actualMenu === coupParCoup) {
                    break;
                } else {
                    question.innerHTML = "";
                    answers.innerHTML = "";
                    actualMenu = coupParCoup;
                    currentTarget = "coupParCoup";
                    questionId = questionType[currentTarget];
                    showingQuestion();
                }
                break;
            case "coup-de-maitre":
                if (actualMenu === coupMaitre) {
                    break;
                } else {
                    question.innerHTML = "";
                    answers.innerHTML = "";
                    actualMenu = coupMaitre;
                    currentTarget = "coupMaitre";
                    questionId = questionType[currentTarget];
                    showingQuestion();
                }
                break;
            default:
                question.innerHTML = "ERREUR";
        }
    })
});