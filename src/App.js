import logo from "./logo.svg";
import React from "react";
import "./App.css";
import searchengine from "./data.js";

function App() {
  const [name, setName] = React.useState("");

  return (
    <div className="App">
      <h2>PROFILE</h2>

      <input
        type="text"
        id="myInput"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onkeyup="myFunction()"
        placeholder="Search for names.."
        title="Type in a name"
      />

      <div>
        {searchengine
          .filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
          .map((item) => {
            return (
              <div class="card">
                <img src={require("./asset/img/myprofile.jpg")} />
                <p class="name">{item.name}</p>
                {/* <p class="image">{item.image}</p> */}
                <p class="title">{item.title}</p>
                <p class="email">{item.email}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
