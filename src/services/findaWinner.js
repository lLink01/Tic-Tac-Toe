export default function findAWinner(actual_game){
    const lines = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [4, 1, 6],
        [6, 7, 8]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [p1, p2, p3] = lines[i];
        if(!actual_game[p1]){
            return null;
        }
        else if(actual_game[p1] === actual_game[p2] && actual_game[p2] === actual_game[p3]){
            return actual_game[p1];
        }
    }

    
    
}