import { Component } from '@angular/core';
import {Course} from '../model/course.model';
import {CourseSlot} from '../model/courseSlot.model';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
  selector: 'course-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './course.html'
})
export class CourseComponent {
 courses: Array<Course>=[{
  name:'C',
  description:'Basic language',
  duration : '1 hour',
  noOfDays : '10 days',
  coach :'Raghu',
  fee :500,
  courseSlots: Array<CourseSlot>=[
  { timeSlot:'7:00 AM', noOfStudents: 100, availableSlots: 50 },
  { timeSlot:'9:00 AM', noOfStudents:10,  availableSlots:30 }
  ]
 },
{
  name:'C++',
  description:'Basic language',
  duration : '1 hour',
  noOfDays : '15 days',
  coach :'Nag',
  fee :500,
  courseSlots: Array<CourseSlot>=[ {
  timeSlot:'7:00 AM',
  noOfStudents:100,
  availableSlots:50
  },
  {
  timeSlot:'9:00 AM',
  noOfStudents:10,
  availableSlots:30
  }]
 },{
  name:'Java',
  description:'Programming Language',
  duration : '1 hour',
  noOfDays : '30 days',
  coach :'Sumanth',
  fee :2500,
  courseSlots:[]
 },{
  name:'TypeScript',
  description:'Scripting language',
  duration : '1 hour',
  noOfDays : '20 days',
  coach :'Raghu',
  fee :800,
  courseSlots:[]
 },
 {
  name:'Angular',
  description:'Web language',
  duration : '2 hour',
  noOfDays : '30 days',
  coach :'Sridhar',
  fee :1000,
  courseSlots:[]
 }]; 
}
