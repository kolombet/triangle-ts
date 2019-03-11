import store from "./store/index";
import { addArticle } from "./actions/index";

console.log("init");
window.store = store;
window.addArticle = addArticle;
