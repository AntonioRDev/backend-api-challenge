import { Person } from "../../../src/@core/domain/person";
import { SecretSanta } from "../../../src/@core/domain/secret-santa";
import shuffleArray from "shuffle-array";
import { IArrayUtils } from "../../../src/@core/utils/interfaces/array-utils.interface";

class ArrayUtilsMock implements IArrayUtils {
    shuffle<T>(array: T[]): T[] {
        return shuffleArray(array);
    }
}

const sutFactory = () => {
    const persons = [new Person('123', 'Jhon'), new Person('568', 'Ned'), new Person('897', 'Arya'), new Person('100', 'Zoe')]
    return new SecretSanta('fake_id', persons, 2021);
}

describe('Secret Santa', () => {
    it('shoud draw the correct secret santa', () => {
        const arrayUtilsMock = new ArrayUtilsMock();
        const sut = sutFactory();

        sut.draw(arrayUtilsMock);

        expect(sut.pairs.size).not.toBe(0);
    });
})