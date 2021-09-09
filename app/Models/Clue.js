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
      <div>
        <p>${this.category} - $${this.value}</p>
        <h3>${this.question}</h3>
      </div>
    `
  }

}