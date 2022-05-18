// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";



// const RegisterForm = () => {
//   const [getname, setName] = useState([]);
//   const [getemail, setEmail] = useState([]);
//   const [getpassword, setPassword] = useState([]);
//   const { register, handleSubmit, formState: { errors } } = useForm();


//   const handleRegistration = (data) => {
//     console.log(data)
//     setName(data.name); 
//     setEmail(data.email); 
//     setPassword(data.password); 
//   };


//   const handleError = (errors) => {};

//   const registerOptions = {
//     name: { required: "Name is required" },
//     email: { required: "Email is required" },
//     password: {
//       required: "Password is required",
//       minLength: {
//         value: 8,
//         message: "Password must have at least 8 characters"
//       }
//     }
//   };

//   return (
//     <div>
//       <div>{getname}</div>
//       <div>{getemail}</div>
//       <div>{getpassword}</div>
//     <form onSubmit={handleSubmit(handleRegistration, handleError)}>
//       <div>
//         <label>Name</label>
//         <input name="name" type="text" {...register('name', registerOptions.name) }/>
//         <small className="text-danger">
//           {errors?.name && errors.name.message}
//         </small>
//       </div>
//       <div>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           {...register('email', registerOptions.email)}
//         />
//         <small className="text-danger">
//           {errors?.email && errors.email.message}
//         </small>
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           {...register('password', registerOptions.password)}
//         />
//         <small className="text-danger">
//           {errors?.password && errors.password.message}
//         </small>
//       </div>
//       <button>Submit</button>
//     </form>
//     </div>
//   );
// };
// export default RegisterForm;




import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



const RegisterForm = () => {
  const [getname, setName] = useState([]);
  const [getemail, setEmail] = useState([]);
  const [getpassword, setPassword] = useState([]);
  const { register, handleSubmit } = useForm();


  const handleRegistration = (data) => {
    console.log(data)
    setName(data.name); 
    setEmail(data.email); 
    setPassword(data.password); 
  };


  

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
       <div>{getname}</div>
      <div>{getemail}</div>
      <div>{getpassword}</div>
      <div>
        <label>Name</label>
        <input name="name" {...register('name')} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...register('email')} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" {...register('password')} />
      </div>
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;