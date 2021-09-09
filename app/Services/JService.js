import { ProxyState } from "../AppState.js";
import { Clue } from "../Models/Clue.js";

// @ts-ignore
const api = axios.create({
  baseURL: 'https://jservice.io/api'
})

class JService {
  async getRandomClue() {
    let res = await api.get('random?count=10')
    console.log('random question response', res);
    ProxyState.clues = res.data.map(c => new Clue(c))
  }
  constructor() {
    console.log('jservice working');
  }
}

export const jService = new JService()