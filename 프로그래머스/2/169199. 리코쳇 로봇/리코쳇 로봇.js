function solution(board) {
    const row = board.length;
    const col = board[0].length;
    let start;
    let visited = Array.from({ length: row }, () => Array(col).fill(false));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++)
            if (board[i][j] === 'R')
                start = [i, j];
    }

    return bfs(start, board, visited);
}

function bfs(start, board, visited){
    let answer = -1;
    const row = board.length;
    const col = board[0].length;
    const dr = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    let toVisit = [start];
    visited[start[0]][start[1]] = true;

    while (toVisit.length){
        let [x, y] = toVisit.shift();

        if (board[x][y] === 'G'){
            answer = visited[x][y] - 1;
            break;
        }

        for (let i = 0;i < 4; i++){
            let [dx, dy] = dr[i];
            let curx = x;
            let cury = y;
            while (move(curx, cury, dx, dy, board)){
                curx += dx;
                cury += dy;
            }
            if (!visited[curx][cury] && board[curx][cury] !== 'D'){
                toVisit.push([curx, cury]);
                visited[curx][cury] = visited[x][y] + 1;
            }
        }
    }
    return answer;
}

function move(curx, cury, dx, dy, board){
    let x2 = curx + dx;
    let y2 = cury + dy;

    if (0 <= x2 &&x2 < board.length &&
        0 <= y2 && y2 < board[0].length&& board[x2][y2] !== 'D'){
        return 1;
    }else return 0;
}
