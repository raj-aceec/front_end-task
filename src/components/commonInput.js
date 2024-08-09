import React, { useState } from "react";
import "../assets/css/style.css";
import SimpleTable from "./simpleTable";
import { Input, Button } from "antd";

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("This field cannot be empty")
      return;
    }

    const validmail = (email) => {


      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(email)
    }
    if (!validmail(email)) {
      alert("Pls enter a valid email")
      return;
    }
    onSubmit({ name, email });
    setEmail("");
    setName("")

  };
  return (
    <div className="container" >
      <div className="header-box">
        <Input className="input-field"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);

          }}
        />
        <br/>
        <br/>
        <Input className="input-field"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
         <br/>
         <br/>
        <Button type="primary" className="buttons" onClick={handleSubmit}>
          {!!editMode ? "Edit user" : "Add user"}

        </Button>
      </div>
    </div>
  );
};

export default InputHandler;
