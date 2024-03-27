// //2015 yılında yayınlanan güncellemeyle Javascript ES6 sürümüne geçti
// //let, const, arrow function, class, promise, async await, spread operator, destructuring gibi özellikler eklendi

// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Spread Operator
// //Spread operator, bir diziyi ayrıştırır ve tek tek elemanlarına ayırır.

// const sayilar = [1, 2, 3];
// const yeniSayilar = [...sayilar, 4, 5, 6];
// console.log(yeniSayilar); // [1, 2, 3, 4, 5, 6]
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Destructuring
// //Destructuring, bir nesne veya dizi içindeki elemanları ayrıştırarak tek tek değişkenlere atamak için kullanılır.

// const kisi = {
//   ad: "Ahmet",
//   yas: 30,
// };

// const { ad, yas } = kisi;
// console.log(ad); // Ahmet
// console.log(yas); // 30
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //Arrow Function
// //Arrow function, fonksiyon tanımlamanın kısa bir yoludur.

// const topla = (a, b) => a + b;
// console.log(topla(5, 3)); // 8
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Class
// //Class, bir nesne tabanlı programlama yapısını destekler.

// class Kisi {
//   constructor(ad, yas) {
//     this.ad = ad;
//     this.yas = yas;
//   }

//   selamla() {
//     console.log(`Merhaba, benim adım ${this.ad}`);
//   }
// }

// const ahmet = new Kisi("Ahmet", 30);
// ahmet.selamla(); // Merhaba, benim adım Ahmet
// //Static method ve property
// //Static method ve property, bir sınıfa özgüdür ve sınıftan bir obje yaratılması gerekmez.

// class Kisi2 {
//   static cins = "İnsan";
//   constructor(ad, yas) {
//     this.ad = ad;
//     this.yas = yas;
//   }

//   static selamla() {
//     console.log("Merhaba");
//   }
// }

// Kisi2.selamla(); // Merhaba
// console.log(Kisi2.cins); // İnsan
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Promise
// //Promise, asenkron işlemleri yönetmek için kullanılır.

// const islem = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("İşlem başarılı");
//   }, 2000);
// });

// islem.then((sonuc) => {
//   console.log(sonuc); // İşlem başarılı
// });

// //Promise Chaining
// //Birden fazla promise zincirleme yapılabilir.

// const islem1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// });

// islem1
//   .then((sonuc) => {
//     console.log(sonuc); // 1
//     return sonuc + 1;
//   })
//   .then((sonuc) => {
//     console.log(sonuc); // 2
//     return sonuc + 1;
//   })
//   .then((sonuc) => {
//     console.log(sonuc); // 3
//   });
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Async Await
// //Async Await, asenkron işlemleri yönetmek için kullanılır.

// const islem2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("İşlem başarılı");
//     }, 2000);
//   });
// };

// const sonuc2 = async () => {
//   const sonuc = await islem2();
//   console.log(sonuc); // İşlem başarılı
// };

// sonuc2();

// //Async Await try-catch
// //Hata yönetimi için try-catch kullanılabilir.

// const islem3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("İşlem başarısız");
//     }, 2000);
//   });
// };

// const sonuc3 = async () => {
//   try {
//     const sonuc = await islem3();
//     console.log(sonuc);
//   } catch (error) {
//     console.log(error); // İşlem başarısız
//   }
// };

// sonuc3();
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
