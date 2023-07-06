// Javscript bir vaqtning ozida faqat bitta amalni bajaruvchi dasturlash tili, kodlar tepadan pastga qarap qatarma qatar oqiladi.

// console.log("hello javascripts");
    //qavaslar ichiga yozilgan malumotni consolga chiqarip beradi

// O'zgaruvchilar(Variables) bu qandaydur {data type} malumotni saqlab turuvchi qutilar dep olsak boladi hardoim u qutini ishlatganimizda ichidagi qiymatni qaytaradi
// O'zgaruvchilar 3 xil boladi {let, var, const}
    //1) var = global ozgaruvchi
    // 2) let = block ozgaruvchi
    // 3) const = o'zgarmas qiymatdai o'zgaruvchi

// O'zgaruvchi yaratish uchun {let, var, const} yoziladi va nom beriladi (=) qoyiladi va qiymat yoziladi
    // O'zgaruvchi nomi hohlagan nom lekin javascriptdagi nomlar bolmasligi kerak(let, Function,var,const)
    // Masalan:
        // let num = 8
        // var name = "Azizbek"
        // const str = 'Hello'


// let name = "Azizbek"
    // console.log(name)

// agar veraybilsiz nomi bilan berip ketialdigan bolsak unda var boladi
    // Masalan:
        // b=5 
        // console.log(b);



// Data type
    //1. String (primitive) - matn ("salom") ('', "", ``) shu qo'shtirnoqlar ichida yoziladi  (`` - backtick)
    //2. Number (primitive) - son (1,2,3,4,5s)
    //3. BigInt (primitive) - katta son (9007_199_254_740_991n, n by Bigint)
    //4. Boolean (primitive) - true - false 
    //5. Null (primitive)    
    //6. undefined (primitive)
    //7. Symbols (primitive)
    //8. Object (non-primitve)

// Primitive - faqat 1ta qiymat bersa boladi
// non-primitive da kop kina qimat bersak boladi
// primitive - value pass (qiymat qaytaradi)
// non - primitive referance pass (link qaytaradi)


// 1. Number 
    // Butun va o'nlik sonlar
    // -9007199254740991n dan 9007199254740991n gacha bolgan sonlar javascriptda butun sonlar deyiladi, bundan katta sonlar ishlatip bolmaydi
    // let num = 2982
    // console.log(num)
    // NaN (not a number) qandaydir amal bajarsa u number bolmasa NaN chiqadi


//  2. String
    // string yozishni 3 xil korinishi bor 
    // '' 1talik qosh tirnoq
    // "" 2talik qoshtirnoq
    // `` becktick bor
// Javascript eski versiyasida ('', "") bolgan keyin bularni ichida ajratish uchun yana qoshtirnoq qoshsak ERROR began shuning uchun bizga (``) BackTick yordamga kelgan.
// Agar biz "" ichida yana qoshtirnoq ishlatadigan bolsak oldin \ shu belgini qoysak ignor qivoradi ozidan keyingi bita belgini.
// "" - '' ikkala belgi birxil belgilar qiymat jixatidan
// Backtick universal uni ichiga qoshtinoq ham yosak boladi undan tashqari tashqaridan ozgaruvchi olip kirsak boladi uning uchun ${} shuning ichiga ozgaruvchi nomini yozamiz yoki qiymat
    // Masalan
        // let str = "salom"
        // console.log(`${str} Hello`)
// Yangi qatorndan yozish uchun \n shu belgilarni qoysak pasga churip yuboradi qoygan joyimizdan

// Typeof - malumotni qaysi turdaligini aniqlaydi typeof()

//3. BigInt 
    // -9007199254740991n va 9007199254740991n shu songa yetkan son bigint hisoblanadi
    // n bu bigInt belgisi
    // let num = 9007199254740991n +2n
    // console.log(num)

// 4. Boolean
    // 2ta qiymati bor true va false
    // masalan svet yonip ochishi ochayotgan holati yoq
    // true = 1
    // false = 0


// 5.Null
    // null bor lekin hali hechqanday qiymat biriktirilmagan
    // let a = null 
    // null ni type object


// 6. undefined 
    // qiymat bor lekin hechnarsa yozilmagan bombosh quti
    // let a;
    
// Null vs undefined 
    // masalan shkalad bor yep kettik qogozi qoldi shu null agar qogozi ham yoq bolsa bu undefined boladi
    // null == undefined bir biriga teng true agar null === undefined bolsa false


// 7. Symbols
    // Symbol - id larga asoslangan datatype turi (Unique ID) 
    // yani ichidagi malumot birxil bosaham id lari harxil boladi
        // let a = Symbol(8)
        // let b = Symbol(8)
        // console.log(a==b);
        // console.log(a===b);
//8. Object - key va valuedan tashkiltopgan
    // Object ichiga Object,arrey,funcktion kiradi
        // let arr = [1,true,"hello",()=>{}]
