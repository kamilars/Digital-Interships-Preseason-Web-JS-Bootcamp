function my_count_on_it(param_1) {
    let counter = [];
    for (i = 0; i < param_1.length; i++) {
        counter[i] = param_1[i].length;
    }
    return counter;
};