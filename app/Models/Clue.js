export class Clue {
  constructor(clueData) {
    this.question = clueData.question
    this.value = clueData.value
    this.id = clueData.id
    this.answer = clueData.answer
    this.category = clueData.category.title
    this.airdate = clueData.airdate
  }

  get Template() {
    return /*html*/`
    <div id="${this.id}">
      <div class="question selectable" onclick="app.clueController.showAnswer('${this.id}')" id="${this.id}-question">
        <p>${this.category} - $${this.value}</p>
        <h3>${this.question}</h3>
      </div>
      <div class="answer visually-hidden" id="${this.id}-answer">
        <p>${this.answer}</p>
      </div>
    </div>
    `
  }

}