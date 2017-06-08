import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CourseComponent }  from './component/course.component';
import { StudentComponent }  from './component/student.component';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { CommonModule }  from '@angular/common';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([{ path: 'createStudent', component: StudentComponent },
      { path: 'course', component: CourseComponent }
])
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,

  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }


