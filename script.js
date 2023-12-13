
  const questions = [
    {
        question: "How many days are in the month of October?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "31 days",
        correctOption: "optionD"
    },

    {
        question: "How many players are on a Baseball team?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionC"
    },

    {
        question: "Who was the first President of USA ?",
        optionA: "Jamie Gorrell",
        optionB: "Mark McGuire",
        optionC: "Tony Gwinn",
        optionD: "George Washington",
        correctOption: "optionD"
    },

    {
        question: "30 days has ______ ?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC"
    },

    {
        question: "How manay hours can be found in a day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "_____ is the coldest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionB"
    },

    {
        question: "What country is the largest ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "Which of these numbers is an even number ?",
        optionA: "1",
        optionB: "5",
        optionC: "7",
        optionD: "8",
        correctOption: "optionD"
    },

    {
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Jamie G.",
        optionC: "Kenny I.",
        optionD: "John Cena",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Atlants",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Iowa",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which baseball team won World Series in 2023 ?",
        optionA: "Twins",
        optionB: "Braves",
        optionC: "Yankees",
        optionD: "Rangers",
        correctOption: "optionD"
    },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How man states does USA have ?",
        optionA: "48",
        optionB: "30",
        optionC: "50",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of New York ?",
        optionA: "Albany",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Iowa ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Des Moines",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an octagon have ?",
        optionA: "8",
        optionB: "7",
        optionC: "6",
        optionD: "5",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet are we currently on ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Human have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionA"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "8",
        optionB: "3",
        optionC: "32",
        optionD: "6",
        correctOption: "optionC"
    }

  ]


  let shuffledQuestions = [] 
  function handleQuestions() { 

    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
  }


  let questionNumber = 1 
  let playerScore = 0  
  let wrongAttempt = 0 
  let indexNumber = 0 


  function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
  }
      function checkForAnswer() {
          const currentQuestion = shuffledQuestions[indexNumber] 
          const currentQuestionAnswer = currentQuestion.correctOption 
          const options = document.getElementsByName("option"); 
          let correctOption = null

          options.forEach((option) => {
              if (option.value === currentQuestionAnswer) {

                  correctOption = option.labels[0].id
              }
          })


          if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
              document.getElementById('option-modal').style.display = "flex"
          }


          options.forEach((option) => {
              if (option.checked === true && option.value === currentQuestionAnswer) {
                  document.getElementById(correctOption).style.backgroundColor = "green"
                  playerScore++ 
                  indexNumber++ 
                  setTimeout(() => {
                      questionNumber++
                  }, 1000)
              }

              else if (option.checked && option.value !== currentQuestionAnswer) {
                  const wrongLabelId = option.labels[0].id
                  document.getElementById(wrongLabelId).style.backgroundColor = "red"
                  document.getElementById(correctOption).style.backgroundColor = "green"
                  wrongAttempt++ 
                  indexNumber++

                  setTimeout(() => {
                      questionNumber++
                  }, 1000)
              }
          })
      }




      function handleNextQuestion() {
          checkForAnswer() 
          unCheckRadioButtons()

          setTimeout(() => {
              if (indexNumber <= 9) {

                  NextQuestion(indexNumber)
              }
              else {
                  handleEndGame()
              }
              resetOptionBackground()
          }, 1000);
      }

      function resetOptionBackground() {
          const options = document.getElementsByName("option");
          options.forEach((option) => {
              document.getElementById(option.labels[0].id).style.backgroundColor = ""
          })
      }


      function unCheckRadioButtons() {
          const options = document.getElementsByName("option");
          for (let i = 0; i < options.length; i++) {
              options[i].checked = false;
          }
      }


      function handleEndGame() {
          let remark = null
          let remarkColor = null


          if (playerScore <= 3) {
              remark = "Bad."
              remarkColor = "red"
          }
          else if (playerScore >= 4 && playerScore < 7) {
              remark = "Come on you can do better."
              remarkColor = "orange"
          }
          else if (playerScore >= 7) {
              remark = "Keep up the good work."
              remarkColor = "green"
          }
          const playerGrade = (playerScore / 10) * 100


          document.getElementById('remarks').innerHTML = remark
          document.getElementById('remarks').style.color = remarkColor
          document.getElementById('grade-percentage').innerHTML = playerGrade
          document.getElementById('wrong-answers').innerHTML = wrongAttempt
          document.getElementById('right-answers').innerHTML = playerScore
          document.getElementById('score-modal').style.display = "flex"

      }

      function closeScoreModal() {
          questionNumber = 1
          playerScore = 0
          wrongAttempt = 0
          indexNumber = 0
          shuffledQuestions = []
          NextQuestion(indexNumber)
          document.getElementById('score-modal').style.display = "none"
      }


      function closeOptionModal() {
          document.getElementById('option-modal').style.display = "none"
      }