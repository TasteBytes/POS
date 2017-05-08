//store active table number
function setTable(tableObject){
  if(typeof(Storage)!=='undefined'){
    localStorage.setItem('activeTableNumber',tableObject.getAttribute('data-ref'));
  }
}
