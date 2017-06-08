import  {CourseSlot} from './courseSlot.model'

export class Course{
name:string;
description:string;
duration : string;
noOfDays : string;
coach:string;
fee: number;
courseSlots: Array<CourseSlot>;
}