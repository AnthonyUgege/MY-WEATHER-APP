import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import useWeatherApi from "./useWeatherApi";
import WeatherData from "./WeatherData";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#weatherAppElement");

const WeatherDataUi = () => {
  const { weather, city, setCity } = useWeatherApi();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalCity, setModalCity] = useState(city);

  function openModal() {
    setIsOpen(true);
  }

  function handleChanges(e) {
    setModalCity(e.target.value);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    setCity(modalCity);

    closeModal();
    setModalCity();
  };

  if (!weather) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
            {weather && !weather.error ? (
              <WeatherData weather={weather} />
            ) : (
              <div>{weather.error.message}</div>
            )}

            <hr />
            <button
              type="submit"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#locModal"
              onClick={openModal}
            >
              Change Location
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        handleChanges={handleChanges}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>City</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={modalCity}
            onChange={handleChanges}
            placeholder="Please enter the name of the city"
          />
          <button onClick={closeModal}>close</button>
          <button onClick={handleSubmit}>Save Changes</button>
        </form>
      </Modal>
    </div>
  );
};

export default WeatherDataUi;
