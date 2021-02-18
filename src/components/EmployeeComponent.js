import * as React from 'react';
import EmployeeService from '../services/EmployeeService';

class EmployeeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            employees:[]
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((response) => {
            this.setState({employees:response.data})
        });
    }


    render(){
        return(
            <div>
                <h1 className= "text-center">Employee List</h1>
                <table className = "table table-striped">
                <thead>
                        <tr>
                            <td>Employee ID</td>
                            <td>
                                First Name
                            </td>
                            <td>Last Name</td>
                            <td>Department</td>
                            <td>Contact Number</td>
                            <td>Salary</td>
                            <td>Hire Date</td>
                        </tr>
                    </thead>
                  <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                            <tr key = {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.fname}</td>
                                <td>{employee.lname}</td>
                                <td>{employee.department}</td>
                                <td>{employee.contactNumber}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.hireDate}</td>
                            </tr>
                        )
                    }  
                    </tbody>  
                </table>
            </div>
        )
    }
}

export default EmployeeComponent;