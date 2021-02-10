import axios from 'axios'

const EMS_GET_ALL_EMPLOYEES ="http://localhost:8080/ems/employees";

class EmployeeService{
    getEmployees(){
        return axios.get(EMS_GET_ALL_EMPLOYEES);
    }
}

export default new EmployeeService();