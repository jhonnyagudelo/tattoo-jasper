import React from "react";
import { useField } from "formik";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <div>
        <label>
          <input type="checkbox" {...field} {...props} />
        </label>
        {meta.touched && meta.error ? <span>{meta.error}</span> : null}
      </div>
    </>
  );
};
export { Checkbox };
