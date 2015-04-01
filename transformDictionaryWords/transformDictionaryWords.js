/**
* Given two words of equal length in a dictionary write a method to transform one word into another by changing only
* one letter at a time. The new word you get in each step must be in the dictionary.
 * Cracking the Coding Interview, Fifth Edition, p.476
 * */

function transformDictionaryWords(startWord, stopWord, dictionary){
  startWord = startWord.toUpperCase();
  stopWord = stopWord.toUpperCase();
  var actionQueue = [];
  var visitedSet = {};
  var backtrackMap = {};

  actionQueue.push(startWord);
  visitedSet[startWord] = true;

  while(actionQueue.length > 0){
    var currWord = actionQueue.shift();

    // for each possible word oneEditWord to currWord with one edit operation
    for(var oneEditWord in getOneEditWords(currWord)){
      if(oneEditWord === stopWord){
        var list = [];
        list.push(oneEditWord);
        while(currWord){
          list.unshift(currWord);
          currWord = backtrackMap[currWord]
        }

        return list;
      }

      // check if oneEditWord is dictionary word
      if(dictionary[oneEditWord]){
        if(!visitedSet[oneEditWord]){
          actionQueue.push(oneEditWord);
          visitedSet[oneEditWord] = true; // mark word as visited
          backtrackMap[oneEditWord] = currWord;
        }
      }
    }
  }

  return null;
}

function getOneEditWords(word) {
  var words = {};
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(var i=0;i<word.length;i++){
    var wordArray = word.split("");

    // substitute letter
    for(var j=0;j<alphabet.length;j++){
      if(alphabet[j] !== word[i]){
        wordArray[i] = alphabet[j];
        words[wordArray.join("")] = true;
      }
    }
  }

  return words;
}

