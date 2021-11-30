import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.style";
import { getToken } from "../../../utils/auth";

function Modal({ isModalOpen, onClose }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isModalOpen && ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isModalOpen]);

  const handleChange = (e) => {
    if (!!e.target.value) {
      setError(null);
    } else {
      setError("Введите пожалуйста ваш отзывt!");
    }

    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && (e.ctrlKey || e.shiftKey)) {
      handleFormSubmit(e);
    }
  };

  const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!value.length || !value.trim()) {
      setError("Введите пожалуйста ваш отзывt!");
      setValue("");
    } else {
      const message = value.replace("  ", " ").trim();

      const data = {
        token: getCookie("token"),
        review: message,
      };

      const response = await fetch(
        "https://api.digital-investor.kz/api/add-reviews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const res = await response.json();

      if (res.status === 500 || !res) {
        setError("Пожалуйста, попробуйте позже.");
      } else {
        setSuccess("Ваш отзыв успешно отправлен!");
        setTimeout(onClose, 2500);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box} ref={ref}>
        <button
          type="button"
          onClick={onClose}
          style={styles.closeButton}
        ></button>
        <h3 style={styles.title}>Оставьте ваш отзыв</h3>
        <form onSubmit={handleFormSubmit} style={styles.form}>
          <textarea
            placeholder="Введите текст"
            value={value}
            disabled={!!success}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={6}
            style={styles.input}
          />
          {!!error && <p style={styles.error}>{error}</p>}
          {!!success && <p style={styles.success}>{success}</p>}
          <button type="submit" disabled={!!success} style={styles.button}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
