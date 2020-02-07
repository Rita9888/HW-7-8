//редактирование данных в одной персоне
function editBandit(i){
    display("create_person");
    document.getElementById("textFirstName").value = arrBandits[i].firstName;
    document.getElementById("textSurname").value = arrBandits[i].surname;
    document.getElementById("textPatronymic").value = arrBandits[i].patronymic;
    document.getElementById("textAge").value = arrBandits[i].age;
    document.getElementById("textMarried").value = arrBandits[i].married;
    document.getElementById("textWeapons").value = arrBandits[i].weapons;
    document.getElementById("numbKills").value = arrBandits[i].kills;
    document.getElementById("numbLevel").value = arrBandits[i].level;
    deleteBandit(i,arrBandits);
    document.getElementById("mainMenu").style.display ="none"; 
 
  };

  
  //удаление информации о персоне из массива и страницы
  
  function deleteBandit(i,arrBandits) {
    arrBandits.splice(i,1);
    printInfo(arrBandits);
  }
  
  // вывод всей информации на странице о выбранной персоне в классе all_info
  
  function printDetailedInfo(i){
    let form = document.getElementById("all_info").getElementsByTagName("form");
    form[0].innerHTML='<br>';
    form[0].innerHTML+='<div class="detailInfo">'+
        '<div class="detailsText">'+
          '<div class="text">Имя</div>' +
          '<div class="text">Фамилия</div>' +
          '<div class="text">Отчество</div>' +
          '<div class="text">Возраст</div>' +
          '<div class="text">Замужем/Женат</div>' +
          '<div class="text" id = "detWeap">Оружие</div>' +
          '<div class="text" id = "detKill">Количество убийств</div>' +
          '<div class="text" id = "detLev">Уровень</div>' +
        '</div>'+
        '<div class="detailsElem">'+
          '<div class="elem">'+arrBandits[i].firstName+ '</div>'+
          '<div class="elem">'+arrBandits[i].surname+ '</div>' +
          '<div class="elem">'+arrBandits[i].patronymic+ '</div>' +
          '<div class="elem">'+arrBandits[i].age+ '</div>' +
          '<div class="elem">'+arrBandits[i].married+ '</div>' +
          '<div class="elem" id = "elemWeapons">'+arrBandits[i].weapons+ '</div>' +
          '<div class="elem" id = "elemKills">'+arrBandits[i].kills+ '</div>' +
          '<div class="elem" id = "elemLevel">'+arrBandits[i].level+ '</div>' +
        '</div>'+
      '</div><br>'+
      '<input type="button" class="buttons" id="mainMenu2" value="Главное меню">';
       if(arrBandits[i].weapons == undefined){
        document.getElementById("elemWeapons").style.display = "none";
        document.getElementById("detWeap").style.display = "none";
       }
       if(arrBandits[i].kills == undefined){
        document.getElementById("elemKills").style.display = "none";
        document.getElementById("detKill").style.display = "none";
       }
       if(arrBandits[i].level == undefined){
        document.getElementById("elemLevel").style.display = "none";
        document.getElementById("detLev").style.display = "none";
       }
   
    document.getElementById("mainMenu2").addEventListener("click",function() {
      display("information");
    });
  }
  
    // отрисовка всей информации о персонах в классе info
  
  function printInfo(arrBandits) {
    let form = document.getElementById("information").getElementsByTagName("form");
    form[0].innerHTML='<br>';
    //Первая (верхняя) строка таблицы
    form[0].innerHTML+='<div class="text_description">'+
      '<div class="cell text_name strong">Имя</div>'+
      '<div class="cell text_surname strong">Фамилия</div>' +
      '<div class="cell text_patronymic strong">Отчество</div>' +
      '<div class="cell text_age strong">Возраст</div>' +
      '<div class="cell text_married strong">Женат/Замужем</div>'+
      '<div class = "cell"></div>'+
      '<div class = "cell"></div>'+
      '</div>';
  
    for (let i=0; i<arrBandits.length; i++) {
      //каждое i - информация о персоне
  
      form[0].innerHTML+='<div class="text_description">'+
        '<div class="cell text_name " id="details'+i+'">'+arrBandits[i].firstName  + '</div>' +
        '<div class="cell text_suname">'+ arrBandits[i].surname + '</div>' +
        '<div class="cell text_patronyc">'+ arrBandits[i].patronymic  + '</div>' +
        '<div class="cell text_age">'+ arrBandits[i].age + '</div>' +
        '<div class="cell text_married">'+ arrBandits[i].married + '</div>' +
        '<div class="cell text_name " id="edit'+i+'"> Редактировать </div>'+
        '<div class="cell text_name " id="remove'+i+'"> Удалить </div>'+ 
        '</div>';
    }
    form[0].innerHTML+='<br>'+
    '<input type="button" id="newBanditButton" class="buttons" value="Добавить нового бандита">';
  
    // добавим обработчики
  
    for (let i=0;i<arrBandits.length;i++){
      let edit='edit'+i;
      let remove='remove'+i;
      let details='details'+i;
      document.getElementById(edit).style.color="blue";
      document.getElementById(remove).style.color="red";
      document.getElementById(details).style.color="green";
  
      document.getElementById(details).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(edit).addEventListener("click",function(){
        editBandit(i);
        let add = document.getElementById("createPerson");
        add.value = "Сохранить";
      });
      document.getElementById(remove).addEventListener("click",function(){
        if (confirm("Вы уверены, что хотите удалить инофрмацию о " +
        arrBandits[i].firstName + " " +arrBandits[i].surname+"?")) {
            deleteBandit(i,arrBandits);
        } else {
  
        }
  
      });
    }
    document.getElementById("newBanditButton").addEventListener("click",function(){
      display("create_person");
      document.getElementById("createPerson").style.display="";
      let add = document.getElementById("createPerson");
        add.value = "Добавить вшайку нового!";
    })
  }
  
  function display(visibleId/*выбирается либо:"information" либо "all_info" либо "create_person"*/) {
    //display flex чтобы отобразить нужный блок
  
    switch (visibleId) {
    case "create_person":
    document.getElementById("information").style.display="none";
    document.getElementById("all_info").style.display="none";
    document.getElementById("create_person").style.display="flex";
    break;
    case "all_info":
    document.getElementById("information").style.display="none";
    document.getElementById("all_info").style.display="flex";
    document.getElementById("create_person").style.display="none";
    break;
    case "information":
    default :
    document.getElementById("information").style.display="flex";
    document.getElementById("all_info").style.display="none";
    document.getElementById("create_person").style.display="none";
    }
  }
  
  //родительский класс гет сет
  let marriedBtn = document.getElementById("textMarried");
  class BaseClass {
      constructor(firstName, surname, patronymic, age, married, number){
        this.firstName = firstName;
        this.surname = surname;
        this.patronymic = patronymic;
        this.age = age;
        this.married = married;
        this.number = number;
      }

      get firstName(){
          return this._firstName;
      }

      set firstName(value){
          if(value.length == 0){
              alert('Введите имя ');
              return;
          }
          this._firstName = value;
      }

      get surname(){
        return this._surname;
      }

      set surname(value){
        if(value.length == 0){
          alert("Введите фамилию");
          return;
        }
        this._surname = value;
      }

      get patronymic(){
        return this._patronymic;
      }

      set patronymic(value){
        if(value.length == 0){
          alert("Введите отчество");
          return;
        }
        this._patronymic = value;
      }

      get age(){
        return this._age;
      }

      set age(value){
        if(value.length == 0){
          alert("Введите возраст");
          return;
        }
        this._age = value;
      }

      get married(){
        return this._married;
      }

      set married(value){
        var radio = document.getElementById('textMarried');
        if(radio.checked){
          value = true;
        }
        this._married = value;
      }
      
  }

  var a,b;
function foo(c) {
    if (a != c) {b = 0;a = c};
    b ^= 1;
    c.checked = b
};

  
  //наследники

  class OneExtendsClass extends BaseClass{
      constructor(firstName, surname, patronymic, age, married, weapons, kills){
        super(firstName, surname, patronymic, age, married);
        this.type = "killer";
        this.weapons = weapons;
        this.kills = kills;
      }

      get weapons(){
        return this._weapons;
      }

      set weapons(value){
        if(value.length == 0){
          alert("Введите оружие");
          return;
        }
        this._weapons = value;
      }

      get kills(){
        return this._kills;
      }

      set kills(value){
        if(value.length == 0){
          alert("Введите количество убийств");
          return;
        }
        this._kills = value;
      }
  }

  class TwoExtendsClass extends BaseClass{
    constructor(firstName, surname, patronymic, age, married, level){
      super(firstName, surname, patronymic, age, married);
      this.type = "sniper";
      this.level = level;
    }

    get level(){
      return this._level;
    }

    set level(value){
      if(value.length == 0){
        alert("Введите ваш уровень");
        return;
      }
      this._level = value;
    }
}
  
  
  // проверка какая радио-кнопка и возвращаем его value
  function checkRadio() {
      var radio = document.getElementsByName('radioExt');
      for (var i = 0; i < radio.length ; i++) {
          if (radio[i].checked) {
              return(radio[i].value);
          }
      }
  }
  
  let arrBandits = []; // массив из персон
  
  
  //Создание экземпляров класса

  
  
  //статичные 
  let bandit1 = new OneExtendsClass("John", "aaaa", "HHHAaa", 9, true, "pist", 88 );
  arrBandits.push(bandit1); 

  let bandit2 = new OneExtendsClass("Micle","bbb", "KKKKSSS", 9, true, "pist", 88);
  arrBandits.push(bandit2); 

  let bandit3 = new OneExtendsClass("Anna", "cccc", "LLLDD", 9, false, "pist", 88);
  arrBandits.push(bandit3); 
  display("information");
  printInfo(arrBandits);
  
  
  
  
  
  // главная страница готова
  // с кнопками crud
  
  
  /*listeners*/
  //
  //на главное меню
 
  let radioBtn1 = document.getElementById('radio_ext1');
  let radioBtn2 = document.getElementById('radio_ext2');
  
  radioBtn1.addEventListener('change', function(){
    let firstChild = document.getElementsByClassName("firstChildClass")[0];
    let secondChild = document.getElementsByClassName("secondChildClass")[0];
    secondChild.style.display = "none";

    firstChild.style.display = "block";

  })

  radioBtn2.addEventListener('change', function(){
    let firstChild = document.getElementsByClassName("firstChildClass")[0];
    let secondChild = document.getElementsByClassName("secondChildClass")[0];

    firstChild.style.display = "none";

    secondChild.style.display = "block";
  })

  document.getElementById("createPerson").addEventListener("click", function() {
    document.getElementById("mainMenu").style.display="";

    let firstName = document.getElementById("textFirstName").value;
    let surname = document.getElementById("textSurname").value;
    let patronymic = document.getElementById("textPatronymic").value;
    let age = document.getElementById("textAge").value;
    let married = document.getElementById("textMarried").value;
    let weapons = document.getElementById("textWeapons").value;
    let kills = document.getElementById("numbKills").value;
    let level = document.getElementById("numbLevel").value;
    let type = checkRadio();

    switch (type) {
      case "killer":
        arrBandits[arrBandits.length] = new OneExtendsClass(firstName, surname, patronymic, age, married, weapons, kills);
        printInfo(arrBandits);
        display("information");
        alert("Информация сохранена");
      break;
      case "sniper":
        arrBandits[arrBandits.length] = new TwoExtendsClass(firstName, surname, patronymic, age, married, level);
        printInfo(arrBandits);
        display("information");
        alert("Информация сохранена");
        break;
      default :
        arrBandits[arrBandits.length] = new OneExtendsClass(firstName, surname, patronymic, age, married, weapons, kills);
        printInfo(arrBandits);
        display("information");
        alert("Информация сохранена");
    } 
  });
  
  
  document.getElementById("mainMenu").addEventListener("click",function() {
    display("information");
  });