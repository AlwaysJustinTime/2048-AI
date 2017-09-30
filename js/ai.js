// performs a search and returns the best move
var bool = true;
var bestMove;
function AI_getBest(grid, debug) {
	var bestScore = 2;
	
	if (bool){
		bestMove = 0;
		bool = false;
	}

	else{
		bestMove = 3
		bool = true;
	}

	return {move: bestMove, score: bestScore};
}

