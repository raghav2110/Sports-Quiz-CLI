var chalk = require("chalk");
var readLineSync = require("readline-sync");

var username,sport_name;
var score = 0;

//Dict of Sport Name
sportName = {
  "A": "Cricket",
  "B": "Football"
}

//Data For Question For Each Sport
quesBank = {
  "Cricket": [{
    question: ` How many individual centuries have been scored in World Cup finals so far?
    (A) Five
    (B) Six
    (C) Seven
    `,
    answer: "B",
  },
  {
    question: `Which Year India won the Cricket World Cup?
    (A) 1983 and 2011
    (B) 1992 and 2007
    (C) 2003 and 2015
    `,
    answer: "A",
  },
  {
    question: `How many teams participated in the ICC World Cup 2019?
    (A) Eight
    (B) Ten
    (C) Nine
    `,
    answer: "B",
  },
  {
    question: `Who is known as The God of Cricket?
    (A)  Mahendra Singh Dhoni
    (B) Virat Kohli
    (C) Sachin Tendulkar
    `,
    answer: "C",
  },
  {
    question: `J Who was the Indian Captain when India won the Cricket World Cup in 1983?
    (A) Kapil Dev
    (B) Sunil Gavaskar
    (C) Sachin Tendulkar    
    `,
    answer: "A",
  },
  ],
  "Football": [{
    question: `Which of the following country won Football world Cup maximum times?
    (A) Germany
    (B) Brazil
    (C) Italy
    `,
    answer: "B",
  },
  {
    question: ` Who among the following player scores highest number of goals in Footbal World Cup?
    (A) Meradona
    (B) Miroslave Klose
    (C) Pele
    `,
    answer: "B",
  },
  {
    question: `When was the first FIFA World Cup inaugurated?
    (A) 1932
    (B) 1931
    (C) 1930
    `,
    answer: "C",
  },
  {
    question: `Which of the following country hosted the first Football World Cup?
    (A) Uruguay
    (B) Brazil
    (C) Germany
    `,
    answer: "A",
  },
  {
    question: `Which country became the first nation to win the Football World Cup?
    (A) Uruguay
    (B) Brazil
    (C) Germany
    `,
    answer: "A",
  },
  ]
}

//Display Start Message And Gets User Input
function start() {
  console.log((`Welcome To Sport's Quiz :
  1. Choose any one of the two Sport
  2. There will be 5 questions on the sport you have selected
  3. Each correct answer gets you 1 points. You get nothing for wrong answer.
  4. Enter only 'A', 'B' or 'C' to make choice`));
  username = readLineSync.question("\nLet's Start With Your Name First?\n");
  sportChoice = readLineSync.question(`\nWhich of the following shows do you like the most ${username}?
  (A) Cricket
  (B) Footbal
  Your choice: `);
  sport_name = sportName[sportChoice];
  console.log(chalk.bgBlue(`\n\nGreat, let's begin ${username}!\n`));

}

//This function post question one by one and check for result
function quizTime() {
  for(i=0;i<quesBank[sport_name].length;i++){
    console.log(chalk.bgYellow(`Question ${i + 1}: `));
    console.log(quesBank[sport_name][i].question);
    var ans = readLineSync.question("Your answer: ");
    if (ans === quesBank[sport_name][i].answer) {
      console.log(chalk.green("\n Wohoo Correct Answer! You scored 1 points."))
      score += 1;
      console.log(chalk.bgBlue(`Current score: ${score}`));
      console.log("––––––––––\n\n");
    }
    else {
      console.log(chalk.red("\nWrong Answer! You scored 0 points."));
      console.log(chalk.bgBlue(`Current score: ${score}`));
      console.log("––––––––––\n\n");
    }
  };
}


console.log(chalk.bgBlue("It's A Quiz Time !!\n\n"));
start();
quizTime();
console.log(username,"Your Final Score Is",score)
console.log(chalk.bgYellow("Thanks For Taking The Quiz. Hope You Enjoyed It."));