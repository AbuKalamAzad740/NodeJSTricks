const names = {a:1, b:2, c:3};

for(let [key, value] of Object.entries(names)){
    console.log("key:" , key);
    console.log("value:" , value);
}

console.log("object.keys", Object.keys(names));

console.log("objects.values", Object.values(names));

for(let key of Object.keys(names)){
console.log(names[key]);
}

const arrays= Array.of(1,2,3,4);
console.log(arrays);

for (let array of arrays){
    console.log("array", array);
}

for (let array of arrays.keys()){
    console.log("array1", array);
}

for (let array of arrays.values()){
    console.log("array2", array);
}
for (let [key, value] of arrays.entries()){
    console.log("array3", key);
    console.log("array3", value);
}

//swap no
let ax = 1, b = 2;
[ax,b] = [b,ax];
console.log("ax", ax);
console.log("b", b);


const dumy_array = [1,2,1,0,3,4,4,5,6];
const unique_array = [...new Set(dumy_array)];
console.log("uniqueArray", unique_array);


const isRequired = () => {
    console.log("parameter is required");
    //throw new Error("parameter is required");
}

//ECMA 2020 features
const print = (num = isRequired()) =>{
    console.log(`my number is ${num}`)
}

print(2);
print();

// sort array
console.log(dumy_array.sort((a,b)=> a-b));

//assign or rename
const { a : first} = names;
console.log("a", first);

//get last index data
console.log(dumy_array.splice(-1));
console.log(dumy_array.splice(-2));

const arrayPromise = [
    Promise.resolve(100),
    Promise.resolve(null),
    Promise.resolve("Data Release"),
    Promise.reject(new Error("something went wrong"))
];

//promise all not wait untill all promise complete
Promise.all(arrayPromise)
.then(data => console.log("success", data))
.catch(err => console.log("err", err))

//promise allsettled wait unitll all promise complete
// Promise.allSettled(arrayPromise)
// .then(res => console.log(res))
// .catch(err => console.log(err))
