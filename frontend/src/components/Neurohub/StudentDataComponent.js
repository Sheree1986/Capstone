import React, { Component } from 'react';
import StudentService from '../pages/StudentServices';

class StudentDataComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/viewstudent/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/createstudent/${id}`);
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data });
        });
    }

    addStudent(){
        this.props.history.push('/createstudent/_add');
    }

    render() {
        return (
            <div className = "mainmatch">
                 <h2 className="text-center">Students' Accommodations Request List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr>
                           
                                <th>Student Id</th>
                                <th>Student First Name</th>
                                <th>Student Last Name</th>
                                <th>Student Email</th>
                                <th>Accommodation 1</th>
                                <th>Accommodation 2</th>
                                <th>Accommodation 3</th>
                                <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key={student.id}>
                                        <td> {student.id}</td>
                                       <td> {student.firstName}</td>
                                       <td> {student.lastName}</td>
                                       <td> {student.email}</td>
                                       <td> {student.accommodation1}</td>
                                       <td> {student.accommodation2}</td>
                                       <td> {student.accommodation3}</td>
                                             <td>
                                                 <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default StudentDataComponent
