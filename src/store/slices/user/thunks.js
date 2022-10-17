import { startLoadingUser, registerUser } from "./userSlice";
import { setMessage, loginUser } from "./userSlice";

const URL_API_USERS = `http://localhost:8080/user/`;

export const registerUserDB = (user) => {
  return async (dispatch) => {
    dispatch(startLoadingUser());

    const result = await postRegisterUser(user);

    if (result.responseCode === 201) {
      dispatch(
        setMessage({
          type: "success",
          detail:
            "Usuario creado con éxito. Te enviamos un mail para que puedas activar tu cuenta.",
        })
      );
    } else {
      dispatch(
        setMessage({
          type: "error",
          detail: `No se pudo crear el usuario. ${result.message}`,
        })
      );
    }

    dispatch(registerUser()); //Para no mostrar el loading
  };
};

export const loginUserDB = (user) => {
  return async (dispatch) => {
    dispatch(startLoadingUser());

    const result = await postLoginUser(user);

    console.log(result)

    if (result.responseCode === 200) {

      dispatch(loginUser(result.data));
      
    } else {
      dispatch(
        setMessage({
          type: "error",
          detail: `No se pudo loguear el usuario. ${result.message}`,
        })
      );
    }

    dispatch(registerUser(result.data));
  };
};

const postRegisterUser = (user) => {
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

const postLoginUser = (user) => {
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
