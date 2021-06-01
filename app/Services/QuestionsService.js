import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class QuestionsService {
  constructor() {
    console.log("service is here");
  }

  async getQuestions() {
    let res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=14&difficulty=easy"
    );
    let data = await res.json();
    console.log(data);

    ProxyState.questions = data.results.map((q) => new Question(q));
    console.log(ProxyState.questions);
  }

  checkAnswer(event, answer) {
    event.preventDefault();
    let found = ProxyState.questions.find((a) => a.correctAnswer == answer);
    let correct = ProxyState.questions.correct;
    let wrong = ProxyState.questions.wrong;
    if (found) {
      window.alert("correct");
      correct++;
    } else {
      console.log("incorrect");
      wrong++;
    }
    ProxyState.questions.shift();
    ProxyState.questions = ProxyState.questions;
  }
}

export const questionsService = new QuestionsService();
