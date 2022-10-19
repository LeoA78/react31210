import { startLoadingUser, registerUser, setMessage, loginUser } from "./userSlice";
import { postRegisterUser, postLoginUser, postVerifyUser } from "../../../services/userService";


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
          detail: `${result.message}`,
        })
      );
    }

    dispatch(registerUser(result.data));
  };
};

export const verifyUserDB = (token) => {
  return async (dispatch) => {
    
    const result = await postVerifyUser(token);

    console.log('Respuesta verificacion', result);

    if(result.responseCode === 201) {
      dispatch(setMessage({
        type: 'success',
        detail: 'Usuario verificado con éxito. Ya puedes iniciar sesión.'
      }));
    } else {
      dispatch(setMessage({
        type: 'error',
        detail: 'No se pudo verificar el usuario.'
      }));
    }
  }
}

  







