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
        '</div>'+
        '<div class="detailsElem">'+
          '<div class="elem">'+arrBandits[i].firstName+ '</div>'+
          '<div class="elem">'+arrBandits[i].surname+ '</div>' +
          '<div class="elem">'+arrBandits[i].patronymic+ '</div>' +
          '<div class="elem">'+arrBandits[i].age+ '</div>' +
          '<div class="elem">'+arrBandits[i].married+ '</div>' +
        '</div>'+
      '</div><br>'+
      '<input type="button" class="buttons" id="mainMenu2" value="Главное меню">';
  
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
        })
      }