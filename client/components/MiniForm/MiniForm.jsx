"use client";

import Link from "next/link";
import "./miniForm.css";
import formStore from "@/stores/order-form-store";
import { observer } from "mobx-react-lite";

const MiniForm = observer(() => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "pickupAddress":
        formStore.setPickupAddress(value);
        break;
      case "destinationAddress":
        formStore.setDestinationAddress(value);
        break;
    }
  };
  return (
    <form action="" className="mini-form">
      <div className="mini-form__body">
        <div className="mini-form__title">Форма заказа</div>
        <div className="mini-form__pickup">
          <div className="mini-form__pickup-title ">Где забрать</div>
          <input
            type="text"
            name="pickupAddress"
            className="mini-form__pickup-field mini-field"
            placeholder="Москва, ул. Гурьянова 30"
            value={formStore.pickupAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="mini-form__destination">
          <div className="mini-form__destination-title">Куда доставить</div>
          <input
            type="text"
            name="destinationAddress"
            className="mini-form__destination-field mini-field"
            placeholder="Москва, ул. Удальцова 26"
            value={formStore.destinationAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="mini-form__button">
          <Link href="/order" className="mini-form__link">
            Далее
          </Link>
        </div>
      </div>
    </form>
  );
});

export default MiniForm;
