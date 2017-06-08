"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var courseSlot_model_1 = require("../model/courseSlot.model");
var router_1 = require("@angular/router");
var CourseComponent = (function () {
    function CourseComponent() {
        this.courses = [{
                name: 'C',
                description: 'Basic language',
                duration: '1 hour',
                noOfDays: '10 days',
                coach: 'Raghu',
                fee: 500,
                courseSlots: Array < courseSlot_model_1.CourseSlot >= [
                    { timeSlot: '7:00 AM', noOfStudents: 100, availableSlots: 50 },
                    { timeSlot: '9:00 AM', noOfStudents: 10, availableSlots: 30 }
                ]
            },
            {
                name: 'C++',
                description: 'Basic language',
                duration: '1 hour',
                noOfDays: '15 days',
                coach: 'Nag',
                fee: 500,
                courseSlots: Array < courseSlot_model_1.CourseSlot >= [{
                        timeSlot: '7:00 AM',
                        noOfStudents: 100,
                        availableSlots: 50
                    },
                    {
                        timeSlot: '9:00 AM',
                        noOfStudents: 10,
                        availableSlots: 30
                    }]
            }, {
                name: 'Java',
                description: 'Programming Language',
                duration: '1 hour',
                noOfDays: '30 days',
                coach: 'Sumanth',
                fee: 2500,
                courseSlots: []
            }, {
                name: 'TypeScript',
                description: 'Scripting language',
                duration: '1 hour',
                noOfDays: '20 days',
                coach: 'Raghu',
                fee: 800,
                courseSlots: []
            },
            {
                name: 'Angular',
                description: 'Web language',
                duration: '2 hour',
                noOfDays: '30 days',
                coach: 'Sridhar',
                fee: 1000,
                courseSlots: []
            }];
    }
    return CourseComponent;
}());
CourseComponent = __decorate([
    core_1.Component({
        selector: 'course-app',
        directives: [router_1.ROUTER_DIRECTIVES],
        templateUrl: './course.html'
    })
], CourseComponent);
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map