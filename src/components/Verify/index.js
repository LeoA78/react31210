import "./styles.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { verifyUserDB } from "../../store/slices/user/thunks";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";


function Verify() {

    const { token } = useParams();
    const { message } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(verifyUserDB(token));

    }, [token,dispatch]);



  return (
    <div className="verify-container">
      <div className="verify box">
        <div className="verify-header">
          <h2>Verificación de Usuario</h2>
        </div>

        <div className="verify-body">
          <div className="detail">
        
          <Typography component="h6" variant="h6">
                {message && (
                  <Alert severity={message.type}>{message.detail}</Alert>
                )}
              </Typography>

          </div>
        </div>

        <div className="verify-footer">
          
        </div>
      </div>
    </div>
  );
}

export default Verify;
