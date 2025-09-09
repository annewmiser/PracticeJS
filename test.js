// เขียนในหน้า webpage 

// alert("alert");
// alert box

console.log("พบไวรัส");
console.error("พบไวรัส");
console.warn("พบไวรัส");
// แสดงในconsolelog 

/* ตัวแปร var เปลี่ยนแปลงค่าใรตัวแปรได้ ตัวแปรที่ไม่ได้กำหนดค่าเริ่มจะมีค่าเป็น undefined ปัจจุบันไม่ใช้แล้ว 
ใช้ Let แทน var และ let เป็นตัวแปรแยย dynamic สามารถเปลี่ยนแปลงค่าได้ 
ตัว แปร const เป็นค่าคงทีไม่เปลี่ยนแปลงหากใช้กับ array array จะไม่สามารถเปลี่ยนแปลงค่าได้ */

// let Username;  //ประกาศตัวแปร 
// Username = "Helloword"; //กำหนดค่าเริ่มต้น 
// document.write("ชื่อ " + Username + "<br>"); //แสดงผลหน้าเว็บ
// console.log("Before = ", Username);
// Username = "GoodBuy";   //เปลี่ยนค่าภายในตัวแปร
// console.log("After = ", Username);//ค่าปัจจุบันเป็น Goodbuy 

// let Js = "Hellword", age = 58;  //ประกาศ1ครั้งหลายตัวแปร
// document.write(Js + " " + age)

// const tax = 0.07; //ค่าคงทีไม่สามารถเปลี่ยนแปลงค่าได้ 

/*Data Type
boolean     True-False
number      20 , 30.15
string      "Rungsan"
object      {firstName:"rungsan",LastName:"meesee"} ค่าคู่ Name:value
array       ["papaya","apple"]
*/
//typeof = เช็ตชนิดข้อมูล console.log(typeof(message));

let age1 = "20" + 10; //String result 2010
console.log(age1)
console.log(typeof (age1));

let age2 = 20 + 10; //Number result 30
console.log(age2)
console.log(typeof (age2));

let age3 = 20 + "10"; //String result 2010
console.log(age3)
console.log(typeof (age3));

/* การแปลงชนิดข้อมูล (Type Conversion)
แปลง String ไปเป็น Number */
let age4 = +"20.15";
// age4 = parseFloat(20.15) วิธีที่ 2
console.log(age4);
console.log(typeof (age4)); //Now is Number 

//แปลง Number ไปเป็น string 
let age5 = 22.5;
age5 = "" + age5
console.log(age5);
console.log(typeof (age5)); //Now is string 
// let age5 = 22.5.toString;  วิธีที่ 2 

// การสร้าง Array สามารถใช้ datatype แตกต่างกันได้
let cars = new Array("Saab", "Volvo", "BmW", 500, true);
console.log(cars);
// การเข้าถึงสมาชิกผ่าน index
console.log(cars[0]);

// การสร้าง Array อีกวิธี
let color = ["red", "blue", "black"];
console.log(color);

// การดำเนินการคำนวนทางคณิตศาสตร์
let x = 2;
let y = 3;
console.log(++x)
console.log("ผลเศษ = ", 20 % 3);
console.log(x **= y)

// การดำเนินการเปรียบเทียบ
let a = 5, b = "10";
console.log(a === b);
console.log(a > b);


/*condition with if else
function Myfunction() {
    let x = document.getElementById('age').value
    if (x < 18) {
        document.getElementById('demo').innerHTML = "Too young "
    } else {
        document.getElementById('demo').innerHTML = "old enough "

    }
}*/
// shothand condition by ternaly condition Symbol = ? 
function Myfunction() {
    let age = document.getElementById('age').value;
    let tovate = (age < 18) ? "too young" : "Old enough";
    document.getElementById('demo').innerHTML = tovate + " tovate";
}

// ตัวดำเนินการทาง ตรรกศาสตร์ && || !
function Mycalgrand() {
    let grand = document.getElementById('grand').value;
    if (grand >= 70 && grand <= 80) {
        document.getElementById('result').innerHTML = "คะแนนของคุณคือ :" + grand + " " + "คุณได้เกรด A ";
    } else if (grand >= 50 && grand <= 60) {
        document.getElementById('result').innerHTML = "คะแนนของคุณคือ :" + grand + " " + "คุณได้เกรด B ";
    } else if (grand >= 81 && grand <= 100) {
        document.getElementById('result').innerHTML = "คะแนนของคุณคือ :" + grand + " " + "คุณได้เกรด A+ ";
    }
    else {
        document.getElementById('result').innerHTML = "คะแนนของคุณคือ :" + grand + " " + "คุณได้เกรด F ";
    }
}

function Mycaltax() {
    let TAx = parseInt(document.getElementById('monny').value);
    let SUm = (TAx * 7) / 100;
    let newsum = (TAx * 107) / 100;
    document.getElementById('Sum').innerHTML = "ราคารวมภาษี 7% : " + newsum + " " + "ราคาเฉพาะภาษี :" + SUm;
}

function MynonVat() {
    let nonvat = parseInt(document.getElementById('nonvat').value);
    let Nonsum = (nonvat * 100) / 107;
    document.getElementById('nonSum').innerHTML = "ราคาก่อนรวมภาษี 7% : " + Nonsum;

}
function myFunction() {
    let carName = "Volvo";
    console.log("Inside: " + typeof carName + " " + carName);
}
myFunction()
function updateTime() {
    let now = new Date();

    let day;
    switch (now.getDay()) {
        case 0:
            day = "Sunday";
            document.getElementById("day").style.background = "red";
            break
        case 1:
            day = "Monday";
            document.getElementById("day").style.background = "yellow";
            break
        case 2:
            day = "Tuesday";
            document.getElementById("day").style.background = "pink";
            break
        case 3:
            day = "Wedday";
            document.getElementById("day").style.background = "green";
            break
        case 4:
            day = "Thursday";
            document.getElementById("day").style.background = "orange";
            break
        case 5:
            day = "Friday";
            document.getElementById("day").style.background = "blue";
            break
        case 6:
            day = "Saturday";
            document.getElementById("day").style.background = "blueviolet";
            break
    }
    document.getElementById('day').innerHTML = day;

    document.getElementById('Year').innerHTML = "ปี :" + now.getFullYear();

    const months = ["มกราคม", "กุมภาพันธุ๋", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    let = month = months[now.getMonth()];
    document.getElementById("Month").innerHTML = "เดือน :" + month;

    document.getElementById('Numday').innerHTML = "วันที่ :" + now.getDate();

    document.getElementById('Hours').innerHTML = "ชั่วโมง :" + now.getHours();

    document.getElementById('Minutes').innerHTML = "นาที :" + now.getMinutes();

    document.getElementById('Seconds').innerHTML = "วินาที :" + now.getSeconds();

}

setInterval(updateTime, 1000);

updateTime();

function MyEvent_odd() {
    let numbers = parseInt(document.getElementById('Number').value);
    let result = "ตัวเลขนี้เป็นเลข : ";

    if (isNaN(numbers)) {
        document.getElementById('result_number').innerHTML = "กรุณากรอกตัวเลขที่ช่องด้านบน";
    } else if (numbers % 2 == 0) {
        document.getElementById('result_number').innerHTML = result + "คู่";
    } else {
        document.getElementById('result_number').innerHTML = result + "คี่";
    }
}

function Mycal_Power() {
    let numbers = parseInt(document.getElementById('Power').value);

    if (isNaN(numbers) || numbers == 0) {
        document.getElementById('result_Power').innerHTML = "กรูณาป้อนจำนวนปริมาณการไฟฟ้าที่ช่องด้านบน";
    } else if (numbers > 1 && numbers <= 50) {
        document.getElementById('result_Power').innerHTML = (numbers * 3) + " บาท" + ": 1 - 50 หน่วย ราคาหน่วยละ 3 บาท";
    } else if (numbers >= 51 && numbers <= 100) {
        document.getElementById('result_Power').innerHTML = (numbers * 4) + " บาท" + ": 51 - 100 หน่วย ราคาหน่วยละ 4 บาท";
    } else {
        document.getElementById('result_Power').innerHTML = (numbers * 5) + " บาท" + ": มากกว่า 100 หน่วย ราคาหน่วยละ 5 บาท";
    }
}
// ฟังก์ชั่นหาค่าสูงสุดต่ำสุดจาก input
function findNumber() {
    // ประกาศตัวแปรเก็บค่าของ input
    const input = document.getElementById('Number_ml').value;

    // สร้าง array ขึ้นและ map คือการสร้าง arrayใหม่ที่มีขนาดเท่ากัน 
    // split เป็นการแยก String ออก คือ , 
    // Arrow function trim ลบช่องว่างที่ไม่จำเป็นออก
    const numberArray = input.split(',').map(num => parseFloat(num.trim()));

    //ตรวจสอบค่าใน array หากเป็นค่าว่างให้แสดงข้อคุวาม
    if (numberArray.some(isNaN)) {
        document.getElementById('result_ml').innerHTML = "กรุณากรอกตัวเลขที่ถูกต้อง!";
        return;
    }

    // (...numberArray) เป็นการกระจายตัวเลขในArray ออกมาเป็นที่ละตัว เพื่อให้ Math.max,min คำนวณ
    const max = Math.max(...numberArray);
    const min = Math.min(...numberArray);

    // document.getElementById('result_ml').innerHTML = "ตัวเลขที่มากที่สุด: " + max + <br> + "ตัวเลขที่น้อยที่สุด: "  + min ;
    document.getElementById('result_ml').innerHTML = `ตัวเลขที่มากที่สุด: ${max} <br> ตัวเลขที่น้อยที่สุด: ${min}`;

}
// ฟังก์ชั่น String 
function textUperCase() {
    let text = document.getElementById('text_uppercase').value;

    // ตรวจสอบค่าว่าง
    if (!text.trim()) {
        document.getElementById('result_textup').innerHTML = "กรุณาป้อนข้อความ";
        document.getElementById('result_Palindrome').innerHTML = "";
        return;
    }

    // แปลงข้อความเป็นตัวพิมพ์ใหญ่
    document.getElementById('result_textup').innerHTML = text.toUpperCase();


    // ตรวจสอบว่าเป็น Palindrome หรือไม่
    const cleanedStr = text.toLowerCase().replace(/[^a-z0-9ก-ฮ]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");

    if (cleanedStr === reversedStr) {
        document.getElementById('result_Palindrome').innerHTML = text + " เป็น Palindrome";
    } else {
        document.getElementById('result_Palindrome').innerHTML = text + " ไม่เป็น Palindrome";
    }
}

// function reandomNumber 
let randomNumber = 0;  
function Random_Number() {
    randomNumber = Math.floor(Math.random() * 100) +1 ;
    document.getElementById("random_Number").innerHTML = randomNumber;
    console.log(randomNumber);
}

function check_Result() {
    let UserGuss = parseInt(document.getElementById("usercomming").value);
    let Result = "";

    if (isNaN(UserGuss)) {
        Result = "โปรดกรอกตัวเลขก่อน!";
    }else if (UserGuss < 1 || UserGuss > 100){
        Result = "โปรดกรอกตัวเลข 1 - 100 เท่านั้น!";
    }else if (UserGuss === randomNumber) {
        Result = "ยินดีด้วย คุณเดาถูก!!";
    }else if (UserGuss < randomNumber) {
        Result = "น้อยเกินไป ลองเดาใหม่!!";
    }else {
        Result = "สูงเกินไป ลองเดาใหม่!!";
    }

    document.getElementById("result_random").innerHTML = Result ; 
    console.log(Result);
}

document.addEventListener("DOMContentLoaded" , function () {
    document.getElementById("usercomming").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            check_Result();
        }
    });
});
// Function โจทย์ FizzBuzz
function fizzBuzz(Number) {
    let Num = parseInt(Number);

    if (Num %3 == 0 && Num %5 == 0  ) {
        return "FizzBuzz";
    }else if (Num %5 == 0 ) {
        return "Buzz";
    }else if (Num %3 == 0) {
        return "Fizz"; 
    }else {
        return Num;
    }

}
for (let i = 1; i <= 10; i++) {
    console.log(fizzBuzz(i));
    
}
// function กลับตัวอักษร
function reverseString() {
    let text = document.getElementById("reversestring").value ;
    
    if(!text.trim()) {
        document.getElementById("result_reverseString").innerHTML = "โปรดกรอกตัวอักษรก่อน" ; 
       return
    }else {
        document.getElementById("result_reverseString").innerHTML = text.split("").reverse().join("") ; 
    }
    
}


// function แปลง String 
function duplicateEncode() {
    let text = document.getElementById("word").value.trim().toLowerCase();
    

    if (!text) {
        document.getElementById("result_duplicateEncode").innerHTML = "โปรดกรอกตัวอักษรก่อน" 
        return;
    }else{
        let countChar = {};
        
        for(let char of text) {
            countChar[char] = (countChar[char] || 0) + 1;
        }
       
        document.getElementById("result_duplicateEncode").innerHTML =  text.split("").map(char => countChar[char] > 1 ? ")" : "(").join("");
    }
}




// function arr Right Left 
function FindEvenIndex (arr) {
    let sumTotal = arr.reduce((sum , num) => sum + num ,0);
    let  sumLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumRight = sumTotal - sumLeft - arr[i]

        if (sumLeft === sumRight) return i;
        sumLeft += arr[i];
        
        
    }
    return -1;
    
}

console.log(FindEvenIndex([1,2,3,4,3,2,1]));
console.log(FindEvenIndex([1,100,50,-51,1,1]));
console.log(FindEvenIndex([20,10,-80,10,10,15,35]));
console.log(FindEvenIndex([1,2,3,4,5,6]));

// ดัดแปลง ใช้ในกหน้า login ได้
function generateHashtag () {
    let str = document.getElementById("hashtag").value;
    if(!str) { 
        document.getElementById("resultHashTag").innerHTML = "โปรดกรอก Hashtag" ;return;
    }

    const hashtag = "#" + str.split(" ").filter(word => word !== "").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");

    document.getElementById("resultHashTag").innerHTML = hashtag;

}




function int_to_roman() {
    let n = document.getElementById("intToRoman").value
    const roman_numerals = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90 , "XC"], [50, "L"], [40, "XL"], [10, "X"], [5, "V"], [4, "IV"], [1, "I"]];
    let result = "";

    for (const [value, key] of roman_numerals) {
        while (n >= value) {
            n -= value;
            result += key;
        }
    }
    document.getElementById("result_roman").innerHTML = result ; 
}

function beeramid() {
    let bonus = document.getElementById("bonus").value;
    let price = document.getElementById("price").value;

    if(isNaN(bonus) || isNaN(price) || price <= 0 ) {
        document.getElementById("result_beer").innerHTML = "กรุณากรอกข้อมูลที่ถูกต้อง";
        return;
    } 
    
    let totalCan = Math.floor(bonus/price);

    let leverl = 0;
    let canUsed = 0;

    while (canUsed + Math.pow(leverl + 1,2) <= totalCan) {
        leverl++

        canUsed += Math.pow(leverl ,2) ; 
    }
    document.getElementById("result_beer").innerHTML =  "จำวนแถวของพีระมิด :" + leverl + " แถว"
}


