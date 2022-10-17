import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/slices/user/userSlice";
import { useSelector } from "react-redux";


const Logout = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.user);
  const navigate = useNavigate();

  dispatch(logoutUser());

  if(!isLogged){
    navigate("/Login");
  }

};

export default Logout;
