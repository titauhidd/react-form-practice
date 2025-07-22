import React from "react";

const Submit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        <input type="submit" name="" id="" value="submit" />
      </form>
    </div>
  );
};

export default Submit;
