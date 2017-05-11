//-----Helper_Functions-----//
function storageSetUp() {
  if (typeof(Storage) !== "undefined") {
    var tables = localStorage.getItem("tables");
    if (tables == null) {
      tables = '[]';
      localStorage.setItem("tables", tables);
    }

    //If this is the first order of the day, set it to one.
    var orderNumber = JSON.parse(localStorage.getItem("orderNumber"));
    var tableNumber = localStorage.getItem('activeTableNumber');
    if (orderNumber == null) {
      orderNumber = [];
    }
    if (orderNumber[tableNumber] == null) {
      orderNumber[tableNumber] = 1;
      localStorage.setItem('orderNumber', JSON.stringify(orderNumber));
    }
  } else {
    console.log("No Storage");
  }
}

function getTables() {
  if (typeof(Storage) !== 'undefined') {
    var tables = JSON.parse(localStorage.getItem('tables'));
    return tables;
  }
}

function storeTables(tables) {
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('tables',JSON.stringify(tables));
  }
}

function getOrderNumber(){
  if(typeof(Storage)!=='undefined'){
    var orders=JSON.parse(localStorage.getItem('orderNumber'));
    return orders;
  }
}

function storeOrderNumber(orders) {
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('orderNumber',JSON.stringify(orders));
  }
}
