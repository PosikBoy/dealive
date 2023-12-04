import { makeAutoObservable } from 'mobx';

class FormStore {
    pickupAddress = '';
    pickupEntrance = '';
    pickupFloor = '';
    pickupFlat = '';
    pickupNote = '';
    pickupPhone = '';
    destinationAddress = '';
    destinationEntrance = '';
    destinationFloor = '';
    destinationFlat = '';
    destinationNote = '';
    destinationPhone = '';
    constructor() {
        makeAutoObservable(this)
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
}

const formStore = new FormStore();
export default formStore;