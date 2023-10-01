import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function Form() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="example"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
