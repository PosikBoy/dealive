"use client";
import "./orderForm.css";
import formStore from "@/stores/order-form-store";
import { observer } from "mobx-react-lite";

const OrderForm = observer(() => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "pickupAddress":
        formStore.setPickupAddress(value);
        break;
      case "pickupEntrance":
        formStore.setPickupEntrance(value);
        break;
      case "pickupFloor":
        formStore.setPickupFloor(value);
        break;
      case "pickupFlat":
        formStore.setPickupFlat(value);
        break;
      case "pickupNote":
        formStore.setPickupNote(value);
        break;
      case "pickupPhone":
        formStore.setPickupPhone(value);
        break;
      case "destinationAddress":
        formStore.setDestinationAddress(value);
        break;
      case "destinationEntrance":
        formStore.setDestinationEntrance(value);
        break;
      case "destinationFloor":
        formStore.setDestinationFloor(value);
        break;
      case "destinationFlat":
        formStore.setDestinationFlat(value);
        break;
      case "destinationNote":
        formStore.setDestinationNote(value);
        break;
      case "destinationPhone":
        formStore.setDestinationPhone(value);
        break;
    }
  };
  return (
    <form action="" className="order-form">
      <div className="form-container">
        <div className="order-form__body">
          <div className="order-form__pickup">
            <div className="order-form__pickup-title ">
              <p>Где забрать</p>
            </div>
            <div className="order-form__pickup-address">
              <p className="label">Введите адрес</p>
              <input
                type="text"
                name="pickupAddress"
                className="order-form__pickup-address pickup-field"
                placeholder="Москва, ул. Гурьянова 30"
                value={formStore.pickupAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="order-form__pickup-properties">
              <div className="order-form__pickup-entrance">
                <p className="label">Подъезд</p>
                <input
                  type="text"
                  name="pickupEntrance"
                  className="order-form__pickup-entrance pickup-field"
                  placeholder="1"
                  value={formStore.pickupEntrance}
                  onChange={handleInputChange}
                />
              </div>
              <div className="order-form__pickup-floor">
                <p className="label">Этаж</p>
                <input
                  type="text"
                  name="pickupFloor"
                  className="order-form__pickup-floor pickup-field"
                  placeholder="1"
                  value={formStore.pickupFloor}
                  onChange={handleInputChange}
                />
              </div>
              <div className="order-form__pickup-flat">
                <p className="label">Квартира</p>
                <input
                  type="text"
                  name="pickupFlat"
                  className="order-form__pickup-flat pickup-field"
                  placeholder="1"
                  value={formStore.pickupFlat}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="order-form__pickup-note">
              <p className="label">Примечание для курьера</p>
              <textarea
                rows="10"
                cols="50"
                type="text"
                name="pickupNote"
                className="order-form__pickup-note pickup-field"
                placeholder="Оставьте под дверью и позвоните мне!"
                value={formStore.pickupNote}
                onChange={handleInputChange}
              />
            </div>
            <div className="order-form__pickup-call">
              <p className="label">Номер телефона</p>
              <input
                type="phone"
                name="pickupPhone"
                className="order-form__pickup-phone pickup-field"
                placeholder="+7 999 999 99 99"
                value={formStore.pickupPhone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="order-form__destination">
            <div className="order-form__destination-title ">
              <p>Куда доставить</p>
            </div>
            <div className="order-form__destination-address">
              <p className="label">Введите адрес</p>
              <input
                type="text"
                name="destinationAddress"
                className="order-form__destination-address destination-field"
                placeholder="Москва, ул. Гурьянова 30"
                value={formStore.destinationAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="order-form__destination-properties">
              <div className="order-form__destination-entrance">
                <p className="label">Подъезд</p>
                <input
                  type="text"
                  name="destinationEntrance"
                  className="order-form__destination-entrance destination-field"
                  placeholder="1"
                  value={formStore.destinationEntrance}
                  onChange={handleInputChange}
                />
              </div>
              <div className="order-form__destination-floor">
                <p className="label">Этаж</p>
                <input
                  type="text"
                  name="destinationFloor"
                  className="order-form__destination-floor destination-field"
                  placeholder="1"
                  value={formStore.destinationFloor}
                  onChange={handleInputChange}
                />
              </div>
              <div className="order-form__destination-flat">
                <p className="label">Квартира</p>
                <input
                  type="text"
                  name="destinationFlat"
                  className="order-form__destination-flat destination-field"
                  placeholder="1"
                  value={formStore.destinationFlat}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="order-form__destination-note">
              <p className="label">Примечание для курьера</p>
              <textarea
                rows="10"
                cols="50"
                type="text"
                name="destinationNote"
                className="order-form__destination-note destination-field"
                placeholder="Оставьте под дверью и позвоните мне!"
                value={formStore.destinationNote}
                onChange={handleInputChange}
              />
            </div>
            <div className="order-form__destination-call">
              <p className="label">Номер телефона</p>
              <input
                type="text"
                name="destinationPhone"
                className="order-form__destination-phone destination-field"
                placeholder="+7 999 999 99 99"
                value={formStore.destinationPhone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            onClick={async (e) => {
              e.preventDefault();
              await fetch("http://localhost:5000/api/orders", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },

                body: JSON.stringify({
                  pickupAddress: formStore.pickupAddress,
                  destinationAddress: formStore.destinationAddress,
                }),
              });
            }}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
});

export default OrderForm;
