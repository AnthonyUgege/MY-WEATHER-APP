const DEFAULT_CITY = "Berlin";

export const useLocalStorage = (city) => {
  const setRememberedCity = (city) => {
    localStorage.setItem("city", city);
  };

  const getRememberedCity = () => {
    if (localStorage.getItem("city") === null) {
      return DEFAULT_CITY;
    } else {
      return localStorage.getItem("city");
    }
  };

  return { setRememberedCity, getRememberedCity };
};
