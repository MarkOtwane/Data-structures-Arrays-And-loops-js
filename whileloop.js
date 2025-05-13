function primechecker(number){
    if (number <= 1) {
        console.log(`${number} not a prime number`);
        return
    }
    let k = 2;
        while(k < number){
            if (number % k === 0) {
                console.log(`${number} is not a prime number`)
                return;
            }
        k++;
        }
        console.log(`${number} is a prime number`);
        
        
        
        
    }
primechecker(9)
