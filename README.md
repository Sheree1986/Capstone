Neurohub - Full Stack Web Application
Introduction
The Neurohub API lets you create and modify accommodation request. The purpose of this project is to show the process of developing a Full Stack Web Application that uses the MVC architecture. It showcases an Accommodation Request web-based application where users (student) can save, view, update and delete a request for testing accommodations for approval.

React JS for the Frontend

React JavaScript is used to create a web-based application that communicates with the backend via Spring Tools to Create, Read, Update and Delete actions (CRUD). This application serves as the View component in the MVC model.


Java Spring Tools Suite for Backend 


The Java Spring Tools Suite application runs the Controller component of the MVC model by accepting HTTP requests from the View component and converting them to commands for the Model, then sending data back to the View for it to display. MySQL Workbench database that is the Model component of the MVC architecture by providing a dynamic data structure, independent of the user interface.


Local Server is set to host 8081 to separate run instances from another spring application.
API methods
The following methods let you create, read, and update testing accommodation requests:
The Post method uses students.create to create a new request.
{
    "id": 13,
    "firstName": "Toto",
    "lastName": "Freeman",
    "email": "Toto@gmail.com",
    "accommodation1": null,
    "accommodation2": null,
    "accommodation3": null
}


The Get method uses students.get to retrieve the entire contents of a specified request in this case by id.
The Put method uses students.update to atomically perform a set of updates on a specified record.
The Delete method uses students.delete to delete a request records based on the primary key.
Student ID
Students are referenced by their IDs. The ID of a student can be derived from the URL:
http://localhost:8082/api/students/13

Video tutorial resources to build Application

Login in page tutorial Login in page:
https://www.youtube.com/watch?v=aRLoSDOlU3w&t=1459s

Accommodations Request list tutorial:
https://www.youtube.com/watch?v=XkVpb_8IPUM&t=8713s

Problems and tribulations 

1.	Unable to connect login in page to redirect user to the Accommodation request page. 
2.	Getting FULL Stack Application to run on Heroku
3.	Separating both Neurohub and Neurohubbackend on STS (Spring Tools Suite) to run on different local instances. Neurohub (http://localhost:8081/) is running on local host 8081 and Neurohubbackend is running on local host 8082 (http://localhost:8082/).
4.	Auto incrementing is causing consistency issues in the database one a record is deleted. 


Other

Neurohub database link: spring.datasource.url=jdbc:mysql://localhost:3306/neurohubdb
Neurohubbackend database link: spring.datasource.url=jdbc:mysql://localhost:3306/ams?useSSL=false
      
