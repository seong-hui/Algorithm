function solution(n, works) {
    works.sort((a, b) => b - a);

    while (n > 0){
        if (works[0] === 0) break;

        let maxIndex = 0;
        for (let i = 1; i < works.length; i++){
            if (works[i] >= works[maxIndex]){
                maxIndex = i;
            } 
            else 
                break;  
        }
        let diff = Math.min(n, maxIndex + 1);
        for (let i = 0; i < diff; i++) {
            works[i] -= 1;
        }
        n -= diff;
    }

    return works.reduce((acc, num) => acc + Math.pow(num, 2), 0);
}

