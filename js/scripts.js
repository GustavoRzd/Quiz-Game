// Declaração das variveis

const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Perguntas

const questions = [
    {
        "question": "Qual o maior pais do mundo, em questão territorial?",
        "answers": [
            {
                "answer": "Brasil",
                "correct": false
            },
            {
                "answer": "Russia",
                "correct": true
            },
            {
                "answer": "China",
                "correct": false
            },
            {
                "answer": "Estados Unidos",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o maior oceano do mundo?",
        "answers": [
            {
                "answer": "Oceano Pacifico",
                "correct": true
            },
            {
                "answer": "Oceano Atlântico",
                "correct": false
            },
            {
                "answer": "Oceano Índico",
                "correct": false
            },
            {
                "answer": "Oceano Glacial Ártico",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o pais mais populoso do mundo?",
        "answers": [
            {
                "answer": "China",
                "correct": false
            },
            {
                "answer": "Russia",
                "correct": false
            },
            {
                "answer": "India",
                "correct": true
            },
            {
                "answer": "Japão",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o maior planeta do sistema solar?",
        "answers": [
            {
                "answer": "Terra",
                "correct": false
            },
            {
                "answer": "Saturno",
                "correct": false
            },
            {
                "answer": "Plutão",
                "correct": false
            },
            {
                "answer": "Júpiter",
                "correct": true
            },
        ]
    },
    {
        "question": "De quem é a famosa frase 'Penso, logo existo'?",
        "answers": [
            {
                "answer": "Platão",
                "correct": false
            },
            {
                "answer": "Galileu Galilei",
                "correct": false
            },
            {
                "answer": "Descartes",
                "correct": true
            },
            {
                "answer": "Sócrates",
                "correct": false
            },
        ]
    },
    {
        "question": "De onde é a invenção do chuveiro elétrico?",
        "answers": [
            {
                "answer": "França",
                "correct": false
            },
            {
                "answer": "Brasil",
                "correct": true
            },
            {
                "answer": "Inglaterra",
                "correct": false
            },
            {
                "answer": "Itália",
                "correct": false
            },
        ]
    },
    {
        "question": "Quanto tempo a luz do Sol demora para chegar à Terra?",
        "answers": [
            {
                "answer": "12 minutos",
                "correct": false
            },
            {
                "answer": "1 dia",
                "correct": false
            },
            {
                "answer": "12 horas",
                "correct": false
            },
            {
                "answer": "8 minutos",
                "correct": true
            },
        ]
    },
    {
        "question": "Em que período da pré-história o fogo foi descoberto?",
        "answers": [
            {
                "answer": "Neolítico",
                "correct": false
            },
            {
                "answer": "Paleolítico",
                "correct": true
            },
            {
                "answer": "Idade dos Metais",
                "correct": false
            },
            {
                "answer": "Período da Pedra Polida",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual a montanha mais alta do Brasil?",
        "answers": [
            {
                "answer": "Pico da Neblina",
                "correct": true
            },
            {
                "answer": "Pico Paraná",
                "correct": false
            },
            {
                "answer": "Monte Roraima",
                "correct": false
            },
            {
                "answer": "Pico da Bandeira",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual a velocidade da luz?",
        "answers": [
            {
                "answer": "300 000 000 metros por segundo (m/s)",
                "correct": false
            },
            {
                "answer": "150 000 000 metros por segundo (m/s)",
                "correct": false
            },
            {
                "answer": "199 792 458 metros por segundo (m/s)",
                "correct": false
            },
            {
                "answer": "299 792 458 metros por segundo (m/s)",
                "correct": true
            },
        ]
    },
]

// Substituição do quizz para a primeria pergunta
function init() {
    // criar a primeira pergunta
    createQuestion(0);
  }
  
  // Cria uma pergunta
  function createQuestion(i) {
  
    // Limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll("button");
  
    oldButtons.forEach(function(btn) {
      btn.remove();
    });
  
    // Alterar o texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");
  
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;
  
    // Insere as alternativas
    questions[i].answers.forEach(function(answer, i) {

        // Cria o template do botão do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
    
        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");
    
        letterBtn.textContent = letters[i];
        answerText.textContent = answer["answer"];
    
        answerTemplate.setAttribute("correct-answer", answer["correct"]);
    
        // Remover hide e template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");
    
        // Inserir a alternativa na tela
        answersBox.appendChild(answerTemplate);
    
        // Inserir um evento de click no botão
        answerTemplate.addEventListener("click", function() {
          checkAnswer(this);
        });
    
      });

      //incrimentando o numero da questão

      actualQuestion++;
    

}

function checkAnswer(btn) {

    // selecionar todos botões
    const buttons = answersBox.querySelectorAll("button");
  
    // verifica se a resposta está correta e adiciona classes nos botões
    buttons.forEach(function(button) {
  
      if(button.getAttribute("correct-answer") === "true") {
  
        button.classList.add("correct-answer");
  
        // checa se o usuário acertou a pergunta
        if(btn === button) {
          // incremento dos pontos
          points++;
        }
  
      } else {
  
        button.classList.add("wrong-answer");
  
      }
  
    });
  
    // Exibir próxima pergunta
    nextQuestion();
  
  }
  
  // Exibie a próxima pergunta no quizz
  function nextQuestion() {
  
    // timer para usuário ver as respostas
    setTimeout(function() {
  
      // verifica se ainda há perguntas
      if(actualQuestion >= questions.length) {
        // apresenta a msg de sucesso
        showSucccessMessage();
        return;
      }
  
      createQuestion(actualQuestion);
  
    }, 700);
  
  }
  
  // Exibe a tela final
  function showSucccessMessage() {
  
    hideOrShowQuizz();
  
    // trocar dados da tela de sucesso
  
    // calcular o score
    const score = ((points / questions.length) * 100).toFixed(2);
  
    const displayScore = document.querySelector("#display-score span");
  
    displayScore.textContent = score.toString();
  
    // alterar o número de perguntas corretas
    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points;
  
    // alterar o total de perguntas
    const totalQuestions = document.querySelector("#questions-qty");
    totalQuestions.textContent = questions.length;
  
  }
  
  // Mostra ou esconde o score
  function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
  }
  
  // Reiniciar Quizz
  const restartBtn = document.querySelector("#restart");
  
  restartBtn.addEventListener("click", function() {
  
    // zerar o jogo
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();
  
  });
  
  // Inicialização do Quizz
  init();