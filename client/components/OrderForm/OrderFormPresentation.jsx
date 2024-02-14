"use client";
import "./orderForm.css";
import { IoCash } from "react-icons/io5";
import InputPhone from "../InputPhone/InputPhone";
import { observer } from "mobx-react-lite";
const OrderFormPresentation = observer(
  ({ orderForm, handleInputChange, sendOrder, isFormValid }) => {
    return (
      <form className="order-form">
        <div className="form-container">
          <div className="order-form__body">
            <div className="order-form__pickup">
              <div className="order-form__pickup-title ">
                <p>Где забрать</p>
              </div>
              <div className="order-form__pickup-address">
                <p className="label">Введите адрес*</p>
                <input
                  type="text"
                  name="pickupAddress"
                  className="order-form__pickup-address pickup-field"
                  placeholder="Москва, ул. Гурьянова 30"
                  value={orderForm.pickupAddress}
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
                    value={orderForm.pickupEntrance}
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
                    value={orderForm.pickupFloor}
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
                    value={orderForm.pickupFlat}
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
                  value={orderForm.pickupNote}
                  onChange={handleInputChange}
                />
              </div>
              <div className="order-form__pickup-call">
                <p className="label">Номер телефона*</p>
                <InputPhone
                  name="pickupAddress"
                  className="order-form__pickup-address pickup-field"
                  value={orderForm.pickupPhone}
                  setPhone={orderForm.setPickupPhone.bind(orderForm)}
                />
              </div>
            </div>
            <div className="order-form__destination">
              <div className="order-form__destination-title ">
                <p>Куда доставить</p>
              </div>
              <div className="order-form__destination-address">
                <p className="label">Введите адрес*</p>
                <input
                  type="text"
                  name="destinationAddress"
                  className="order-form__destination-address destination-field"
                  placeholder="Москва, ул. Гурьянова 30"
                  value={orderForm.destinationAddress}
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
                    value={orderForm.destinationEntrance}
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
                    value={orderForm.destinationFloor}
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
                    value={orderForm.destinationFlat}
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
                  value={orderForm.destinationNote}
                  onChange={handleInputChange}
                />
              </div>
              <div className="order-form__destination-call">
                <p className="label">Номер телефона*</p>
                <InputPhone
                  name="destinationPhone"
                  className="order-form__destination-phone destination-field"
                  value={orderForm.destinationPhone}
                  setPhone={orderForm.setDestinationPhone.bind(orderForm)}
                />
              </div>
            </div>
            <div className="order-form__info">
              <div className="order-form__info-title">
                <p>Дополнительная информация</p>
              </div>
              <div className="order-form__info-parcel">
                <p className="label">Что везем?*</p>
                <input
                  type="text"
                  name="infoParcel"
                  className="order-form__info-parcel info-field"
                  placeholder="Документы"
                  value={orderForm.infoParcel}
                  onChange={handleInputChange}
                />
              </div>
              <div className="order-form__info-weight">
                <p className="label">Сколько весит груз?</p>
                <input
                  type="text"
                  name="infoWeight"
                  className="order-form__info-weight info-field"
                  placeholder="1"
                  value={orderForm.infoWeight}
                  onChange={handleInputChange}
                />
              </div>
              <div className="order-form__info-phone">
                <p className="label">Ваш номер телефона*</p>
                <InputPhone
                  name="infoPhone"
                  className="order-form__info-phone info-field"
                  value={orderForm.infoPhone}
                  setPhone={orderForm.setInfoPhone.bind(orderForm)}
                />
              </div>
            </div>
            <div className="order-form__pay-cash">
              <IoCash />
              <p>Оплата наличными</p>
            </div>
            {!isFormValid && (
              <div className="order-form__error">
                Пожалуйста, заполните все поля со звездочкой!
              </div>
            )}
            <button onClick={sendOrder} className="order-form__submit">
              Отправить заявку
            </button>
          </div>
        </div>
      </form>
    );
  }
);

export default OrderFormPresentation;
