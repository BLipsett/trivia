import { ProxyState } from "../AppState.js";

export class Question {
  constructor(data) {
    this.question = data.question;
    this.correctAnswer = data.correct_answer;
    this.wrongAnswers = data.incorrect_answers;
    this.correct = 0;
    this.wrong = 0;
  }

  get questionTemplate() {
    //console.log(this.wrongAnswers);
    // this.wrongAnswers.forEach((a) => {
    //   console.log(a);
    // });

    let answerArray = [];
    this.wrongAnswers.forEach((a) => {
      answerArray.push(a);
    });
    answerArray.push(this.correctAnswer);

    let template = "";
    template += `
    <div class="question" style="border-bottom: 2px solid black">
    <h5>${this.question}<h5>
    <div id="answer-section">
    </div>
    </div>
    `;
    answerArray.forEach((a) => {
      template += `
        <button onclick="app.questionsController.checkAnswer(event, '${a}')">${a}</button>
        `;
    });

    template += `
    <div>
    <h3>correct: ${this.correct} - wrong: ${this.wrong} </h3>
    </div>
    `;

    return template;
  }

  //   get answerTemplate() {
  //     //let wrongAnswerArr = this.wrongAnswers;
  //     this.wrongAnswers.forEach((q) => {
  //       return `
  //         <button>${q}</button>
  //         `;
  //     });
  //   }
}
