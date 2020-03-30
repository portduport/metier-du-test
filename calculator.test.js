const { sum, rest, mult, div, date2000 } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('reste 2 - 1 to equal 1', () => {
    expect(rest(2, 1)).toBe(1);
});

test('multiplication 3 * 2 to equal 6', () => {
    expect(mult(3, 2)).toBe(6);
});

test('division 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2);
});

describe('date2000', () => {
    let originalDateNow = Date.now;

    beforeEach(() => {
      Date.now = () => new Date("2000-01-01T00:10:00").getTime();
    });

    afterEach(() => {
        Date.now = originalDateNow;
    });

    test('date2000 ', () => {
        expect(date2000()).toBe(600);
    })

});