/** QUESTION 1
 * Write a simple algorithm to perform basic operations (add, subtraction, multiplication and
 * division) on a number as String without converting them to Number/Integer
 *      a. Input ‘2’, ‘2’, ‘+’ Output 4’
*/


/**
 * Assuming given parameters will always be 3
 *
 * @param {string} string1 First string operand
 * @param {string} string2 Second string operand
 * @param {string} operation Operator
 */
const stringBasicOperations = (string1, string2, operation) => {
    switch (operation) {
        case '+':
            console.log((+string1 + +string2));
            break;
        case '-':
            console.log((+string1 - +string2));
            break;
        case '*':
            console.log((+string1 * +string2));
            break;
        case '/':
            console.log((+string1 / +string2));
            break;
        default:
            break;
    }
}

stringBasicOperations('2', '2', '/');