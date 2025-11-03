import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const googleSignInHandler = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state?location.state:"/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto mt-8 shadow-2xl">
      <div className="card-body ">
        <h3 className="text-center text-2xl font-bold text-gradient">
          Login Now
        </h3>
        <fieldset className="fieldset text-sm">
          {/* email */}
          <label className="">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="">Forgot password?</a>
          </div>
          <button type="submit" className="btn bg-gradient text-white mt-4">
            Register
          </button>
          <div>
            {/* Google */}
            <button
              onClick={googleSignInHandler}
              className=" w-full btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="">
              Don't have an account,{" "}
              <Link className="text-gradient hover:underline" to="/register">
                Register!
              </Link>
            </p>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
