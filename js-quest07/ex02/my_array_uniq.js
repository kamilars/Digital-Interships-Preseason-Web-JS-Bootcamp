function my_array_uniq(param_1) {
    return param_1.filter((curVal, index, arr) => (
        arr.indexOf(curVal) === index
    ))
};