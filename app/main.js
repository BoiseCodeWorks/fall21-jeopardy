import { ClueController } from "./Controllers/ClueController.js";
import { StatsController } from "./Controllers/StatsController.js";

class App {
  clueController = new ClueController()
  statsController = new StatsController()
}

window["app"] = new App();
