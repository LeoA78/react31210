
  const URL_API_ADD_ORDER = "http://localhost:8080/order/add";

export const getData = async (url_api) => {
  try {
      const response = await fetch(url_api);
      const data = await response.json();
      return data;
  } catch (error) {
      console.log(error); 
  }
}



export const postCreateOrder = (order) => {
  const result = fetch(`${URL_API_ADD_ORDER}/`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
  })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
          console.error("Error:", error);
      });

  return result;
};



