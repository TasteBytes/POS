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

//--SAMPLE DATA?--//
/*
  tables=[
    0:{

    },
    1:{

    },
    tableNumber:{
      orders:[
        0:{
          name:name,
          cost:cost
        },
        1:{
          name:name2,
          cost:cost2
        }
      ]
    }
  ]
*/

//set up storage
if (typeof(Storage) !== "undefined") {
  var orders=localStorage.getItem("orders");
  if(orders==null){
    localStorage.setItem("orders", '[]');
  }

  var tables = localStorage.getItem("tables");
  if(tables==null){
    tables = '[]';
    localStorage.setItem("tables",tables);
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
    var order={
      "name": name,
      "cost": cost
    };
    orders.push(order);
    localStorage.setItem("tables",JSON.stringify(tables));
  }
}

//test function to read orders storage
function test() {
  if (typeof(Storage) !== "undefined") {
    var tables = JSON.parse(localStorage.getItem("tables"));
    console.log(tables);
  }
}

//test function to reset orders storage
function testreset() {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("tables",'[]');
  }
}
