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
          empDB: employeeDB,
        });
      }
    );
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    let employeeSearch = this.state.empDB.filter(emp =>{
      if (emp.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 || emp.name.last.toLowerCase().indexOf(value.toLowerCase()) !== -1){
        return true;
      } 
      return false;
    })
    let employee = [];
        for (let i = 0; i < employeeSearch.length; i++) {
          employee.push({
            name: employeeSearch[i].name.first + ", " + employeeSearch[i].name.last,
            email: employeeSearch[i].email,
            cell: employeeSearch[i].cell,
            picture: employeeSearch[i].picture.large,
          });
        }
    console.log(employeeSearch);

    // Updating the input's state
    this.setState({
      [name]: value,
      employeesList: employee
    });
  };

  render() {
    return (
      <div>
        <h6>Empolyee data using RandomAPI</h6>
        <form class ="row">
        <input value={this.state.search} onChange={this.handleInputChange} name="search" class="form-control col-9" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
        <table class="table table-light table-striped">
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
