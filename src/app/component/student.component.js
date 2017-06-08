"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var student_model_1 = require("../model/student.model");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var StudentComponent = (function () {
    function StudentComponent(router, fb) {
        this.router = router;
        this.students = new Array();
        this.student = new student_model_1.Student();
        this.studentForm = fb.group({
            'firstName': [null, forms_1.Validators.required],
            'lastName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(10)])],
            'email': [null, forms_1.Validators.required],
            'course': [null, forms_1.Validators.required],
        });
    }
    StudentComponent.prototype.save = function () {
        console.log(this.student.lastName);
        console.log(this.router);
        if (this.students.length < 30) {
            this.students.push(this.student);
            this.router.navigate(['/course']);
        }
        else {
            alert("Max reached");
        }
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    core_1.Component({
        selector: 'student-app',
        templateUrl: './student.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder])
], StudentComponent);
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map