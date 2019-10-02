const data = [1,2,3,4,5];

console.log(...data); //ekrana elemanları yazar.

const newData = [0, ...data]; //data array'i ekleyebiliriz.
console.log(newData);

const data2 = {
    name:'kadir',
    surname:'demircan'
};

const newData2 ={
    age:24,
    ...data2
};

console.log(newData2);