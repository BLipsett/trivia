import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";

function drawQuestion() {
  let template = "";

  ProxyState.questions.find((q) => (template += q.questionTemplate));
  //ProxyState.questions.forEach((q) => (template += q.answerTemplate));
  document.getElementById("app").innerHTML = template;
}

function drawAnswer() {
  let template = "";
  ProxyState.answers.forEach((a) => (template += a.answerTemplate));
  document.getElementById("answers").innerHTML = template;
}

function correctAnswer() {
  console.log("correct");
}

export class QuestionsController {
  constructor() {
    ProxyState.on("questions", drawQuestion);
    ProxyState.on("answers", drawAnswer);
    drawQuestion();
  }
  getQuestions() {
    questionsService.getQuestions();
  }
  checkAnswer(event, answer) {
    //console.log("correct");
    questionsService.checkAnswer(event, answer);
  }

  incorrectAnswer() {
    console.log("wrong");
  }
}
