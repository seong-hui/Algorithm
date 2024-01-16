function solution(progresses, speeds) {
    var answer = [];
    
    let firstDay = Math.ceil((100 - progresses[0]) / speeds[0]);
    let wait = [];
    wait.push(firstDay);
    progresses.shift();
    speeds.shift();
    
    while(progresses[0]){
        if(100 <= progresses[0] + firstDay * speeds[0]){
            progresses.shift();
            speeds.shift();
            wait.push(firstDay);
        }
        else
            firstDay++;
        }
    
    
    let current = wait[0];
    let cnt = 1;
    for (let i = 1; i <= wait.length; i++) {
        if (wait[i] === current) {
            cnt++;
        } else {
            answer.push(cnt);
            current = wait[i];
            cnt = 1;
        }
    }

    return answer;
}