import React from "react";

const Reusable = ({ formTitle, btn = "Submit", handleSubmit, children }) => {
  const handlelocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      {/* <h2>{formTitle}</h2> */}
      {children}
      <form onSubmit={handlelocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" name="" id="" value={btn} />
        {/* {error ? `${error} Fuck you` : ""} */}
      </form>
    </div>
  );
};

export default Reusable;
