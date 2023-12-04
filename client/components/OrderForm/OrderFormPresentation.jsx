"use client";
import "./orderForm.css";

const OrderFormPresentation = (props) => {
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
                value={props.formStore.pickupAddress}
                onChange={props.handleInputChange}
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
                  value={props.formStore.pickupEntrance}
                  onChange={props.handleInputChange}
                />
              </div>
              <div className="order-form__pickup-floor">
                <p className="label">Этаж</p>
                <input
                  type="text"
                  name="pickupFloor"
                  className="order-form__pickup-floor pickup-field"
                  placeholder="1"
                  value={props.formStore.pickupFloor}
                  onChange={props.handleInputChange}
                />
              </div>
              <div className="order-form__pickup-flat">
                <p className="label">Квартира</p>
                <input
                  type="text"
                  name="pickupFlat"
                  className="order-form__pickup-flat pickup-field"
                  placeholder="1"
                  value={props.formStore.pickupFlat}
                  onChange={props.handleInputChange}
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
                value={props.formStore.pickupNote}
                onChange={props.handleInputChange}
              />
            </div>
            <div className="order-form__pickup-call">
              <p className="label">Номер телефона</p>
              <input
                type="phone"
                name="pickupPhone"
                className="order-form__pickup-phone pickup-field"
                placeholder="+7 999 999 99 99"
                value={props.formStore.pickupPhone}
                onChange={props.handleInputChange}
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
                value={props.formStore.destinationAddress}
                onChange={props.handleInputChange}
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
                  value={props.formStore.destinationEntrance}
                  onChange={props.handleInputChange}
                />
              </div>
              <div className="order-form__destination-floor">
                <p className="label">Этаж</p>
                <input
                  type="text"
                  name="destinationFloor"
                  className="order-form__destination-floor destination-field"
                  placeholder="1"
                  value={props.formStore.destinationFloor}
                  onChange={props.handleInputChange}
                />
              </div>
              <div className="order-form__destination-flat">
                <p className="label">Квартира</p>
                <input
                  type="text"
                  name="destinationFlat"
                  className="order-form__destination-flat destination-field"
                  placeholder="1"
                  value={props.formStore.destinationFlat}
                  onChange={props.handleInputChange}
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
                value={props.formStore.destinationNote}
                onChange={props.handleInputChange}
              />
            </div>
            <div className="order-form__destination-call">
              <p className="label">Номер телефона</p>
              <input
                type="text"
                name="destinationPhone"
                className="order-form__destination-phone destination-field"
                placeholder="+7 999 999 99 99"
                value={props.formStore.destinationPhone}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <button
            onClick={(e) => {
              props.query(e);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrderFormPresentation;
