// 1-task toq va juft sonlarga ajraish
/* for(let i = 0; i <= 10; i++){
    
    if(i % 2 === 0){
        console.log(i , 'juft son');
    }else{
        console.log(i,'Toq son');
    }
} */
////////////////////////////////////////////

// 2-task harflar sonini topish
/* let harf = 'Norbekov SardOr oO'
let count = 0;
for(let i = 0; i < harf.length; i++){
    if(harf[i] === 'o' || harf[i] === 'O'){
    count++;
    }
}
console.log(count); */

///////////////////////////////////////////////////

//3-task so'zni teskari o'girish
/* let ism = 'Sardor';
for(let i = ism.length; i >= 0;  i-- ){
    console.log(ism[i]);
}
 */
//////////////////////////////////////////////////////////

// 4-task katta harflarni yig'ish
/* 
let str = "SarDor";
let kattaHarf = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        kattaHarf.push(str[i]);
    }
}
console.log("Katta harflar: " + kattaHarf);
 */
 
/* let str = 'SaRdOR'
let kattaHarf = []
 for(let i = 0; i < str.length; i++){
   if(str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()){
    kattaHarf.push(str[i])

   }
 }
 console.log(kattaHarf); */

 let color = 'blue';

switch (color) {
  case 'red':
    console.log('The color is red');
    break;
  case 'blue':
    console.log('The color is blue');
    break;
  default:
    console.log('The color is neither red nor blue');
}
