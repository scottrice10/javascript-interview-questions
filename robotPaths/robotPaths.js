/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
   var board = {};
   board.pieces = [];

   for(var i = 0; i < n; i++) {
      board.pieces[i] = [];
      for(var j = 0; j < n; j++) {
         board.pieces[i][j] = false;
      }
   }

   board.togglePiece = function(i, j) {
      board.pieces[i][j] = !board.pieces[i][j];
   };

   board.hasAlreadyVisited = function(i,j){
      return board.pieces[i][j];
   };

   return board;
};

var robotPaths = function(n, board, i, j) {
   board = board || makeBoard(n);
   i = i || 0;
   j = j || 0;

   if(i < 0 || i >= n || j < 0 || j >= n || board.hasAlreadyVisited(i,j)) {
      return 0;
   }

   if(i === n - 1 && j === n - 1){
      return 1;
   }

   board.togglePiece(i,j);

   var paths = robotPaths(n, board, i + 1, j) + robotPaths(n, board, i, j + 1) + robotPaths(n, board, i - 1, j) + robotPaths(n, board, i, j - 1);

   board.togglePiece(i,j);

   return paths;
};

