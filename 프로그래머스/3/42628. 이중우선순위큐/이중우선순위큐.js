function solution(operations) {
    var answer = [];
    let heap = [];
    
    for(let i =0; i <operations.length;i++){
        const arr = operations[i].split(" ");
        let num = Number(arr[1]);
        if(arr[0] === "I"){
            heap.push(num);
        }
        else if(arr[0] === "D" && heap[0]){
             if(num < 0){
                 let index = heap.indexOf(getMin(heap),)
                 heap.splice(index, 1);
             }else{
                 let index = heap.indexOf(getMax(heap),)
                 heap.splice(index, 1);
             }
        }
    }
    if(!heap[0])
        answer.push(0, 0);
    if(heap.length > 1)
        answer.push(getMax(heap), getMin(heap));
    
    return answer;
    
    function getMax(heap){
        let max = heap.reduce((a, b) => {
            return Math.max(a, b);
        });
        return max;
    }
       function getMin(heap){
        let min = heap.reduce((a, b) => {
            return Math.min(a, b);
        });
           return min;
    }
}