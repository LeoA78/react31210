import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from '@mui/icons-material/Save';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUserDB } from "../../store/slices/user/thunks";
import { useEffect } from "react";
import { setMessage } from "../../store/slices/user/userSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const { message, isLogged, isLoading } = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }

    //En caso de haber mensaje de error, lo borramos al cambiar de ruta
    dispatch(setMessage(null));
  }, [isLogged, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(loginUserDB(data));
  };

  return (
    <div className="container-forms">
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de Sesión
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              {...register("email")}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              {...register("password")}
              autoComplete="current-password"
            />
            <Typography component="h6" variant="h6">
              {message && (
                <Alert severity={message.type}>{message.detail}</Alert>
              )}
            </Typography>

            {isLoading ? (
              <LoadingButton
                fullWidth
                variant="contained"
                loadingPosition="start"
                startIcon={<SaveIcon />}
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </LoadingButton>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
            )}

            <Grid container>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"¿Necesitas una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
}
