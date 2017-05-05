// using context

$('.context.example .ui.sidebar')
  .sidebar({
    context: $('.context.example .bottom.segment')
  })
  .sidebar('attach events', '.context.example .menu .item');

$(document).ready(function() {
  $('.secondary.menu .item').tab({
    history: false
  });
  $('.tabular.menu .item').tab({
    history: false
  });
});;

//set up storage
if (typeof(Storage) !== "undefined") {
  var tables = localStorage.getItem("tables");
  if(tables==null){
    tables = '[]';
    localStorage.setItem("tables",tables);
  }

  //If this is the first order of the day, set it to one.
  var orderNumber = localStorage.getItem("orderNumber");
  if(orderNumber==null){
    localStorage.setItem("orderNumber",1);
  }
} else {
  console.log("No Storage");
}

function addOrder(tag, tableNumber){
  var name = tag.getAttribute("name");
  var cost = tag.getAttribute("cost");
  if(typeof(Storage)!=="undefined") {
    var tables=JSON.parse(localStorage.getItem("tables"));
    if(tables[tableNumber]==null){
      tables[tableNumber]=[];
    }
    var orders=tables[tableNumber];
    //increase quantity of item if there is already one
    for(i=0;i<orders.length;i++){
      if(name==orders[i].name){
        orders[i].qty+=1;
        localStorage.setItem("tables",JSON.stringify(tables));
        return;
      }
    }
    //didn't find one, add a new item
    var order={
      "name": name,
      "cost": cost,
      "qty": 1
    };
    orders.push(order);
    localStorage.setItem("tables",JSON.stringify(tables));
  }
}

//test function to read tables storage
function test() {
  if (typeof(Storage) !== "undefined") {
    var tables = JSON.parse(localStorage.getItem("tables"));
    console.log(tables);
  }
}

//test function to reset tables storage
function testreset() {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("tables",'[]');
  }
}
