import { Form } from "antd";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { authRequest } from "../../services/axios";
import { useState } from "react";
import clsx from "clsx";
import { login } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;

function SignInPage() {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handelSubmit(data) {
    authRequest
      .post("/auth/token", {
        username: data.email,
        password: data.password,
        client_id: client_id,
        client_secret: client_secret,
        grant_type: "password",
      })
      .then((res) => {
        dispatch(login(res.data.access_token));
        navigate("/", { replace: true });
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status == 401) {
          setError(true);
        }
      })
      .finally(() => setProcessing(false));
  }

  return (
    <div className="min-h-screen bg-[--layout-bg] relative">
      <div className="h-[280px] w-full absolute top-0 left-0 z-0">
        <div className="h-full bg-[--primary] relative overflow-hidden">
          <img
            src="/distributor-bg.png"
            className="object-cover opacity-20 absolute -top-[50%]"
          />
        </div>
        <svg
          className="absolute w-full bottom-0 left-0 fill-[--layout-bg]"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120"
        >
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
        </svg>
      </div>
      <div className="flex justify-center w-full ">
        <div className="mt-20 w-[450px] rounded p-8 bg-white shadow-default z-10">
          <h2 className="text-[--primary] text-center font-semibold mt-2">
            Welcome back
          </h2>
          <h6 className="text-gray-500 text-center text-[13px] mt-2">
            Sign in to continue to ZingMP3
          </h6>
          <h6
            className={clsx(
              "text-red-500 text-center text-[13px] mt-2 italic",
              !error && "invisible"
            )}
          >
            Email or password incorrect
          </h6>

          <Form onFinish={handelSubmit} autoComplete="off" layout="vertical">
            <div className="">
              <Form.Item
                label={
                  <span className="inline-block font-medium text-[13px]">
                    Email
                  </span>
                }
                required={false}
                name="email"
                rules={[
                  { required: true },
                  {
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email",
                  },
                ]}
              >
                <Input
                  className="placeholder:text-[13px]"
                  placeholder="Enter email"
                />
              </Form.Item>
              <label className="block mt-4">
                <Form.Item
                  label={
                    <span className="inline-block font-medium text-[13px]">
                      Password
                    </span>
                  }
                  required={false}
                  name="password"
                  rules={[{ required: true }]}
                  className="text-[13px]"
                >
                  <Input
                    className="placeholder:text-[13px]"
                    placeholder="Enter password"
                    type="password"
                  />
                </Form.Item>
                <div className="flex items-center justify-end w-full">
                  <button
                    type="button"
                    className="text-xs text-gray-400 hover:text-gray-500 font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              </label>
              <div className="mt-8 mb-20">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-emerald-500 hover:brightness-110 text-white font-medium text-sm h-[38px] rounded disabled:opacity-75"
                  disabled={processing}
                >
                  Sign In
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
