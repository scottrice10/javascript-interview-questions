/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 ...etc...
 ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 * Example:
 * rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
 *
 */

var rockPaperScissors = function(rounds) {
   var result = [];
   rounds = rounds || 3;

   var throwsArray = ["rock", "paper", "scissors"];

   var recurse = function(currRound, turn) {
      if(turn === rounds) {
         return result.push(currRound);
      }

      for(var i = 0; i < 3; i++) {
         recurse(currRound.concat(throwsArray[i]), turn + 1);
      }
   };

   recurse([], 0);

   return result;
};
