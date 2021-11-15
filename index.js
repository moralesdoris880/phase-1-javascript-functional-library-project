function myEach(collection,alert){
    if(Array.isArray(collection)){
        for (let i in collection){
            alert(collection[i])
        }
    }
    else if( (typeof collection === "object" || typeof collection === 'function') && (collection !== null) ){
        for (let key in collection){
            alert(collection[key])
        }
    }
    return collection;
}
function myMap(collection,alert){
    let newArr = [];
    if(Array.isArray(collection)){
        for (let i in collection){
            newArr.push(alert(collection[i]))
        }
    }
    else if( (typeof collection === "object" || typeof collection === 'function') && (collection !== null) ){
        for (let key in collection){
            newArr.push(alert(collection[key]))
        }
    }
    return newArr; 
}
function myReduce(collection,alert,acc = '0'){
    let sum = acc;
    if(Array.isArray(collection)){
        for (let i in collection){
            console.log(collection[i])
        }
    }
    else if( (typeof collection === "object" || typeof collection === 'function') && (collection !== null) ){
        for (let key in collection){
            console.log(collection[key])
        }
    }
    return sum;
}

