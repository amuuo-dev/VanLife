import { Outlet, Navigate } from "react-router-dom";
const AuthRequired = () => {
  let authencated = false;
  if (!authencated) {
    return <Navigate to="/login" state={{ message: "You must login first" }} />;
  }
  return (
    <>
      <Outlet />;
    </>
  );
};

export default AuthRequired;
