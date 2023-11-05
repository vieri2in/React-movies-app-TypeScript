import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z.string().min(3, { message: "Name must be three characters long." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18 years." }),
});
// interface FormData {
//   name: string;
//   age: number;
// }
type FormData = z.infer<typeof schema>;
const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   // console.log("Submitted.");
  //   if (nameRef.current != null) person.name = nameRef.current.value;
  //   if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
  //   console.log(person);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // {...register("name", { required: true, minLength: 3 })}
          {...register("name")}
          // ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        />

        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        {/* {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be 3 characters long.</p>
        )} */}

        {/* <p>hhh</p> */}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          // ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;