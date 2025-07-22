import React, { useState } from "react";

const Submit = () => {
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // console.log("form submitted");
    if (password.length < 8) {
      setError("Erorr");
    } else {
      setError("");
      console.log(password);
    }
  };

  const handlePassword = (e) => {
    console.log(e);
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        <input onChange={handlePassword} type="password" name="password" />
        <br />
        <input type="submit" name="" id="" value="submit" />
        {error ? `${error} Fuck you` : ""}
      </form>
    </div>
  );
};

export default Submit;
