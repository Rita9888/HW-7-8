//родительский класс гет сет
  
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

}

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
      return this._hills;
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