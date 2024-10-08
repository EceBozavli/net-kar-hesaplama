let satisBedeli= prompt('satış bedelini giriniz: ');
let maliyet= prompt('maliyeti giriniz: ');
let toplamSatisBedeli;

//kdv %20, gelir vergisi %25 

if (maliyet==='0') {

  console.log(toplamSatisBedeli= Number(satisBedeli) + Number(satisBedeli / 5));
}

else {

  console.log(toplamSatisBedeli= Number(satisBedeli - maliyet) + Number((satisBedeli - maliyet) / 5));  

}


