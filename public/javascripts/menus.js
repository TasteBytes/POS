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
  localStorage.setItem("orders", '[]');
} else {
  console.log("No Storage");
}

//test function for adding to orders storage
function test() {
  if (typeof(Storage) !== "undefined") {
    var orders = JSON.parse(localStorage.getItem("orders"));
    var json = {
      "name": "test",
      "cost": 5
    };
    orders.push(json);
    console.log(orders);
    localStorage.setItem("orders", JSON.stringify(orders));
  }
}

//test function to read orders storage
function test2(data) {
  if (typeof(Storage) !== "undefined") {
    var orders = JSON.parse(localStorage.getItem("orders"));
    console.log(orders);
    for (i = 0; i < orders.length; i++) {
      console.log(orders[i].cost);
    }
  }
}
