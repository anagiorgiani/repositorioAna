const obj1 = require("../exercises-jest/compareobj");
const obj2 = require("../exercises-jest/compareobj");
const obj3 = require("../exercises-jest/compareobj");

describe('requisito 5', () => {
    it('compare os objetos', () => {
        const obj1 = {
            title: 'My Title',
            description: 'My Description',
        };

        const obj2 = {
            description: 'My Description',
            title: 'My Title',
        };

        const obj3 = {
            title: 'My Different Title',
            description: 'My Description',
        };
        expect(obj1).toEqual(obj2);
        expect(obj2).not.toEqual(obj3);
        expect(obj2).not.toEqual(obj3);
    });
});
