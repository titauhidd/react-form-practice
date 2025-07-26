import "./App.css";
import Submit from "./Components/Submit/Submit";
import Hookform from "./Components/CustomHook/Hookform";
import Reusable from "./Components/Reusable/Reusable";
function App() {
  const handleSubmitSignup = (data) => {
    // e.preventDefault();
    console.log("sign up", data);
  };

  const handleSubmitProfile = (data) => {
    // e.preventDefault();
    console.log("profile", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Submit></Submit> */}
      {/* <Hookform></Hookform> */}
      <Reusable formTitle={"Sign Up"} handleSubmit={handleSubmitSignup}>
        <div>
          <p>Sing Up Your Profile</p>
        </div>
      </Reusable>
      <Reusable
        formTitle={"Login"}
        btn="Profile Update"
        handleSubmit={handleSubmitProfile}
      >
        <div>
          <p>Update Your Profile</p>
        </div>
      </Reusable>
    </>
  );
}

export default App;
