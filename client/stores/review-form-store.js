import { makeAutoObservable } from "mobx";

class ReviewFormStore {
  rating = "";
  advantages = "";
  disadvantages = "";
  description = "";
  constructor() {
    makeAutoObservable(this);
  }
  setRating(rating) {
    console.log(rating);
    this.rating = rating;
  }
  setTitle(title) {
    this.title = title;
  }
  setAdvantages(advantages) {
    this.advantages = advantages;
  }
  setDisadvantages(disadvantages) {
    this.disadvantages = disadvantages;
  }
  setDescription(description) {
    this.description = description;
  }
  clearStore() {
    this.advantages = "";
    this.disadvantages = "";
    this.description = "";
    this.rating = "";
  }
}

const reviewFormStore = new ReviewFormStore();
export default reviewFormStore;
