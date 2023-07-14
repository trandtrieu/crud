import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Employees from "../shared/Employees";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age, hobby) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
    localStorage.setItem("Hobby", hobby);
  };

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    toast.error("Employee was deleted successfully");

    history("/");
  };

  return (
    <>
      <div style={{ magin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>

              <th>Name</th>
              <th>Age</th>
              <th>Hobby</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>{item.Hobby}</td>

                      <td>
                        <Link to={`/edit`}>
                          <Button
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.Name,
                                item.Age,
                                item.Hobby
                              )
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          DELETE
                        </Button>
                        &nbsp;
                        <Link to={`/view`}>
                          <Button
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.Name,
                                item.Age,
                                item.Hobby
                              )
                            }
                          >
                            View
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
