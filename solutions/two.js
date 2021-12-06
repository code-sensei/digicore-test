/** QUESTION 2
 * In a game of table tennis, two players play against each other in a round of 5. The person with
 * the higher score in round of 5 is leading the other by 1 point. Given a series of output between
 * two players Tom and Jack in table tennis. Output the overall score point by each player in the
 * right order.
 *      a. NB: No point is awarded when both player have same score for same round of game
 *      Input Tom [1, 4, 7, 2, 4] Jack [3, 4, 2, 4, 4] Output [1, 2] Tom led Jack in 1 game,
 *      Jack led Tom in 2 games and they had an equal score in 2 games. Hence our output
 *      is [1, 2] with Tom’s score coming first
 */


/**
 * Assuming a total of 5 rounds to Table tennis between Tom & Jack
 * Assuming parameters are arrays of numbers
 * @param {Array<number>} tPoints Tom's points for each round
 * @param {Array<number>} jPoints Jack's point for each round
 */
const tableTennisScores = (tPoints, jPoints) => {
    const totalRounds = 5;
    let tWins = 0; // number of wins for Tom
    let jWins = 0; // number of wins for Jack

    for (let index = 0; index < totalRounds; index++) {
        let tScore = tPoints[index]; // Tom's score for round index
        let jScore = jPoints[index]; // Jacks score for round index
        
        if (tScore < jScore) {
            jWins += 1;
        } else if (tScore > jScore) {
            tWins += 1;
        } else {
            continue;
        }
    }

    console.log([tWins, jWins]);
}

tableTennisScores([3, 4, 7, 2, 4], [3, 4, 2, 4, 4]);