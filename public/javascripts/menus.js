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
  $('.invoice-order-number').text('Order #: '+ localStorage.getItem('orderNumber'));
  loadInvoice(localStorage.getItem('activeTableNumber'));
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

//loads previous orders from this table
function loadInvoice(tableNumber){
  console.log('Table #: '+ tableNumber);
  var tables=JSON.parse(localStorage.getItem('tables'));
  var orders = tables[tableNumber];
  if (orders != null){
  for(i=0; i <orders.length; i++){
    var name = orders[i].name;
    var cost = orders[i].cost;
    var qty = orders[i].qty;
  }
  updateInvoice(orders);
}
}

function updateCostTable(cost) {
  var costs = `<tr class="total">
            <td></td>
            <td>
              Sub Total: $${cost}
            </td>
          </tr>
          <tr class="total">
            <td></td>
            <td>
              Tax (9.0%): $${(cost*.09).toPrecision(3)}
            </td>
          </tr>
          <tr class="total">
            <td></td>
            <td>
              Total: $${cost + cost*.09}
            </td>
          </tr>`
          $("#costs-table").html(costs)
}

//adds order to the table
function updateInvoice(invoice){
  var costTotal = 0;
  var orders =`<tr class="heading">
        <td>
          Item
        </td>

        <td>
          Price
        </td>
      </tr>`
  for (var index = 0; index < invoice.length; index++) {
    costTotal += (parseInt(invoice[index].cost) * invoice[index].qty);
      orders+=`
        <tr class="item">
             <td>
              ${invoice[index].qty} ${invoice[index].name}
             </td>
             <td>
               $${invoice[index].qty * invoice[index].cost}
             </td>
           </tr>`
  }
  $("#orders-table").html(orders)
  updateCostTable(costTotal);
}

//adds a new order to the local storage
//calls updateInvoice
function addOrder(tag, tableNumber){
  var name = tag.getAttribute("name");
  var cost = tag.getAttribute("cost");
  if(typeof(localStorage)!=="undefined") {
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
        updateInvoice(orders)
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
    updateInvoice(orders);
  }
}
