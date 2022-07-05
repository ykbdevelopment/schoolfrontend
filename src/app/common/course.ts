import { School } from "./school";
import { Subject } from "./subject";

export class Course {

    id: number;
    grade: string;
    classroom: string;
    school: School;
    subjects: Subject[];

}
