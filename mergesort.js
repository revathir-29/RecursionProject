//[3, 2, 1, 13, 8, 5, 0, 1]
//[105, 79, 100, 110]

const merge = (leftArr , rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex <rightArr.length){
        const leftEle = leftArr[leftIndex];
        const rightEle =rightArr[rightIndex];

        if(leftEle < rightEle) {
            output.push(leftEle);
            leftIndex++;
        }else{
            output.push(rightEle);
            rightIndex++;
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

//console.log(merge([3,6,2,4]))

//recursive
const mergeSort = array => {
    if(array.length <= 1){
        return array;
    }
    const midIndex = Math.floor(array.length)/2;
    const leftArr = array.slice(0, midIndex);
    const rightArr = array.slice(midIndex);
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]))