module.exports = {
    sum: (a, b) => a + b,
    rest: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
    date2000: () => {
        let startDate = new Date('2000-01-01T00:00:00').getTime();
        let todayDate = Date.now();
        console.log(startDate, todayDate);
        return (todayDate-startDate)/1000;
    }
};