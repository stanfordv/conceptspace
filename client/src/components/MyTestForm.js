import React from "react";

import useForm from "../hooks/useForm";

const MyTestForm = () => {
  const { values, handleChange, handleSubmit } = useForm({
    node: "",
    body: "",
    size: "",
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="node">Node:</label>
        <input
          type="text"
          id="node"
          name="node"
          onChange={handleChange}
          value={values.node || ""}
        />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          onChange={handleChange}
          value={values.body || ""}
        />
        <label htmlFor="size">Size:</label>
        <input
          type="text"
          id="size"
          name="size"
          onChange={handleChange}
          value={values.size || ""}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyTestForm;
