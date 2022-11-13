


const calc = (operation , ...num)=> {
    let result;
    switch (operation) {
        case "+":
           result = add(...num)
            break;
        case "-":
            result =  sub(...num)
            break;
        case "*":
            result =  multi(...num).toFixed(3)
            break;
         case "/":
             result =   geteilt(...num).toFixed(3)
             break;
    
        default:
            `please enter Vlaid Numbers`
            break;
    }
    return result
}


 console.log(calc("/" , 4 , 16));