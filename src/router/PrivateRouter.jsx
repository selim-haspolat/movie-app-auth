import { Outlet, Navigate, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../auth/firebase-config";

const PrivateRouter = () => {
  const navigate = useNavigate();

  const handleAlert = () => {
    Swal.fire({
      title: "Login",
      text: "You are not be able to view Details",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#00F200",
      cancelButtonColor: "#d33",
      confirmButtonText: "Login Now",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
    return (
      <>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col  justify-center items-center gap-5">
          <span className="text-6xl font-light text-center"> You Have To Login</span><Link to='/login' className="text-2xl text-blue-500 font-extralight hover:underline">Login</Link>
        </div>
      </>
    );
  };

  return <>{auth.currentUser ? <Outlet /> : handleAlert()}</>;
};

export default PrivateRouter;
