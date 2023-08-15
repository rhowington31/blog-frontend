import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
    .post("http://localhost:3000/login.json", params)
    .then((response) => {
      console.log(response.data);
      event.target.reset();
    })
    .catch((error)) => {
      console.log("ERROR", error.response.data.errors);
    });
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Email:
          <input name="email" className="form-control" type="email" />
        </div>
        <div>
          Password:
          <input name ="password" className="form-control" type="password" />
        </div>
        <button type="submit">Login</button>
        </form>
        </div>
  );
}

// import axios from "axios";

// export function Signup() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const params = new FormData(event.target);
//     axios
//       .post("http://localhost:3000/users.json", params)
//       .then((response) => {
//         console.log(response.data);
//         event.target.reset();
//       })
//       .catch((error) => {
//         console.log("ERROR", error.response.data.errors);
//       });
//   };

//   return (
//     <div id="signup">
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name:
//           <input name="name" className="form-control" type="text" />
//         </div>
//         <div>
//           Email:
//           <input name="email" className="form-control" type="email" />
//         </div>
//         <div>
//           Password:
//           <input name="password" className="form-contol" type="password" />
//         </div>
//         <div>
//           Password Confirmation:
//           <input name="password_confirmation" className="form-contol" type="password" />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }
