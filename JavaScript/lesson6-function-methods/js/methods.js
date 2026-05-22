// 1.JS`də dəyişkənlər üçün olan methodlar
//   1.1.lenght -> dəyişkənin içində olanların sayını göstərir.
//                 var metn = "Salam";
//                 metn.length
//   1.2.eval() -> mətn kimi yazılan yazıları js koduna çevirmək üçün istifadə olunur
//                 var qiymet1 = 10;
//                 var qiymet2 = 20;
//                 var netice = eval("qiymet1 + qiymet2");
//                 var netice1 = eval("10*40");
//                 function yoxlama(){
//                   console.log("Salam");
//                 }
//                 var setr = eval("yoxlama()");
//                 console.log(setr);
//   1.3.search()  -> Dəyişkən içərisində parametrik olaraq dəyəri axtarır və ilk uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.
//             var metn = "JavaScript";
//             var netice = metn.search("Script"); bu formada yazılan zaman böyük və kiçik hərfə həssas formada olur.
//             var netice1 = metn.search(/script/i); bu formada yazılan zaman böyük və kiçik hərfə həssas formada olmur <<</script/--i-->>> hərfi vacibdir
//   1.4.slice() -> Dəyişkənin içərisindəki məlumatları parametrlər ilə kopyalayır.
//   qeyd:başlanğıc parametrəsi bitiş parametrəsindən heç vaxt böyük ola bilməz.
                // var melumat = "JavaScript is international language";
                // console.log(melumat);

                // var netice = melumat.slice(15,20);
                // console.log(netice);

//   1.5.substring() -> Dəyişkənin içərisindəki məlumatları parametrlər ilə kopyalayır.(Parametr ->Başlanğıc və Bitiş)
//                     var metn = "JavaScript Programming Language";
//                     console.log(metn);
//                     var netice = metn.substring();
//                     console.log(netice);

//    substr()      -> Dəyişkənin içərisindəki məlumatları parametrlər ilə kopyalayır.(Parametr ->Başlanğıc və Bitiş(neçə simvol almaq istənilirsə onu qeyd edirik))
//    var netice = metn.substring(-15,10) mənfi olan zaman sağdan sola sayır

//   1.6.concat()   -> Bir dəyişkəni əsas sayaraq parametr hissəsinə yazılan dəyişkəni yenidən hazırlayır.
//               var misal = 1;
//               var misal1 = misal.concat() 
        
//   1.7.repeat()   -> dəyişkənin içindəki dəyəri parametrəyə yazılan say qədər çoxaldır
//             metn.repeat(100);
//   1.8.toString() -> dəyişkənin içindəki dəyəri mətinləşdirir.
//             metn.toString();
//   1.9.String()   -> dəyişkənin içindəki dəyəri mütləq mətinləşdirir.
//             String(metn);
//   1.10.Number()  -> dəyişkənin içindəki dəyəri mütləq rəqəmləşdirir
//   1.11.valueOf() ->
//   1.12.indexOf() ->Dəyişkən içərisində parametrik olaraq dəyəri axtarır və ilk uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.
//             var metn = 'JavaScript'; -> böyük və kiçik hərf həssasdır.
//             console.log(metn);
//             var netice = metn.indexOf("Java");
//             var netice = metn.indexOf("Java",15);rəqəmdən sora harada varsa onu tapır.
//             qeyd: əgər məlumat orada yoxdursa -1 dəyəri alır.
//             console.log(netice);

//   lastIndexOf()  -> Dəyişkən içərisində parametrik olaraq dəyəri axtarır və son uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.
//              var metn = 'JavaScript Java';
//             console.log(metn);
//             var netice = metn.LastIndexOf("Java",32);sonuncu "Java" sözünü tapır.Yazılan rəqəm sayı qədər olan hissəyə qədər axtarır.
//             console.log(netice);
//   1.13.startWith() -> hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin ƏVVƏLİNDƏ olub olmamasını Boolean(true/false) data tipi ilə göstərir 
//             var metn = "JavaScript superdir";
//             metn.startWith("JavaScript");
//        endsWith()  -> hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin SONUNDA olub olmamasını Boolean(true/false) data tipi ilə göstərir 
//             var metn = "JavaScript superdir";
//             metn.endsWith("superdir");
//   1.14.trim() ->Dəyişkənin içindəki əvvəlindəki və sonundakı boşluqları təmizləyir.(misal.trim())
//   1.15.includes() ->hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin içində olub olmamasını Boolean(true/false) data tipi ilə göstərir 
//   qeyd: böyük və kiçik hərfə həssasdır.
//             var metn = "JavaScript";
//             varr netice = metn.includes("Script"); //true 
//             varr netice = metn.includes("asdasfa"); //false
//   1.16.match() ->  hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin içərisində varsa o dəyərin özünü göstərər.
//       g - dəyişkənin içindəkilərin hamısını nəzərə alar -> metn.match(/Javascript/g);
//       i - böyük və kiçik hərf həssaslığını aradan qaldırar -> metn.match(/Javascript/i);
//       metn.match(/Javascript/gi); hər iki xüsusiyyət işləyər
//        var metn = "JavaScript superdir";
//        metn.match("JavaScript");
//   1.17.replace() ->  hər hansı bir dəyəri methodun birinci parametr hissəsinə daxil edərək dəyişkənin içərisində varsa ikinci parametrdə olan dəyəri birinci parametrdə qeyd olunan dəyərin yerində göstərir.
//         g - dəyişkənin içindəkilərin hamısını nəzərə alar -> metn.replace(/Javascript/g, "php");
//       i - böyük və kiçik hərf həssaslığını aradan qaldırar -> metn.repeat(/Javascript/i, "php");
//         var metn = "JavaScript";
//         console.log(metn.replace("JavaScript","php"));
//   1.18.split() -> dəyişkənin içindəki dəyəri array data tipinə çevirir və parametrik olaraq müdaxilələr edə bilir
//   birinci parametrdə qeyd oluanan hissə arrayın vergül qoyaraq ayırması tələb olunan hissədir.
//   qeyd: böyük və kiçik hərfə həssasdır.
//         var metn = "JavaScript dərsləri";
//         console.log(metn);
//         console.log(metn[2]);
        
//         var netice = metn.split("a",3); //2ci parametr limit parametridir
//         console.log(netice);

//         var netice = metn.split(" ",3); //2ci parametr limit parametridir
//         console.log(netice);

//         var netice = metn.split(" ");
//         console.log(netice[2]);
        
