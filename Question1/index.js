var printValues = function (number) {
    switch (true) {
        case number % 2 === 0:
            console.log("candy");
            break;
        case number % 11 === 0:
            console.log("bar");
            break;
        case number % 22 === 0:
            console.log("candybar");
            break;
        default:
            console.log(number);
    }
};
printValues(122222222);
