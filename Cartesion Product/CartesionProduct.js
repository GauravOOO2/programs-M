function CartesionProduct(arr1,arr2){

    const result1 = [];

    for(let i = 0 ; i<arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            result1.push([arr1[i],arr2[j]])
        }
    }

    return result1

    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         result1.push([arr1[i], arr2[j]]);
    //     }
    // }

    // return result1;

}

const arr1 = [1,2];
const arr2 = [3,4,5];
console.log(CartesionProduct(arr1, arr2))






