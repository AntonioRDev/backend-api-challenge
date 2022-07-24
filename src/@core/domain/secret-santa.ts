import { IArrayUtils } from "../utils/interfaces/array-utils.interface";
import { Person } from "./person";

export class SecretSanta {
    pairs: Map<Person, Person> = new Map();

    constructor(public id: string, public participants: Person[], public year: number) {
        if(!participants.length) {
            throw new Error("Participants size cant be 0");
        }

        if(participants.length % 2 !== 0) {
            throw new Error("Participants size have to be pair");
        }

        if(!year) {
            throw new Error("Year is required");
        }
    }

    draw(arrayUtils: IArrayUtils) {
        const shuffledParticipants = arrayUtils.shuffle(this.participants);
        let firstPerson: Person | undefined = undefined;

        shuffledParticipants.forEach((person, index, arry) => {
            if(!firstPerson) {
                firstPerson = person;
            }

            if(index === arry.length - 1) {
                this.pairs.set(person, firstPerson);
            } else {
                this.pairs.set(person, arry[index + 1]);
            }
        });
    }
}