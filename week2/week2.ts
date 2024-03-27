// Typescript, 2012 yılında geliştirilmeye başlanmış, Javascript'in type-safe versiyonudur.
// TypeScript, JavaScript'e ek olarak statik tür atamaları yapılabilen bir programlama dilidir.
// TypeScript, JavaScript'in üst kümesidir ve JavaScript'in tüm özelliklerini içerir.
// TypeScript, JavaScript'in yanı sıra tür güvenliğini de sağlar.
// TypeScript, JavaScript'in yanı sıra nesne tabanlı programlama yapısını da destekler.

// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Tip verme
// //Typescript'in avantajları arasında değişkenlere tip verme özelliği bulunmaktadır.
let a: number = 5;
let b: string = "Hello";
let c: boolean = true;
let d: any = "Hello";
let e: number[] = [1, 2, 3, 4, 5];
let f: Array<number> = [1, 2, 3, 4, 5];
let g: [string, number] = ["Hello", 5];
let m: object = { name: "John", age: 30 };
let n: Function = function () {
  console.log("Hello");
};
let o: string | number = "Hello";

// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Interface
// //Interface'ler, nesnelerin yapısını tanımlamak için kullanılır.
// interface User {
//   name: string;
//   id: number;
// }

// // let user: User = {
// //   name: "John"
// //   id: 0,
// //   age: 30,//Error
// // };

// // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Extends Interface

// // Tek bir interface, başka bir interface'den türetilmiş bir interface oluşturabilir.
// interface Canli {
//   yas: number;
// }

// interface Insan extends Canli {
//   ad: string;
//   soyad: string;
// }

// let person: Insan = {
//   ad: "Ahmet",
//   soyad: "Mehmet",
//   yas: 30,
// };

// // Çoklu Interface
// // interface Canli {
// //   yas: number;
// // }

// // interface Calisan {
// //   sirket: string;
// // }

// // interface Yonetici extends Canli, Calisan {
// //   pozisyon: string;
// // }

// // let yonetici: Yonetici = {
// //   yas: 40,
// //   sirket: "XYZ Corp",
// //   pozisyon: "CTO",
// // };

// // Kesişim Tipi (&)
// // Kesişim tipi, birden fazla tipin birleştirilmesi için kullanılır.
// interface Canli {
//   yas: number;
// }

// interface Calisan {
//   sirket: string;
// }

// type Yonetici = Canli & Calisan;

// const yonetici: Yonetici = {
//   yas: 45,
//   sirket: "XYZ Corp",
// };

// //Birleşim Tipi (|)
// //Birleşim tipi, birden fazla tip arasında bir seçim yapılmasını sağlar.
// type KimlikNo = string | number;

// let kimlik: KimlikNo = "AB123456";
// kimlik = 12345678; // Bu da geçerli

// //Bu operatörler daha karmaşık tipler oluşturmak için birlikte veya diğer tip tanımlarıyla birleştirilebilir.
// interface Urun {
//   id: number;
//   isim: string;
// }

// interface Kategori {
//   kategori: string;
// }

// type UrunGuncelleme = Partial<Urun> & Kategori;

// // Bu örnekte, Partial<T> yardımcı tipi, T tipindeki tüm özellikleri isteğe bağlı hale getirir.
// //UrunGuncelleme tipi, Urun'ün isteğe bağlı özellikleri ile Kategori özelliklerinin bir kesişimini temsil eder.

// // Genel Tipler (Generics)
// // TypeScript'teki genel tipler (Generics), aynı kodun farklı tiplerle çalışabilmesini sağlayan bir özelliktir.
// // Bu, kodunuzu daha yeniden kullanılabilir ve esnek hale getirir.

// function identity<T>(arg: T): T {
//   return arg;
// }
// //Bu örnekte, identity fonksiyonu herhangi bir tipi kabul edebilir (T), ve aynı tipi döndürür.
// //T, fonksiyon çağrıldığında belirlenir, böylece identity fonksiyonu tip güvenli bir şekilde herhangi bir değerle çalışabilir.

// // Omit
// //Omit<Type, Keys> yardımcı tipi, bir tipin (Type) belirli anahtarlarını (Keys) hariç tutarak yeni bir tip oluşturmanızı sağlar.
// //Bu, özellikle büyük interfaceler veya tip tanımlarında sadece bazı özelliklere ihtiyacınız olduğunda kullanışlıdır.

// interface Kisi {
//   ad: string;
//   soyad: string;
//   yas: number;
// }

// type Gencler = Omit<Kisi, "yas">;

// const gencler: Gencler = {
//   ad: "Ali",
//   soyad: "Veli",
//   // 'yas' özelliği bu tipte yoktur.
// };

// function kullaniciOlustur<T extends Kisi>(kullanici: Omit<T, "yas">): T {
//   const varsayilanYas = { yas: 30 };
//   return { ...kullanici, ...varsayilanYas } as T;
// }

// const kullanici = kullaniciOlustur({ ad: "Ayşe", soyad: "Yılmaz" });

// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Class
// //Class'lar, nesne tabanlı programlamada kullanılan yapılardır. Class'lar, nesnelerin yapısını tanımlamak için kullanılır.
// class UserAccount {
//   name: string;
//   id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const user = new UserAccount("Murphy", 1);
// user.greet();
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Enum
// //Enum'lar, belirli bir değer kümesini temsil etmek için kullanılır.
// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// let c1: Color = Color.Green;
// console.log(c1); //1
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Types
// //Enum'a benzer şekilde, Types, belirli bir değer kümesini temsil etmek için kullanılır.
// type Color1 = "Red" | "Green" | "Blue";
// let c2: Color1 = "Green";
// console.log(c2); //Green
