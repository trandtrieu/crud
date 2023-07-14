import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Employees from "../shared/Employees";

function View() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setHobby(localStorage.getItem("Hobby"));
  }, []);

  return (
    <div>
      <form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder=" Enter Name"
            value={name}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder=" Enter Age"
            value={age}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control type="text" value={hobby} readOnly />
        </Form.Group>
      </form>
    </div>
  );
}

export default View;
