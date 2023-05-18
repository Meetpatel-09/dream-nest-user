import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";





export const Signin = () => {

  
  const [inputs, setInputs] = useState({});
  const [details, setDetails] = useState({});
  const [validations, setValidations] = useState(1);

  const apiUrl = "http://127.0.0.1:5000/login";

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    console.log("hello");

    // if (inputs.customer_email === null || inputs.customer_email === "") {
    //    setValidations()
    // }
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
       customer_email: inputs.customer_email
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        console.log(data);
        console.log(data['data']['customer_id']);
        setDetails(data['data']);
        console.log(details);
        if (data["status"] === 200) {
          if (inputs.password === data["data"]["customer_password"]) {
            console.log("Valid")
            // window.location.href = "/home"
            localStorage.setItem('customer_id', details['customer_id']);
            console.log("LLocak: " + localStorage.getItem('customer_id'))
            navigate("/");
          } else {
            console.log("invalid")
            alert("Invalid Password")
          }
        } else {
          console.log(data["message"]);
          alert("Account Not Found!");
        }
      });
  }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="pt-3" method="post">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="customer_email"
                  name="customer_email"
                  key="customer_email"
                  type="email"
                  autoComplete="email"
                  value={inputs.customer_email || ""} 
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  {/* <a
                    href="#"
                    className="font-semibold text-black hover:text-blue-500"
                  >
                    Forgot password?
                  </a> */}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  key="password"
                  value={inputs.password || ""} 
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex mt-4 w-full justify-center rounded-md border border-black bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            To create new account. {" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 Blac hover:text-indigo-500"
            >
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
