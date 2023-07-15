// Do while -> while() qavis ichidagi true bolsa {} qavisdagi yuradi false va null da yurmaydi
//  while shartlik takrorlanuvchi operator
    // Masalan
        // let i = 3
        // while(i){
        //     console.log(i);
        //     i--
        // }
// do {} while () bu ham while bilan birxil lekin do{} birinchi ishlaydi while() true truemasmi keyin qaraydi
    // Masalan
        // let d = 3
        // do{
        //     console.log(i);
        //     d--
        // }while(d == 0)

// Function Decloration -> kodni qayta qayta yozilishini oldini olish funcksiyani nomi bilan chaqiriladi ichidagi malumotla keladi
// funcktionni chaqirmaguncha yurmaydi yurgizishimiz uchn nomii va () qoyish kerak
// function decklaretion functiondan tepada va pasdaham chaqirsak boladi va sihlaydi
// function larni create qilish yollari
    // 1) function declaration
    // 2)function expression
    // 3)arrow function
    // Masalan
        // function getAvr(){
        //     console.log("Hello");
        //     console.log("Hello");
        //     console.log("Hello");
        //     console.log("Hello");
        //     console.log("Hello");
        // }
        // getAvr()
    
// function expression -> verayblga briktilib ketiladi yani boshidan function nomini yozilmaydi
// function expression da tepasida chaqirsa bolmaydi error beradi 
    // Masalan
        // const getAvr = function(){
        //     console.log("hello");
        // }
        // getAvr()

// Hoisting nima -> veraybillanii function expression doim fayilni yuqorisaga qoyip decklear qilishga aytiladi
    // nimaga javascript tepadan pastga qarap oqiydi 
        // veraybel , function expressionlarni file tepasida  deckler qilip ketishga aytiladi
        // error berishlarni oldini olamiz

// callback function -> qaysi function boshqa functionni parametrida yasalishiga aytiladi


// Arrov function -> dep ()=>{} shu narsaga aytiladi
//  arrow function dep attalishini sababi odiiy veraybilga ()=>{} shu tarzda functionni dekleyr qilip ketishga aytiladi
    // Masalan
        // const getAver = ()=>{}

//name ni functionga parametr qilip berish  ixtiyoricha parametr kiritsak boladi vergul bilan ajratiladi 
    // const getAver = function(name) {
    //     console.log(` Hello ${name}`);
    // }
    // getAver("Azizbek")
    // getAver("Hojiakbar")
    // getAver("Abdulaziz")
