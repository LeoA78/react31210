import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
//import { createUser, setMessage } from '../../slices/user/userSlice';

export default function SignUp() {
  const [value, setValue] = React.useState("1");
  const [message, setMessage] = React.useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (verifyData(data)) {

      const user = {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        address: {
          street: data.street,
          streetNumber: data.streetNumber,
          apartment: data.apartment,
          postcode: data.postcode,
        },
      };

      console.log(user);

      setMessage({
        type: "success",
        detail:
          "Usuario creado con éxito. Te enviamos un mail para que puedas activar tu cuenta.",
      });
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isExistingUser = (email) => {
    //  return users.find(user => user.email === email);
  };

  const verifyData = (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const name = data.name;
    const lastName = data.lastName;
    const street = data.street;
    const streetNumber = data.streetNumber;
    const postcode = data.postcode;

    if (!name) {
      setMessage({ type: "error", detail: "Por favor completa tu nombre" });
      handleChange(null,"1");
      return false;
    }

    if (!lastName) {
      setMessage({ type: "error", detail: "Por favor, completa tu apellido" });
      handleChange(null,"1");
      return false;
    }
    if (!email) {
      setMessage({
        type: "error",
        detail: "Por favor, completa la dirección de correo electrónico",
      });
      handleChange(null,"1");
      return false;
    }

    const emailRegex =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if (!emailRegex.test(email)) {
      setMessage({ type: "error", detail: "El email ingresado no es válido" });
      handleChange(null,"1");
      return false;
    }

    if (!password) {
      setMessage({
        type: "error",
        detail: "Por favor, completa la contraseña",
      });
      handleChange(null,"1");
      return false;
    }

    if (!confirmPassword) {
      setMessage({
        type: "error",
        detail: "Por favor, completa la verificación de contraseña",
      });
      handleChange(null,"1");
      return false;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", detail: "Las contraseñas no coinciden" });
      handleChange(null,"1");
      return false;
    }

    if (!street) {
      setMessage({ type: "error", detail: "Por favor, completa la Dirección" });
      handleChange(null,"2");
      return false;
    }

    if (!postcode) {
      setMessage({
        type: "error",
        detail: "Por favor, completa el Código Postal",
      });
      handleChange(null,"2");
      return false;
    }

    if (!streetNumber) {
      setMessage({
        type: "error",
        detail: "Por favor, completa el número de dirección",
      });
      handleChange(null,"2");
      return false;
    }

    if (isExistingUser(email)) {
      setMessage({ type: "error", detail: "El usuario ya existe" });
      return false;
    }

    return true;
  };

  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Acá va el submit");
    const data = new FormData(event.currentTarget);

    if (verifyData(data)) {
      const user = {
        name: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
      };
      console.log('Usuario: ',user);
      // dispatch(createUser(user));
      // navigate('/');
      // dispatch(setMessage({ message: ''}));
    }
  };*/

  return (
    <div className="container">
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
          marginTop: "40px",
        }}
      >
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro de Usuarios
          </Typography>
        </Box>

        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="Pestañas de datos">
                  <Tab label="Usuario" value="1" />
                  <Tab label="Dirección" value="2" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="name"
                        fullWidth
                        id="name"
                        label="Nombre"
                        autoFocus
                        {...register("name")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        autoComplete="family-name"
                        {...register("lastName")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        autoComplete="email"
                        {...register("email")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        {...register("password")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="confirmPassword"
                        label="Repetir contraseña"
                        type="password"
                        id="confirmPassword"
                        autoComplete="new-password"
                        {...register("confirmPassword")}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>

              <TabPanel value="2">
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="street"
                        label="Calle"
                        name="street"
                        autoComplete="street-address"
                        {...register("street")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="streetNumber"
                        label="Número de calle"
                        name="streetNumber"
                        {...register("streetNumber")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="apartment"
                        label="Departamento"
                        id="apartment"
                        {...register("apartment")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="postcode"
                        label="Código Postal"
                        id="postcode"
                        autoComplete="postal-code"
                        {...register("postcode")}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
            </TabContext>

            <Box>
              <Typography component="h6" variant="h6">
                {message && (
                  <Alert severity={message.type}>{message.detail}</Alert>
                )}
              </Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Registrarse
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/" variant="body2">
                    ¿Ya tienes una cuenta? Inicia Sesión
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
}
