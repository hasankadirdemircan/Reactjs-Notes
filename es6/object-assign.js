/*const data = {name:'kadir'};
const data2 = {surname:'demircan',
age:24};

const result = Object.assign(data, data2); // iki objeyi result üzerinde birleştirdi.

console.log(result);
*/

const data = {name: 'kadir'};
const data2 = data;

data2.name = 'hasan';

console.log(data);//hasan
console.log(data2);//hasan -> assign ettigimde referansa eşitlendi. ve hepsinde hasan olarak değiştirildi. 

//çözüm;
const data3 = {name: 'kadir'};
const data4 = Object.assign({}, data2);
data4.name = 'hasan';
console.log(data);//kadir
console.log(data2);//hasan


//ic ice objelerde,
const data5 = {
    info: {
        name:'kadir',
        surname:'demircan'
    }
};
const data6 = JSON.parse(JSON.stringify(data5));
data5.info.name = 'hasan';
console.log(data5);//kadir
console.log(data6);//hasan