const questionList = [
    {
        question: "Quel organe produit le cérumen ?",
        answerList: [
            {
                answer: 1,
                text: "Oreille",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Oeil",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Comment appelle-t'on les mots avec le même sens ?",
        answerList: [
            {
                answer: 1,
                text: "Un antonyme",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Un synonyme",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Qu'est ce qui transforme les vibrations en impulsions nerveuses ?",
        answerList: [
            {
                answer: 1,
                text: "Les cellules ciliées",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Les cellules épithéliales",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Comment se nomme l’organe en forme d’escargot qui sert dans l’audition ?",
        answerList: [
            {
                answer: 1,
                text: "Le cloché",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "La cochlée",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Quelle est la plus grande forêt tropicale de la planète ?",
        answerList: [
            {
                answer: 1,
                text: "La forêt amazonienne",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "La forêt de Chanteloup",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Comment appelle t-on une personne qui travaille gratuitement dans une association ?",
        answerList: [
            {
                answer: 1,
                text: "Un bénévole",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Un stagiaire",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Que signifie la CPAM ?",
        answerList: [
            {
                answer: 1,
                text: "Conseil public d'aide aux malentendants",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Caisse primaire d'assurance maladie",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Que soigne un ORL ?",
        answerList: [
            {
                answer: 1,
                text: "Le nez, les oreilles, les yeux",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Le nez, les oreilles, la gorge",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Définition d'un son",
        answerList: [
            {
                answer: 1,
                text: "Onde qui se propage dans un milieu matériel solide, liquide ou gazeux, par mise en vibration des particules",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Un bruit",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Quelles sont les 5 types de surdités ?",
        answerList: [
            {
                answer: 1,
                text: "Légère / Moyenne / Sévère / Profonde / Totale",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Brutale / Partielle / Accidentelle / Traumatique / Temporaire",
                goodAnswer: false
            },
        ]
    },
    {
        question: "A partir de combien de dB l’audition peut-elle être altérée ?",
        answerList: [
            {
                answer: 1,
                text: "80 dB",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "110 dB",
                goodAnswer: false
            },
        ]
    },
    {
        question: "A quel endroit se trouve t-on quand nous sommes en garde à vue ?",
        answerList: [
            {
                answer: 1,
                text: "Prison",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Commissariat",
                goodAnswer: true
            },
        ]
    },
    {
        question: "A combien de dB correspond une alarme incendie ?",
        answerList: [
            {
                answer: 1,
                text: "110",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "120",
                goodAnswer: false
            },
        ]
    },
    {
        question: "George Clemenceau a-t-il été président de la République ?",
        answerList: [
            {
                answer: 1,
                text: "Vrai",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Faux",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Que signifie le sigle CRS ?",
        answerList: [
            {
                answer: 1,
                text: "Compagnie Républicaine de Sécurité",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Compagnie Régionale de Sureté",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Comment est mort Henri IV ?",
        answerList: [
            {
                answer: 1,
                text: "Maladie",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Assassiné",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Au Moyen Âge, comment les habitants des villes étaient-ils appelés ?",
        answerList: [
            {
                answer: 1,
                text: "Des bourgeois",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Des serfs",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Comment appelle-t-on un troupeau de cerfs ?",
        answerList: [
            {
                answer: 1,
                text: "Une horde",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Une harde",
                goodAnswer: true
            },
        ]
    },
    {
        question: "En quelle année la déclaration des droits de l’homme et du citoyens a-t-elle été votée ?",
        answerList: [
            {
                answer: 1,
                text: "1789",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "1803",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Comment appelle t’on le sifflement qui se produit lorsque l’on rapproche trop un micro d’un haut-parleur ?",
        answerList: [
            {
                answer: 1,
                text: "Effet Doppler",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Effet Larsen",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Le lion de mer est... ?",
        answerList: [
            {
                answer: 1,
                text: "Le phoque",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "L'otarie",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Entre 1946 et 1958, la France a connu ... gouvernements ?",
        answerList: [
            {
                answer: 1,
                text: "22",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "27",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Je suis une partie de l’oreille. Je suis aussi un élément d’architecture au-dessus d’une entrée. Que suis-je ?",
        answerList: [
            {
                answer: 1,
                text: "Le pavillon",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Le tympan",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Quel appareil permet de régler la température ?",
        answerList: [
            {
                answer: 1,
                text: "Thermomètre",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Thermostat",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Quelle est l'étoile la plus proche de la terre ?",
        answerList: [
            {
                answer: 1,
                text: "La grande ours",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Le soleil",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Combien de pourcentage d’eau contient le corps humain ?",
        answerList: [
            {
                answer: 1,
                text: "50 à 70%",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "60 à 80%",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Le caoutchouc est un... ?",
        answerList: [
            {
                answer: 1,
                text: "Conducteur",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Isolant",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Quelle catégorie de médicament commençant par “ANT-”, désigne le traitement d’une infection ?",
        answerList: [
            {
                answer: 1,
                text: "Antibiotique",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Antihistaminique",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Quelle est la capitale de l'Inde ?",
        answerList: [
            {
                answer: 1,
                text: "Bombai",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "New Delhi",
                goodAnswer: true
            },
        ]
    }
];

const duelQuestion = [
    {
        question: "En quelle année Léonard de Vinci a peint la Joconde ?",
        answerList: [
            {
                answer: 1,
                text: "1560",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "1503",
                goodAnswer: true
            },
            {
                answer: 3,
                text: "1603",
                goodAnswer: false
            },
            {
                answer: 4,
                text: "1403",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Quelles sont les 3 fonctions principales de l’oreille ?",
        answerList: [
            {
                answer: 1,
                text: "Communication / Emotions / Alerter",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Emotions / Alerter / Bruitage",
                goodAnswer: false
            },
            {
                answer: 3,
                text: "Communication / Emotions / Dormir",
                goodAnswer: false
            },
            {
                answer: 4,
                text: "Alerter / Communication / Entendre",
                goodAnswer: true
            },
        ]
    },
    {
        question: "Quel est le premier homme a avoir posé le pied sur la lune ?",
        answerList: [
            {
                answer: 1,
                text: "Neil Armstrong",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Buzz Aldrin",
                goodAnswer: false
            },
            {
                answer: 3,
                text: "Michael Collins",
                goodAnswer: false
            },
            {
                answer: 4,
                text: "Charles Conrad",
                goodAnswer: false
            },
        ]
    },
    {
        question: "Combien il y a t-il d’os dans le corps humain ?",
        answerList: [
            {
                answer: 1,
                text: "56",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "106",
                goodAnswer: false
            },
            {
                answer: 3,
                text: "206",
                goodAnswer: true
            },
            {
                answer: 4,
                text: "306",
                goodAnswer: false
            },
        ]
    }
];

const qcm = [
    {
        question: "Les parties de l'oreille",
        answerList: [
            {
                answer: 1,
                text: "Etrier",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Muscle sterno-cléido-mastoïdien",
                goodAnswer: false
            },
            {
                answer: 3,
                text: "La trompe d'eustache",
                goodAnswer: true
            },
            {
                answer: 4,
                text: "Enclume",
                goodAnswer: true
            },
            {
                answer: 5,
                text: "Cochlée",
                goodAnswer: true
            },
            {
                answer: 6,
                text: "Muscle strapédien",
                goodAnswer: true
            },
            {
                answer: 7,
                text: "Marteau",
                goodAnswer: true
            }
        ]
    },
    {
        question: "Quelle chanson Johnny Hallyday a-t-il interprété ?",
        answerList: [
            {
                answer: 1,
                text: "Cadillac",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "J'y vais",
                goodAnswer: false
            },
            {
                answer: 3,
                text: "Salut les copains",
                goodAnswer: true
            },
            {
                answer: 4,
                text: "Jeune homme",
                goodAnswer: true
            },
            {
                answer: 5,
                text: "Allumer le feu",
                goodAnswer: true
            },
            {
                answer: 6,
                text: "Le pénitencier",
                goodAnswer: true
            },
            {
                answer: 7,
                text: "Que je t'aime",
                goodAnswer: true
            }
        ]
    },
    {
        question: "Quels sont les plus grand conquérant de l’histoire ?",
        answerList: [
            {
                answer: 1,
                text: "Napoléon",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Alexandre le Grand",
                goodAnswer: true
            },
            {
                answer: 3,
                text: "Jules César",
                goodAnswer: true
            },
            {
                answer: 4,
                text: "Mehmed II / Mehmet II",
                goodAnswer: true
            },
            {
                answer: 5,
                text: "Duc de Wellington",
                goodAnswer: false
            },
            {
                answer: 6,
                text: "Gengis KHAN",
                goodAnswer: true
            },
            {
                answer: 7,
                text: "Darius de perse",
                goodAnswer: true
            }
        ]
    },
    {
        question: "Parmi ces villes, lesquelles font parties de l’Espagne ?",
        answerList: [
            {
                answer: 1,
                text: "Valence",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Tolède",
                goodAnswer: true
            },
            {
                answer: 3,
                text: "Barcelon",
                goodAnswer: true
            },
            {
                answer: 4,
                text: "Madrid",
                goodAnswer: true
            },
            {
                answer: 5,
                text: "Grenade",
                goodAnswer: true
            },
            {
                answer: 6,
                text: "Palma",
                goodAnswer: true
            },
            {
                answer: 7,
                text: "Faro",
                goodAnswer: false
            }
        ]
    },
    {
        question: "Parmis ces maladies, la quelle n’est pas une maladie infectieuse ?",
        answerList: [
            {
                answer: 1,
                text: "Méningite",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Hépatite",
                goodAnswer: true
            },
            {
                answer: 3,
                text: "Rougeole",
                goodAnswer: true
            },
            {
                answer: 4,
                text: "Pneumocoque",
                goodAnswer: true
            },
            {
                answer: 5,
                text: "Jaunisse",
                goodAnswer: false
            },
            {
                answer: 6,
                text: "Grippe",
                goodAnswer: true
            },
            {
                answer: 7,
                text: "Peste",
                goodAnswer: true
            }
        ]
    },
    {
        question: "Parmis ces propositions, la quelle n’est pas un droit du citoyen ?",
        answerList: [
            {
                answer: 1,
                text: "Liberté d'expression",
                goodAnswer: true
            },
            {
                answer: 2,
                text: "Liberté de religion",
                goodAnswer: true
            },
            {
                answer: 3,
                text: "Droit de vote",
                goodAnswer: true
            },
            {
                answer: 4,
                text: "Droit à l'éducation",
                goodAnswer: true
            },
            {
                answer: 5,
                text: "Droit à l'identité",
                goodAnswer: true
            },
            {
                answer: 6,
                text: "Droit à la sûreté",
                goodAnswer: true
            },
            {
                answer: 7,
                text: "Respect des lois",
                goodAnswer: false
            }
        ]
    }
];

const masterQuestion = [
    {
        question: "La BIM fonctionne grâce :",
        answerList: [
            {
                answer: 1,
                text: "Champ électrique",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Bluetooth",
                goodAnswer: false
            },
            {
                answer: 3,
                text: "Champ magnétique",
                goodAnswer: true
            }
        ]
    },
    {
        question: "En quelle année a été crée la SNCF",
        answerList: [
            {
                answer: 1,
                text: "1817",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "1937",
                goodAnswer: true
            },
            {
                answer: 3,
                text: "2025",
                goodAnswer: false
            }
        ]
    },
    {
        question: "Qui était la déesse de l’amour et de la beauté dans l’antiquité grecque ?",
        answerList: [
            {
                answer: 1,
                text: "Venus",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "Uranus",
                goodAnswer: false
            },
            {
                answer: 3,
                text: "Aphrodite",
                goodAnswer: true
            }
        ]
    },
    {
        question: "En quel année le code civil a-t-il été crée ?",
        answerList: [
            {
                answer: 1,
                text: "1789",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "1804",
                goodAnswer: true
            },
            {
                answer: 3,
                text: "1487",
                goodAnswer: false
            }
        ]
    },
    {
        question: "En 1800, Paris comptait combien d’habitants ?",
        answerList: [
            {
                answer: 1,
                text: "3 millions",
                goodAnswer: false
            },
            {
                answer: 2,
                text: "5 millions",
                goodAnswer: true
            },
            {
                answer: 3,
                text: "7 millions",
                goodAnswer: false
            }
        ]
    },
];

export default { questionList, duelQuestion, qcm, masterQuestion };