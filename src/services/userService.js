const URL_API_VERIFY_USER = "http://localhost:8080/user/verify";
const URL_API_USERS = `http://localhost:8080/user/`;

export const postVerifyUser = (token) => {
  const result = fetch(`${URL_API_VERIFY_USER}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: token,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
    });

  return result;
};

export const postRegisterUser = (user) => {
  const result = fetch(`${URL_API_USERS}/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
    });

  return result;
};

export const postLoginUser = (user) => {
  const result = fetch(`${URL_API_USERS}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
    });

  return result;
};
