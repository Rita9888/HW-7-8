  //удаление информации о персоне из массива и страницы
  
  function deleteBandit(i,arrBandits) {
    arrBandits.splice(i,1);
    printInfo(arrBandits);
  }