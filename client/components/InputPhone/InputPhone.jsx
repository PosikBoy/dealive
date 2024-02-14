"use client";
import "./InputPhone.css";
import { useEffect, useState } from "react";
const InputPhone = (props) => {
  const [isBlur, setIsBlur] = useState(false);
  const [error, setError] = useState(false);
  const blurHandler = (e) => {
    setIsBlur(true);
  };
  const phoneChangeHandler = (e) => {
    const regex = /[0-9]|\+/;
    let value = e.target.value;
    if (regex.test(e.nativeEvent.data)) {
      if (value.length < 19) {
        if (!(value[0] == "8" && value.length == 18)) {
          if (value.length == 1 && value[0] == "9") {
            value = "+7 (9";
            props.setPhone(value);
          }
          if (value.length == 1 && value[0] == "7") {
            value = "+7 (";
            props.setPhone(value);
          }
          if (value.length == 1 && value[0] == "8") {
            value = "8 (";
            props.setPhone(value);
          }
          if (value.length == 1 && value[0] == "+") {
            value = "+";
            props.setPhone(value);
          }
          if (value.length == 2 && value[1] == "7") {
            value = "+7 (";
            props.setPhone(value);
          }
          if (value.length > 1) {
            props.setPhone(value);
          }
          if (value[0] == "8" && value.length == 6) {
            value = value + ") ";
            props.setPhone(value);
          }
          if (value[0] == "+" && value[1] == "7" && value.length == 7) {
            value = value + ") ";
            props.setPhone(value);
          }
          if (value[0] == "8" && value.length == 11) {
            value = value + " ";
            props.setPhone(value);
          }
          if (value[1] == "7" && value.length == 12) {
            value = value + " ";
            props.setPhone(value);
          }
          if (value[0] == "8" && value.length == 14) {
            value = value + "-";
            props.setPhone(value);
          }
          if (value[1] == "7" && value.length == 15) {
            value = value + "-";
            props.setPhone(value);
          }
        }
      }
    } else if (e.nativeEvent.data == null) {
      props.setPhone(value);
    }
  };
  useEffect(() => {
    if (props.value.replaceAll(/\D/g, "").length == 11) {
      setError(false);
    } else {
      setError(true);
    }
  }, [props.value]);
  const phonePasteHandler = (e) => {
    e.preventDefault();
    let value = e.clipboardData.getData("text");
    value = value.replaceAll(/\D/g, "");
    if (value[0] == "7") {
      value =
        "+" +
        value[0] +
        " (" +
        value[1] +
        value[2] +
        value[3] +
        ") " +
        value[4] +
        value[5] +
        value[6] +
        " " +
        value[7] +
        value[8] +
        "-" +
        value[9] +
        value[10];
    } else if (value[0] == "8") {
      value =
        value[0] +
        " (" +
        value[1] +
        value[2] +
        value[3] +
        ") " +
        value[4] +
        value[5] +
        value[6] +
        " " +
        value[7] +
        value[8] +
        "-" +
        value[9] +
        value[10];
    } else if (value[0] == "9") {
      value =
        "+7 (" +
        value[0] +
        value[1] +
        value[2] +
        ") " +
        value[3] +
        value[4] +
        value[5] +
        " " +
        value[6] +
        value[7] +
        "-" +
        value[8] +
        value[9];
    }
    props.setPhone(value);
  };
  return (
    <>
      <input
        type="tel"
        className={props.className}
        onChange={phoneChangeHandler}
        onPaste={phonePasteHandler}
        placeholder="+7 (999) 999 99-99"
        value={props.value}
        onBlur={(e) => blurHandler(e)}
      />
      {error && isBlur && (
        <div className="phone-error">В номере что-то не так</div>
      )}
    </>
  );
};

export default InputPhone;
