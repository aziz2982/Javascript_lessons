//  IF else va Nulish

    // if else 
        // if()qavislarning ichida contitional operatirla boladi yani true va false ga yuradi agar true qaytsa 
        // if dagi shart notogri bolsa esle yuradi va qolgan hollardaham
        // else if(){} agar if hato bolsa else if dagi malumot chiqadi 
        // agar else if mas if yozadigan bolsak hammasi ni tekshiradi else if da malumot topishi bilan toztaydi
        // {} shu qavislarni ichidagi kodla yuradi
        // 0 , null, underfined if else da false degani
        //  Masalan
            // let age = 18
            // if(age  >= 18){
            //     console.log("kapkattasiz");
            // }else{
            //     console.log("siz hali detiskiysiz");
            // }
        // Yana bitta masala
            // let temp = "issiq"
            // if(temp === "issiq"){
            //     console.log("Havo issiq, yenlgil kiyinip oling");
            // }else if ( temp === "sovuq"){
            //     console.log("Havo sovuq, qalin kiyinip oling");
            // }else if(temp === "yomg'ir"){
            //     console.log("Havo yomgir, Soyabon olip oling");
            // }else if(temp === "qor"){
            //     console.log("Havo qor,  qalin kiyinip oling");
            // }else{
            //     console.log("nomalum ob havo");
            // }

// Ternary operator
    // Ternary operator else if ning qisqartirma shakli 2ta shart boladigan bolsa ishlatilsa yaxshi boladi
    //{ ? if }{ : else } orniga yuradi va bunda else yozish shart bolmasa eror beradi 
    // let age = 18
    // age >= 18 ? console.log("Marxamat") : console.log("Kichiksiz");


// Nullish ?? -> null underfined ni false dep qabul qiladi va otqazib yuboradi
    // console.log(false || 1); 1
    // console.log(false ?? 1); false
    // console.log(NaN || 1 );  1
    // console.log(NaN ?? 1 );  NaN
    // console.log(null || 1);         1
    // console.log(null ?? 1);         1
    // console.log(undefined || 1);    1
    // console.log(undefined ?? 1);    1
    
    // if("0") console.log("hi");   hi
    // if(0) console.log("hi");     
    // if(1) console.log("hi");     hi    