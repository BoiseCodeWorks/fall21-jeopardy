import { ProxyState } from "../AppState.js";
import { jService } from "../Services/JService.js";

function _drawClues() {
  // FIXME refactor this is going to be wrong
  console.log('draw the clue', ProxyState.clues);
  let template = ''
  ProxyState.clues.forEach(c => template += c.Template)
  document.getElementById('clues').innerHTML = template
}

export class ClueController {
  constructor() {
    ProxyState.on('clues', _drawClues)
    jService.getRandomClue()
  }
}
