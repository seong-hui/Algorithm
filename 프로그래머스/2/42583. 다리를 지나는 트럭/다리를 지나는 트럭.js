function solution(bridge_length, weight, truck_weights) {
    let move_truck = [];
    let cur_time = 0;
    
    while(truck_weights.length > 0 || move_truck.length > 0){
         if (move_truck.length > 0 
             && cur_time - move_truck[0][1] === bridge_length)
             move_truck.shift();
        
        if (truck_weights.length > 0 && 
            sum_of_weights(move_truck) + truck_weights[0] <= weight && 
            move_truck.length <= bridge_length)
        {
            let cur_truck = truck_weights.shift();
            move_truck.push([cur_truck, cur_time]);
        }
        cur_time++;
    }
    
    function sum_of_weights(move_truck){
        let sum = 0;
        for(let i=0; i<move_truck.length; i++)
            sum += move_truck[i][0];
        return sum;
    }
    return cur_time;
}