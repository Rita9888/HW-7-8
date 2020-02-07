//редактирование данных в одной персоне
function editBandit(i){
    display("create_person");
    document.getElementById("textFirstName").value = arrBandits[i].firstName;
    document.getElementById("textSurname").value = arrBandits[i].surname;
    document.getElementById("textPatronymic").value = arrBandits[i].patronymic;
    document.getElementById("textAge").value = arrBandits[i].age;
    document.getElementById("textMarried").value = arrBandits[i].married;
    deleteBandit(i,arrBandits);
    document.getElementById("mainMenu").style.display ="none";
  }