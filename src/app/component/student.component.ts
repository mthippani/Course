import { Component } from '@angular/core';
import {Course} from '../model/course.model';
import {Student} from '../model/student.model';
import {Router} from '@angular/router'
import { FormGroup, FormBuilder, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'student-app',
  templateUrl: './student.html'
})
export class StudentComponent  {
  studentForm : FormGroup;

 students: Array<Student>=new Array<Student>();
 student: Student=new Student();
 constructor(private router: Router,fb: FormBuilder) {

 this.studentForm = fb.group({
      'firstName' :[null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'email' : [null, Validators.required],
      'course' : [null, Validators.required],  
    });
 }

 save(){
 console.log(this.student.lastName);
  console.log(this.router);

 if(this.students.length<30){
 this.students.push(this.student);
 this.router.navigate(['/course']);
}
else{
  alert("Max reached");
}
 }
}
