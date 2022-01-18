import React from "react";
import { useField } from "formik";

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        <label>{label}</label>
        <select>{...field} {...props}</select>
        {meta.touched && meta.error ? <span> {meta.error} </span> : null}
      </div>
    </>
  );
};
export { SelectInput };
