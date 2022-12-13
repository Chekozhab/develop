"use strict"
let nam1="ксюха";
module.exports =  nam1 ;
for (let i = 1; i <= 20; i++){
    if (i !== 9) {
        if (i !== 10) {
            console.log(i);
            if (i == 15) break;

        }
    }


};
function four(text,a,b,c) {
    console.log((a*c)+(b*c));
    console.log(text);

}
console.log(four("cjc",6,1,4));
var menu = {
    width: 300,
    height: 200,
    title: "Menu"
};
for (var key in menu ) {
    console.log( "Ключ: " + key + " значение: " + menu[key] );}
let chisla = [1, 2, 3,4,5];
for (var key in chisla){
    console.log(chisla[key])}
chisla.pop()
for (var key in chisla){
    console.log(chisla[key])}
chisla.push(33);
for (var key in chisla){
    console.log(chisla[key])}
chisla[1]=99;
for (var key in chisla){
    console.log(chisla[key])}
console.log("")
console.log("")

for (var key in chisla){
    console.log(" значение элемента "+chisla[key]+ " его порядковый номер "+key+" "+"в массиве "+Object.keys({chisla})[0])}


var spisok= "яблоко,сыр,молоко"
let arr = spisok.split(",");
console.log(arr)
let str= arr.join (',');
console.log (str);
var menu1 = {
    width: 300,
    height: 200,
    title: "Menu"
};
for (var key in menu1 ) {
    console.log( "Ключ: " + key + " значение: " + menu1[key] );}

var menu1 = {
    width: 300,
    height: 200,

};
for (var key in menu1 ) {
    console.log( "Ключ: " + key + " значение: " + menu1[key] );}
var arr1=[1,2,4,5,6];
for (var key in arr1 ) {
    console.log( " значение: " + arr1[key] );}
var arr1=[1,2,4,5,6,4,5,1,4];
for (var key in arr1 ) {
    console.log( " значение: " + arr1[key] );}
console.log("")
 var arr2=[1,2,4,arr1];
for (var key in arr2 ) {
    console.log( " значение: " + arr2[key] );}
console.log("")
console.log("")
console.log("")

function f1(arr) {
    for (var key in arr ) {
        console.log( " значение: " + arr[key] );}
}
f1(arr1);