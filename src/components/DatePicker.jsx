import { Button, DatePicker } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function Form() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data:", data.datePicker);
    console.log("data:", data.datePicker.$d);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="datePicker"
        control={control}
        // defaultValue=""
        render={({ field }) => (
          <DatePicker {...field} onChange={(date) => field.onChange(date)} />
        )}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
}
