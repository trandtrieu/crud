import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "../shared/Employees";
// import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = Employees.length + 1;

    let a = name,
      b = age,
      c = hobby;

    Employees.push({ id: newId, Name: a, Age: b, Hobby: c });
    toast.success("Add employee successfully");
    history("/");
  };

  return (
    <div>
      <form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder=" Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder=" Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHobby">
          <Form.Control
            type="text"
            placeholder=" Enter Hobby"
            required
            onChange={(e) => setHobby(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Add;
