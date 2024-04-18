import React from "react";
import videoBg from "../video.mp4"
import Student from "./Student"
function Login() {
  return (
    <div className="main">
      <div className="overlay">
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div className="content">
        <Student/>
      </div>
    </div>
  );
}

export default Login;
