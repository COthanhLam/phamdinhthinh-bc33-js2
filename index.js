function domId(id) {
  return document.getElementById(id);
}
//sap xep theo thu tu tang dan
function onClickArangeNum() {
  //input
  var num1 = Number(domId("num1").value);
  var num2 = Number(domId("num2").value);
  var num3 = Number(domId("num3").value);
  //output
  var min = 0;
  var max = 0;
  var middle = 0;
  //so sanh
  if (num1 < num2 && num1 < num3) {
    min = num1;
    if (num2 < num3) {
      middle = num2;
      max = num3;
      min = num1;
    } else num2 > num3;
    {
      max = num2;
      middle = num3;
      min = num1;
    }
  } else if (num1 < num2 && num1 > num3) {
    min = num3;
    middle = num1;
    max = num2;
  } else if (num1 > num2 && num1 < num3) {
    min = num2;
    middle = num1;
    max = num3;
  } else num1 > num2 && num1 > num3;
  {
    max = num1;
    if (num2 > num3) {
      middle = num2;
      min = num3;
    } else num3 < num2;
    {
      middle = num3;
      min = num2;
    }
  }
  console.log(min, middle, max);
}

//who use computer:
function onClickHello() {
  //input
  var who = document.getElementById("gettheans").value;
  //output
  var theHello = "";
  switch (who) {
    case "dad":
      theHello = "hi Daddy";
      break;
    case "mom":
      theHello = "hi Mommy";
      break;
    case "sis":
      theHello = "hi babegirl";
      break;
    case "bro":
      theHello = "hi honey";
      break;
    default:
      theHello = "sorry babe u r not my gu...";
  }
  document.getElementById("theHi").innerHTML = theHello;
}

// odd and even :
function onClickCouting() {
  //input
  var numbercount1 = Number(document.getElementById("number1").value);
  var numbercount2 = Number(document.getElementById("number2").value);
  var numbercount3 = Number(document.getElementById("number3").value);
  //output
  var counteven = 0;
  var countodd = 3 - counteven;
  if (numbercount1 % 2 === 0) {
    counteven += 1;
  }
  if (numbercount2 % 2 === 0) {
    counteven += 1;
  }
  if (numbercount3 % 2 === 0) {
    counteven += 1;
  }

 
  domId("couting").innerHTML = "so chan" + counteven + " so le: " + countodd;
}
//Guess;
function onClickGuess() {
  //input
  var edde1 = Number(domId("edge1").value);
  var edde2 = Number(domId("edge2").value);
  var edde3 = Number(domId("edge3").value);
  //output
  var styleOf = "";
  // so sanh
  if (edde1 == edde2 || edde1 == edde3 || edde3 == edde2) {
    styleOf = "can roi";
  } else if (edde1 == edde2 && edde2 == edde3) {
    styleOf = "tam giac deu";
  } else if (
    Math.pow(edde1, 2) == Math.pow(edde2, 2) + Math.pow(edde3, 2) ||
    Math.pow(edde2, 2) == Math.pow(edde1, 2) + Math.pow(edde3, 2) ||
    Math.pow(edde3, 2) == Math.pow(edde2, 2) + Math.pow(edde1, 2)
  ) {
    styleOf = "tam giac vuong";
  }
  domId("kindOf").innerHTML = styleOf;
}
//date ----chua xong
var days = Number(domId("days").value);
var month = Number(domId("month").value);
var years = Number(domId("years").value);
var newdays;
var newMonth;
var newyears;

function onClickyesterday() {
  var days = Number(domId("days").value);
var month = Number(domId("month").value);
var years = Number(domId("years").value);
var newdays=0;
var newMonth=0;
var newyears=0;

  if (days === 1) {
    if (month === 1) {
      newdays = 31;
      newMonth = 12;
      newyears = years -= 1;
    } else if (month === 3) {
      newdays = 28;
      newMonth = 2;
      newyears = years;
    } else {
      newdays = days - 1;
      newMonth = month;
      newyears = years;
    }
  } else {
    newdays = days - 1;
    newMonth = month;
    newyears = years;
  }
}
function onClickTomorw() {
  var days = Number(domId("days").value);
  var month = Number(domId("month").value);
  var years = Number(domId("years").value);
  var newdays=0;
  var newMonth=0;
  var newyears=0;
  if (days === 31) {
    if (month === 12) {
      newdays = 1;
      newMonth = 1;
      newyears = years + 1;
    } else {
      newdays = days + 1;
      newMonth = month;
      newyears = years;
    }
  } else if (days === 28) {
    if (month === 2) {
      newdays = 1;
      newMonth = 3;
      newyears = years;
    } else {
      newdays = days + 1;
      newMonth = month;
      newyears = years;
    }
  } else {
    newdays = days + 1;
    newMonth = month;
    newyears = years;
  }
}

domId("getdate").innerHTML = newdays + "/" + newMonth + "/" + newyears;

///chua xong
// find days
function onClickfinddays() {
  //input
  var getMonths = Number(document.getElementById("getMonth").value);
  var getYears = Number(document.getElementById("getYears").value);
  //out put
  var resultdays = 0;
  //so sanh
  if (
    getMonths == 1 ||
    getMonths == 3 ||
    getMonths == 5 ||
    getMonths == 7 ||
    getMonths == 8 ||
    getMonths == 10 ||
    getMonths == 12
  ) {
    resultdays = 31;
  } else if (getMonths == 2) {
    if (getYears % 400 === 0 || (getYears % 4) / 100 !== 0) {
      resultdays = 29;
    } else {
      resultdays = 28;
    }
  } else getMonths == 4 || getMonths == 6 || getMonths == 9 || getMonths == 1;
  {
    resultdays = 30;
  }
  domId("getResultDays").innerHTML = resultdays;
}
//spell:
function onSpellNumClick() {
  //input
  var spell1 = Number(domId("spellNum").value);
  var spell = "";
  var unit = (spell1 % 100) % 10;
  var hundred = Math.floor(spell1 / 100);
  var tens = Math.floor(spell1 / 10) % 10;
  //output
  var spelltens = "";
  var spellunit = "";
  var spellhunded = "";
  //so sanh
  switch (unit) {
    case 1:
      spellunit = "mot";
      break;
    case 2:
      spellunit = "hai";
      break;
    case 3:
      spellunit = "ba";
      break;
    case 4:
      spellunit = "bon";
      break;
    case 5:
      spellunit = "nam";
      break;
    case 6:
      spellunit = "sau";
      break;
    case 7:
      spellunit = "bay";
      break;

    case 8:
      spellunit = "tam";
      break;
    case 9:
      spellunit = "chin";
      break;
    default:
      call = "khong";
  }
  switch (tens) {
    case 1:
      spelltens = " muoi";
      break;
    case 2:
      spelltens = "hai muoi";
      break;
    case 3:
      spelltens = "ba muoi";
      break;
    case 4:
      spelltens = "bon muoi";
      break;
    case 5:
      spelltens = "nam muoi";
      break;
    case 6:
      spelltens = "sau muoi";
      break;
    case 7:
      spelltens = "bay muoi";
      break;

    case 8:
      spelltens = "tam muoi";
      break;
    case 9:
      spelltens = "chin muoi";
      break;
    default:
      call = "";
  }
  switch (hundred) {
    case 1:
        spellhunded = "mot tram";
      break;
    case 2:
        spellhunded = "hai tram";
      break;
    case 3:
        spellhunded = "ba tram";
      break;
    case 4:
        spellhunded = "bon tram";
      break;
    case 5:
        spellhunded = "nam tram";
      break;
    case 6:
        spellhunded = "sau tram";
      break;
    case 7:
        spellhunded = "bay tram";
      break;

    case 8:
        spellhunded = "tam tram";
      break;
    case 9:
        spellhunded = "chin tram";
      break;
    default:
      call = "";
  }console.log(spellhunded);
 document.getElementById("spellNumber").innerHTML = spellhunded+spelltens+spellunit;
}
// Far :

function onCheckStudentClick(){
  //input 
    var studentN1=domId("student1").value;
    console.log(studentN1);
    var distance1X=Number(domId("Studen1X").value );
    var distance1Y=Number(domId("student1y").value );
    var studentN2=domId("student2").value;
    var distance2X=Number(domId("Studen2X").value );
    var distance2Y=Number(domId("student2y").value );
    var studentN3=domId("student1").value;
    var distance3X=Number(domId("Studen3X").value );
    var distance3Y=Number(domId("student3y").value );
    var distanceSX=Number(domId("schoollX").value );
    var distanceSY=Number(domId("schoollY").value );
    //output
    var studentFar='';
    //tinh quang duong
    var distance1=Math.sqrt((distanceSX-distance1X)*(distanceSX-distance1X)+(distanceSY-distance1Y)*(distanceSY-distance1Y));
    var distance2=Math.sqrt((distanceSX-distance2X)*(distanceSX-distance2X)+(distanceSY-distance2Y)*(distanceSY-distance2Y));
    var distance3=Math.sqrt((distanceSX-distance3X)*(distanceSX-distance3X)+(distanceSY-distance3Y)*(distanceSY-distance3Y));
    //so sanh
    if(distance1>distance2&& distance1>distance3){
    studentFar=studentN1;
  }else if ( distance1<distance2&& distance1>distance3){
    studentFar=studentN2
  }else if ( distance1>distance2&&distance1<distance3)
  {studentFar=studentN3}
  else if (distance1<distance2&&distance1<distance3){
    if(distance2<distance3){
        studentFar=studentN3;
    }else (distance2>distance3)
    {studentFar=studentN2}
  }

domId("furthest").innerHTML=studentFar;
}
