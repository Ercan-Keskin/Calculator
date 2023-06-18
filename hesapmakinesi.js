//neden false?
// hesap makinesinin başlangıçta hazır durumda olduğunu ifade eder.
//yani herhangi bir işlem seçilmemişse hesaplama yapmak için kullanıcıyı bekler durumda

//opt ?   
//hesap makinesinde seçilen işlemin türünü tutar/belirler (+ - )

var durum = false, opt ="", sonuc = 0;


//nesnelerin oluşturulması

//queryselectorAll?
//birden fazla yapı çekerken kullanılıyor

//queryselector ?
//sadece bir yapı çekerken kullanıyoruz

let rakam =document.querySelectorAll('.rakam');
let islem = document.querySelector('#islem');
let oper = document.querySelectorAll('.opr'); /*Toplama çıkartma eşittir bölme.....*/
let gosterge = document.querySelector('#gosterge');
let btnC = document.querySelector('.btnC');
let btnCE = document.querySelector('.btnCE');
let esit = document.querySelector('.esit');
let nokta = document.querySelector('.nokta');

//forech ile tüm elemanları gezmesini sağlar
//Hangisine tıkladıysan ona işlem yapmasını sağlar.
// elementi neden yazdık ? Hangisine tıklayacağımızı bilinmediği için element diye dedik.
rakam.forEach(function(element){
    element.onclick = function(){
        if (islem.textContent == "0" || durum){
            islem.textContent = "";
        }
        islem.textContent += this.textContent;
        durum = false;
    }
})

oper.forEach(function(element){
    element.onclick = function(){
        durum = true; // durum hatalı mı değil mi basılıp basılmadığını kontrol etmek için

        let opr = this.textContent;

        gosterge.textContent = gosterge.textContent + " " + islem.textContent + " " + opr;
  

//hafızaya alınan işlem
switch(opt) 
//switch case => işlem bir defa döner ve benim istediğim kısmı döndürür
//break döngüyü bitirir.
{
    case "+": islem.textContent = (sonuc + Number(islem.textContent)); break;
    case "-": islem.textContent = (sonuc - Number(islem.textContent)); break;
    case "*": islem.textContent = (sonuc * Number(islem.textContent)); break;
    case "/": islem.textContent = (sonuc / Number(islem.textContent)); break;

    default: break;
}
sonuc = Number(islem.textContent)
opt = opr;


}
})

btnC.onclick = function(){
    islem.textContent = "0";
}
btnCE.onclick = function(){
    islem.textContent = "0";
    gosterge.textContent = "";
    sonuc = 0;
    opt = "";
    
}
esit.onclick = function(){
    gosterge.textContent = "";
    durum= true;
    


    //hafızaya alınan işlem
switch(opt) 
//switch case => işlem bir defa döner ve benim istediğim kısmı döndürür
//break döngüyü bitirir.
{
    case "+": islem.textContent = (sonuc + Number(islem.textContent)); break;
    case "-": islem.textContent = (sonuc - Number(islem.textContent)); break;
    case "*": islem.textContent = (sonuc * Number(islem.textContent)); break;
    case "/": islem.textContent = (sonuc / Number(islem.textContent)); break;

    default: break;
}
sonuc = Number(islem.textContent)
islem.textContent = sonuc;

//eğer bunu eklemezsek sonuc 50 ya her eşittire bastığında 50 ekler bunun için sıfırlarız
sonuc = 0;
opt = "";
}


nokta.onclick = function(){
    //işlem noktayı barındırmıyorsa
    if (durum && !islem.textContent.includes(".")){
        islem.textContent += ".";

    }
    else if (durum) { //durum hatalıysa 0 yap
         islem.textContent += "0";
    }
    else if (!islem.textContent.includes(".")){
        islem.textContent += ".";
    }

    durum = false
}