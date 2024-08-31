
// 1)FIBONACCI HESABLAMASI

// let here =+prompt('ededi daxil edin')
// let arr=[]
// function show(a,b,number,array){
//     let cem;
//     do{
//         cem=a+b;
//         a=b;
//         b=cem;
//         if(cem<=number){
//             array.push(cem);
//         }
//  }
//     while(number>cem)

//      return array

// }
// console.log(show(1,1,here,arr))


// 2) VERILEN EDEDIN 1000 E QEDER OLAN BOLUNENINI TAPMAQ


// alert('1000-e qeder olan ededlerin secilmis edede bolunmesinin yoxlanilmasi')
// let getin=+prompt('ededi daxil edin')

//  function show(callback) {
//     let arr=[];
//     for(let a=1; a<=1000;a++){
//         callback(a)?arr.push(a):null;
//     }
//     return arr;
//  }




// 3) VERILEN 2 VE YA DAHA ARTIQ XANALI OLAN REQEMLERIN TOPLAM CEM 10 DAN KICIK OLANA QEDER TOPLANMASI


// let a = 556;
// let str = a.toString();

// function show(string) {
//   let index = [];
//   let sum = 0;
//   while (true) {
//     for (let a of string) {
//       sum += Number(a);
//     }
//     if (sum >= 10) {
//       string = sum.toString();
//       sum = 0;
//       continue;
//     } else {
//       index.push(sum);
//       break;
//     }
//   }

//   return index;
// }
// console.log(show(str));



// 4) fordan isdifade ederek table sahmat yaratmaq

function show(number){
let table= document.getElementById('tabl');
    for(let i=1;i<=number;i++){
        let row='<tr>'
        for(let j=1;j<=number;j++){
          if((i%2===1&&j%2===1)||(j%2===0 && i%2===0) ){
            row+='<td style="background-color:black;"></td>';
          }else{
            row+='<td></td>'
          }

        }
        row+='</tr>'
        table.innerHTML+=row
    }
    
}

 show(5);
 TextDecoder.z






