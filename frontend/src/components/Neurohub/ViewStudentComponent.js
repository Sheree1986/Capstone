import React, { Component } from 'react';
import StudentService from '../pages/StudentServices'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
       
    
    }

    componentDidMount() {
        StudentService.getStudentById(this.state.id).then(res => {
            this.setState({ student: res.data });
        })
        }
        list(){
            this.props.history.push('/neurohub');
        

    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-7 offset-md-2">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student First Name: </label>
                            <div> { this.state.student.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Last Name: </label>
                            <div> { this.state.student.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Email Address: </label>
                            <div> { this.state.student.email }</div>
                        </div>
                        <div className = "row">
                            <label> 1st Accommodation Request: </label>
                            <div> { this.state.student.accommodation1 }</div>
                        </div>
                        <div className = "row">
                            <label> 2nd Accommodation Request: </label>
                            <div> { this.state.student.accommodation2 }</div>
                        </div>
                        <div className = "row">
                            <label> 3rd Accommodation Request: </label>
                            <div> { this.state.student.accommodation3 }</div>
                        </div>

                    </div>
                    <button className="btn btn-success" onClick={this.list.bind(this)} style={{marginLeft: "10px"}}>Request List</button>

                </div>
            </div>
            
        )
    }
}

export default ViewStudentComponent;