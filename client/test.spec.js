import { expect } from 'chai';

describe('Array testing: ', () => {
    describe('array prototype map', () => {

        let someData = [2, 4, 6];

        let anotherData  =  someData.map((item, index, data) => {
            return item * 2
        })

        it('test', () => {
            expect(anotherData[0]).to.equal(4);
            expect(anotherData[1]).to.equal(8);
            expect(anotherData[2]).to.equal(12);
        });

    });
});
