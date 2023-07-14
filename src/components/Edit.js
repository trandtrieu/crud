import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "../shared/Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [hobby, setHobby] = useState("");

  let history = useNavigate();

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Age = age;
    a.Hobby = hobby;

    history("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("Id"));
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
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder=" Enter Age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHobby">
          <Form.Control
            type="text"
            placeholder=" Enter Hobby"
            value={hobby}
            required
            onChange={(e) => setHobby(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </form>
    </div>
  );
}

export default Edit;
