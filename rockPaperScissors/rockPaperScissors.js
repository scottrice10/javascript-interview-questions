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

var rockPaperScissors = function (rounds) {
  rounds = rounds || 5;
  var result = [];
  var throws = ["rock", "paper", "scissors"];

  var recurse = function(index, turn){
    turn = turn || [];
    if(index === rounds){
      result.push(turn);
      return;
    }

    for(var i=0;i<throws.length;i++){
      turn.push(throws[i]);
      recurse(index + 1, turn);
    }
  };

  recurse(0);

  return result;
};
