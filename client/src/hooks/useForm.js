import axios from "axios";
import { useState } from "react";

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleSubmit = (event) => {
    console.log("val", values);
    if (event) event.preventDefault();
    axios
      .post("http://localhost:5000/arcs", values)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
