export class Answer {
  constructor({ correct, incorrect }) {
    this.correct = data.results.correct_answers;
    this.incorrect = data.results.incorrect_answers;
  }

  get answerTemplate() {
    return `
      <div>
      <button>${this.correct}</button>
      <button>${this.incorrect}</button>
      </div>
      `;
  }
}
