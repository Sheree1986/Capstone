import React, { Component } from 'react';
import StudentService from '../pages/StudentServices';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            accommodation1: '',
            accommodation2: '',
            accommodation3: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({
                firstName: student.firstName,
                lastName: student.lastName,
                email: student.email,
                accommodation1: student.accommodation1,
                accommodation2: student.accommodation2,
                accommodation3: student.accommodation3
            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, accommodation1: this.state.accommodation1, accommodation2: this.state.accommodation2, accommodation3: this.state.accommodation3};
        console.log('student => ' + (student));
        console.log('id => ' + (this.state.id));
        StudentService.updateStudent(student, Number(this.state.id)).then( res => {
          
            this.props.history.push('/neurohub');
        }).catch(error => {console.log(error)})
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeAccommodation1Handler= (event) => {
        this.setState({accommodation1: event.target.value});
    }
    changeAccommodation2Handler= (event) => {
        this.setState({accommodation2: event.target.value});
    }
    changeAccommodation3Handler= (event) => {
        this.setState({accommodation3: event.target.value});
    }

    cancel(){
        this.props.history.push('/neurohub');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-2 offset-md-2">
                                <h3 className="text-center">Update Student</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                            <label> accommodation1: </label>
                                            <input placeholder="1st Accommodation Request" name="accommodation1" className="form-control" 
                                                value={this.state.accommodation1} onChange={this.changeAccommodation1Handler}/>
                                    </div>
                                    <div className = "form-group">
                                            <label> accommodation2: </label>
                                            <input placeholder="2nd Accommodation Request" name="accommodation2" className="form-control" 
                                                value={this.state.accommodation2} onChange={this.changeAccommodation2Handler}/>
                                    </div>
                                    <div className = "form-group">
                                            <label> accommodation3: </label>
                                            <input placeholder="3rd Accommodation Request" name="accommodation3" className="form-control" 
                                                value={this.state.accommodation3} onChange={this.changeAccommodation3Handler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateStudentComponent