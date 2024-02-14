import { makeAutoObservable } from "mobx";

class OrderFormStore {
  pickupAddress = "";
  pickupEntrance = "";
  pickupFloor = "";
  pickupFlat = "";
  pickupNote = "";
  pickupPhone = "";
  destinationAddress = "";
  destinationEntrance = "";
  destinationFloor = "";
  destinationFlat = "";
  destinationNote = "";
  destinationPhone = "";
  infoParcel = "";
  infoWeight = "";
  infoPhone = "";

  constructor() {
    makeAutoObservable(this);
  }
  setPickupAddress(address) {
    this.pickupAddress = address;
  }
  setPickupEntrance(entrance) {
    this.pickupEntrance = entrance;
  }
  setPickupFloor(floor) {
    this.pickupFloor = floor;
  }
  setPickupFlat(flat) {
    this.pickupFlat = flat;
  }
  setPickupNote(note) {
    this.pickupNote = note;
  }
  setPickupPhone(phone) {
    this.pickupPhone = phone;
  }
  setDestinationAddress(address) {
    this.destinationAddress = address;
  }
  setDestinationEntrance(entrance) {
    this.destinationEntrance = entrance;
  }
  setDestinationFloor(floor) {
    this.destinationFloor = floor;
  }
  setDestinationFlat(flat) {
    this.destinationFlat = flat;
  }
  setDestinationNote(note) {
    this.destinationNote = note;
  }
  setDestinationPhone(phone) {
    this.destinationPhone = phone;
  }
  setInfoParcel(parcel) {
    this.infoParcel = parcel;
  }
  setInfoWeight(weight) {
    this.infoWeight = weight;
  }
  setInfoPhone(phone) {
    this.infoPhone = phone;
  }
  clearStore() {
    this.pickupAddress = "";
    this.pickupEntrance = "";
    this.pickupFloor = "";
    this.pickupFlat = "";
    this.pickupNote = "";
    this.pickupPhone = "";
    this.destinationAddress = "";
    this.destinationEntrance = "";
    this.destinationFloor = "";
    this.destinationFlat = "";
    this.destinationNote = "";
    this.destinationPhone = "";
    this.infoParcel = "";
    this.infoWeight = "";
    this.infoPhone = "";
  }
}

const orderFormStore = new OrderFormStore();
export default orderFormStore;
