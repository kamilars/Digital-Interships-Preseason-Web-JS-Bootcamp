function my_average_mark(param_1) {
    
    if (param_1.length == 0) 
        return 0;

    sum = 0;
    for (i = 0; i < param_1.length; i++) {
        sum = param_1[i]["integer"] + sum;
    }

    return (sum/param_1.length).toFixed(1);
};