/** QUESTION 3
 * You are choreographing a circus show with various animals. For one act, you are given two
 * kangaroos on a number line ready to jump in the positive direction (i.e, toward positive
 * infinity).
 * The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
 * The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
 * You have to figure out a way to get both kangaroos at the same location at the same time as
 * part of the show. If it is possible, return YES, otherwise return NO. Example
 * if x1 = 1
 * x2= 2
 * v1=2
 * v2 = 1
 * You can see that even though the second kangaroo starts ahead of the first kangaroo, they will
 * both meet at 3 after their first move
 * Function Description
 * kangaroo has the following parameter(s):
 * int x1, int v1: starting position and jump distance for kangaroo 1
 * int x2, int v2: starting position and jump distance for kangaroo 2
 * Returns
 * string: either YES or NO
 * Create a method that takes 4 values x1,x2,v1 and v2 and produces the appropriate answer i.e
 * “YES” or “NO”
 */


/**
 * Assuming no limits to number of jumps in positive direction
 *
 * @param {Number} x1 Starting position of Kangaroo 1
 * @param {Number} x2 Starting position of Kangaroo 2
 * @param {Number} v1 Jump distance of Kangaroo 1
 * @param {Number} v2 Jump distance of Kangaroo 2
 */
const kangaroo = (x1, x2, v1, v2) => {
    let kangaroo1Position = x1;
    let kangaroo2Position = x2;
    let answer = 'NO';

    for (let index = 0; index < Number.POSITIVE_INFINITY; index++) {
        kangaroo1Position += v1;
        kangaroo2Position += v2;

        while (kangaroo1Position === kangaroo2Position) {
            answer = 'YES';
            break;
        }
    }

    console.log(answer);
}

/**
 * Assuming a limit to number of jumps in positive direction
 *
 * @param {Number} x1 Starting position of Kangaroo 1
 * @param {Number} x2 Starting position of Kangaroo 2
 * @param {Number} v1 Jump distance of Kangaroo 1
 * @param {Number} v2 Jump distance of Kangaroo 2
 */
const kangaroo2 = (x1, x2, v1, v2) => {
    const numberOfJumps = 20;
    let kangaroo1Position = x1;
    let kangaroo2Position = x2;
    let answer = 'NO';

    for (let index = 0; index < numberOfJumps; index++) {
        kangaroo1Position += v1;
        kangaroo2Position += v2;

        while (kangaroo1Position === kangaroo2Position) {
            answer = 'YES';
            break;
        }
    }

    console.log(answer);
}

kangaroo2(1, 2, 2, 1);