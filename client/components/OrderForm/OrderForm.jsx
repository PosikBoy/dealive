"use client";
import "./orderForm.css";
import { useStores } from "@/stores/root-store-context";
import { useEffect, useState } from "react";
import OrderFormPresentation from "./OrderFormPresentation";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useRouter } from "next/navigation";
const OrderForm = () => {
  const router = useRouter();
  const { orderForm } = useStores();
  const [modalWindow, setModalWindow] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const formCheck = (orderForm) => {
    if (
      orderForm.pickupAddress.length > 4 &&
      orderForm.destinationAddress.length > 4 &&
      orderForm.pickupPhone.replaceAll(/\D/g, "").length == 11 &&
      orderForm.destinationPhone.replaceAll(/\D/g, "").length == 11 &&
      orderForm.infoParcel.length != 0 &&
      orderForm.infoPhone.replaceAll(/\D/g, "").length == 11
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "pickupAddress":
        orderForm.setPickupAddress(value);
        break;
      case "pickupEntrance":
        orderForm.setPickupEntrance(value);
        break;
      case "pickupFloor":
        orderForm.setPickupFloor(value);
        break;
      case "pickupFlat":
        orderForm.setPickupFlat(value);
        break;
      case "pickupNote":
        orderForm.setPickupNote(value);
        break;
      case "destinationAddress":
        orderForm.setDestinationAddress(value);
        break;
      case "destinationEntrance":
        orderForm.setDestinationEntrance(value);
        break;
      case "destinationFloor":
        orderForm.setDestinationFloor(value);
        break;
      case "destinationFlat":
        orderForm.setDestinationFlat(value);
        break;
      case "destinationNote":
        orderForm.setDestinationNote(value);
        break;
      case "infoParcel":
        orderForm.setInfoParcel(value);
        break;
      case "infoWeight":
        if (value.length <= 10) {
          orderForm.setInfoWeight(value);
          break;
        }
    }
  };
  const getProfileInfo = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/profileinfo", {
        headers: {
          Authorization: `Bearer ${token}`, // Передача JWT токена в заголовке запроса
        },
      });
      const jsonData = await response.json();
      orderForm.setInfoPhone(jsonData.profile[0].phone_number || "");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    token && getProfileInfo(token);
  }, []);
  const sendOrder = async (e) => {
    e.preventDefault();
    if (formCheck(orderForm)) {
      try {
        const token = localStorage.getItem("token");
        const result = await fetch("http://localhost:5000/sendorder", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Активный",
            address1:
              orderForm.pickupAddress +
              (orderForm.pickupEntrance
                ? ", подъезд " + orderForm.pickupEntrance
                : "") +
              (orderForm.pickupFloor ? ", этаж " + orderForm.pickupFloor : "") +
              (orderForm.pickupFlat
                ? ", квартира " + orderForm.pickupFlat
                : ""),
            phone1: orderForm.pickupPhone,
            note1: orderForm.pickupNote,
            address2:
              orderForm.destinationAddress +
              (orderForm.destinationEntrance
                ? ", подъезд " + orderForm.destinationEntrance
                : "") +
              (orderForm.destinationFloor
                ? ", этаж " + orderForm.destinationFloor
                : "") +
              (orderForm.destinationFlat
                ? ", квартира " + orderForm.destinationFlat
                : ""),
            phone2: orderForm.destinationPhone,
            note2: orderForm.destinationNote,
            phone: orderForm.infoPhone,
            weight: orderForm.infoWeight,
            parcel: orderForm.infoParcel,
          }),
        });
        if (result.ok) {
          setModalWindow(true);
          orderForm.clearStore();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsFormValid(false);
    }
  };
  return (
    <>
      <OrderFormPresentation
        orderForm={orderForm}
        handleInputChange={handleInputChange.bind(orderForm)}
        sendOrder={sendOrder}
        isFormValid={isFormValid}
      />
      {modalWindow ? (
        <ModalWindow
          message="Заказ был успешно отправлен"
          textButton="Закрыть окно"
          description="С вами свяжется менеджер для уточнения цены и другой информации"
          onClick={() => {
            setModalWindow(false);
            router.push("/");
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default OrderForm;
