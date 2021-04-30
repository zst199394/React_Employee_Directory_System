import Axios from "axios";
import React from "react";

class Content extends React.Component {
  state = {
    empDB: [],
    employeesList: [],
    search: "",
  };
  componentDidMount = () => {
    Axios.get("https://randomuser.me/api/?results=200&nat=us").then(
      (response) => {
        console.log(response);
        let employeeDB = response.data.results;
        let employee = [];
        for (let i = 0; i < employeeDB.length; i++) {
          employee.push({
            name: employeeDB[i].name.first + ", " + employeeDB[i].name.last,
            email: employeeDB[i].email,
            cell: employeeDB[i].cell,
            picture: employeeDB[i].picture.large,
          });
        }
        this.setState({
          employeesList: employee,
          empDB: employee,
        });
      }
    );
  };
  sortName =()=>{

  }
  render() {
    return (
      <div>
        <h6>Empolyee data using RandomAPI</h6>
        <button onClick={this.sortName}>Sort by name</button>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">cell</th>
              <th scope="col">pic</th>
            </tr>
          </thead>
          <tbody>
              {this.state.employeesList.map((emp,key) => (
                  <tr>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.cell}</td>
                      <td><img src={emp.picture} alt={emp.name}/></td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Content;
