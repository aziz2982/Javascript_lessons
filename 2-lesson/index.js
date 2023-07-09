// String 
    // Stringdan Numberga otqazish uchun {Number av + belgilaridan foydalansak boladi}
        // Masalan:
            // let a = "1"
            // console.log(+a); console.log(Number(a));


//  Agar biz sonni butun qismini olmoqchi bolsak {parseInt()} - dan foydalanamiz agar kasir qismiham kerak bolsa unda {parseFloat()}dan foydalanamiz lekin Number va parsefloat ni farqi yoq
    // Masalan:
        // let num = "10.2"
        // console.log(parseInt(num));
        // console.log(parseFloat(num));
        // console.log(Number.parseInt(num));
        // console.log(Number.parseFloat(num));

// Agar biz number bolmagan narsalarda matematik amallarni bajaradigan bolsak bizga NaN qaytaradi
    // Masalan:
        // let a = "1s"
        // console.log(+a);
        // console.log(isNaN(a));
    
// Boolean - 2ta qiymati bor true yoki false ga qaytadi
    // Bu yerda true=1 va false=0 ga teng
        // Masalan:
            // console.log(false == 0);         true
            // console.log(true == 1);          true
            // console.log(false == null);      false
            // console.log(false == undefined); false
            // console.log(null == undefined);  true
            // console.log(true == "1");        true
            // console.log(true == "a");        false 
            // console.log(true == "a");        false


//  Matematik mallar {+, -, /, *, % } = Basic operators, Math
// Incrimet va dicriment (--) (++)
    // AGar biz  (++) yozsak qiymat 1ga oshadi agar (--) qiymat 1ga kamayadi 
        // Masalan: agar biz veraybildan oldin yozsak qiymatni oshiradi keyin log ga chiqadi agar veraybildan keyin yosak qiymatni ozida oshiradi
                // let a = 2;           2
                // console.log(a++);    2
                // console.log(a);      3
                // console.log(++a);    4

// Obrivations 
    // let a = 10;   sodda usuli            let b = 10;
    // a+=10;                               b = b+10
    // console.log(a);                      console.log(b);


// Comparision - Taqqoslash hardoim true yoki false ga qaytadi yani Boolean ga
    // Masalan:
        // let a = 20;
        // let b = 10;
        // let c = 10
        // console.log(a > b);
        // console.log(a < b);
        // console.log(b <= c); bu yerda c katta yoki teng true 2kalasida bittasi true bolsa true chiqazadi

//  = , ==, ===
    // 1ta (=) verayblga yangi qiymat briktirish 
    // 2ta (==) tenglik taqqoslash bir biriga
    // 3ta(===) qattiy taqqoslash dataType gacha tekshiradi


// Agar biz katta A va kichkina a ni bir biriga qattiy tenglaydigan bolsak false chiqadi chunki ascee table bor unda hamma malumotni id si harhil boladi
    // Stringlarni bir biriga taqqoslasak ascee table dagi id ga qarap taqqoslaydi
    // Masalan:
        // let a = "A"
        // let b = "a"
        // console.log(a===b);


// { ! } bu inkor belgisi undov teskarisi
    // Masalan:
        // let a = true         true
        // console.log(!a);      false



// Logical Operations || or va AND && bor
    //  or || 1ta true bolsaham     true ga yuradi agar 2ta false bolsa false boladi
        // Masalan
            // let ceo = true;
            // let admin = false;
            // console.log(ceo || admin );
    
    // AND && agar bitta false bolsaham false ga yuradi agar 2ta true bolmaguncha true bolmaydi
        // Masalan
            //  let ceo = true;
            //  let admin = false;
            //  console.log(ceo && admin);