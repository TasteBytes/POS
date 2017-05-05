//store active table number
function setTableNumber(tableNumber){
  if(typeof(Storage)!=='undefined'){
    localStorage.setItem('activeTableNumber',tableNumber);
  }
}
