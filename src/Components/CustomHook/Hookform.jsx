import React from "react";
import useInputState from "../../hookss/inputhook";

const Hookform = () => {
  const [name, handlenameChange] = useInputState("okkk");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handlenameChange} type="text" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" name="" id="" value="submit" />
        {/* {error ? `${error} Fuck you` : ""} */}
      </form>
    </div>
  );
};

export default Hookform;
