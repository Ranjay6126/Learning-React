import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitting the form", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input
            {...register("First Name", {
              required: "First Name is required",
              minLength: { value: 3, message: "Min length is at least 3" },
            })}
          />
          {errors["First Name"] && <p>{errors["First Name"].message}</p>}
        </div>
        <br />

        <div>
          <label>Middle Name:</label>
          <input {...register("Middle Name")} />
        </div>
        <br />

        <div>
          <label>Last Name:</label>
          <input {...register("Last Name")} />
        </div>
        <br />

        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </>
  );
}

export default App;



// **********************************************************************




// import { useForm } from "react-hook-form";

// import "./App.css";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   function onSubmit(data) {
//     console.log("Submitting the form:", data);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>First Name:</label>
//           <input
//             {...register("firstName", { required: "First name is required" })}
//           />
//           {errors.firstName && <p>{errors.firstName.message}</p>}
//         </div>
//         <br />

//         <div>
//           <label>Middle Name:</label>
//           <input {...register("middleName")} />
//         </div>
//         <br />

//         <div>
//           <label>Last Name:</label>
//           <input
//             {...register("lastName", { required: "Last name is required" })}
//           />
//           {errors.lastName && <p>{errors.lastName.message}</p>}
//         </div>
//         <br />

//         <input type="submit" />
//       </form>
//     </>
//   );
// }

// export default App;

