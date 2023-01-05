let menu = {
  "biryani": {
    "chicken biryani": 200,
    "mutton biryani": 300,
    "prawns biryani": 400,
    "mixed biryani": 160,
    "dhum biryani":350,
  },
  starters: {
    "chicken 65": 200,
    "panner 65": 180,
    tandoori: 230,
    wings: 250,
    "chilli chicken":150,
  },
  desserts: {
    "ice cream": 60,
     "gulab jamun": 80,
  },
  bewarages: {
    coke: 30,
    milkshake: 90,
    thickshake: 110,
    buttermilk: 50,
    soda: 50,
    lassi: 60,
  },
};
function attach_events() {
  let dlts = document.querySelectorAll(".dlt");
  dlts.forEach(function (element) {
    element.addEventListener("click", deleteitem);
  });
  let adds = document.querySelectorAll(".add");
  adds.forEach(function (element) {
    element.addEventListener("change", additem);
  });
}
let modal_pop = (e) => {
  // let blur=document.querySelector("#blur");
  // blur.style.filter='blur(2px)';
  attach_events();
  let curr_modal = document.getElementById(e.target.id + "_" + "modal");
  if (curr_modal != null) {
    curr_modal.style.display = "block";
  }
};
let buildtables = (tables) => {
  sessionStorage.setItem("my_tables", JSON.stringify(tables));
  tables = JSON.parse(sessionStorage.getItem("my_tables"));

  table_div.innerHTML = "";
  for (let table in tables) {
    let cost = 0;
    if (tables[table].length != 0) {
      for (x in tables[table]) cost += Number(Object.values(tables[table][x]));
    }
    let table_item = document.createElement("div");
    let noi = document.createElement("h4");
    noi.setAttribute("id", table + "_orders");
    noi.innerText = "Total items:               " + tables[table].length;
    let bill = document.createElement("p");
    bill.setAttribute("id", table + "_bill");
    bill.innerText = "RS:" + cost;
    table_item.innerText = table;
    table_item.appendChild(noi);
    table_item.appendChild(bill);
    table_item.addEventListener("dragenter", dragEnter);
    table_item.addEventListener("dragover", dragOver);
    table_item.addEventListener("dragleave", dragLeave);
    table_div.appendChild(table_item);
    table_item.classList.add("table_item");
    table_item.setAttribute("id", table);
    table_item.addEventListener("click", modal_pop);
    //modal
    let modal_div = document.createElement("div");
    let modal_title = document.createElement("div");
    modal_title.classList.add("modaltitle");
    let modal_body = document.createElement("div");
    modal_body.classList.add("modalbody");
    modal_title.innerHTML = `<div>${table_item.id}</div>`;
    modal_div.setAttribute("id", table_item.id + "_" + "modal");
    modal_div.classList.add("modal");
    modal_div.style.display = "none";
    let close_button = document.createElement("button");
    close_button.innerText = "x";
    close_button.addEventListener("click", () => {
      // let blurr=document.querySelector('#blur');
      // blurr.style.filter='blur(0px)';
      modal_div.style.display = "none";
    });
    modal_title.appendChild(close_button);
    modal_div.appendChild(modal_title);
    modal_div.appendChild(modal_body);
     table_item.appendChild(modal_div);
    // document.body.appendChild(model_div);
    // document.querySelector("body").appendChild(modal_div);
    //body_table
    let modal_table = document.createElement("table");
    modal_table.innerHTML =
      "<tr><th>Item</th><th>No Of Items</th><th>Price</th></tr>";
    modal_body.appendChild(modal_table);
    modal_table.classList.add("modal_table");
    modal_body.classList.add("modalbody");
    let occured = {};
    if (tables[table].length != 0) {
      for (x in tables[table]) {
        const counts = {};
        for (const ordered of tables[table]) {
          counts[Object.keys(ordered)] = counts[Object.keys(ordered)]
            ? counts[Object.keys(ordered)] + 1: 1;
        }
        if (occured[Object.keys(tables[table][x])] == null) {
          occured[Object.keys(tables[table][x])] = 0;
        }
        if (occured[Object.keys(tables[table][x])] == 0) {
          let modal_row = document.createElement("tr");
          modal_row.innerHTML = `<td>${Object.keys(tables[table][x])}</td>`;
          modal_row.innerHTML += `<td>${
            counts[Object.keys(tables[table][x])]
          }</td>`;
          modal_row.innerHTML += `<td>${
            counts[Object.keys(tables[table][x])] *
            Object.values(tables[table][x])
          }</td>`;
          occured[Object.keys(tables[table][x])] = 1;
          let valid_item = String(Object.keys(tables[table][x])).replace(" ","-");
          let dlt_id = table_item.id + "_" + valid_item + "_dlt";
          let add_id = table_item.id + "_" + valid_item + "_add";
          let valid_it = String(Object.keys(tables[table][x])).replace(" "," ");
          modal_row.innerHTML += `<td><input type="number" min="1" max="8" id=${add_id} value=${counts[valid_it]} class="add"></td>`;
          //console.log(counts);
          modal_row.innerHTML += `<td><input id=${dlt_id} type="button" value="delete"class="dlt"><input type="hidden" value=${table_item.id}></input><input type="hidden" value=${valid_item}></input></input></td>`;
          modal_table.appendChild(modal_row);
        }
      }
      let total_cost = `<tr><td colspan="2">Total</td><td>${cost}</td></tr>`;
      modal_table.innerHTML += total_cost;
      modal_table.innerHTML += `<button class="clear" id=${table} onclick="clearSession(event)">Generate Bill</button>`;
    } else {
      modal_table.innerText = "No items served";
    }
    document.querySelector(`#${table}`).addEventListener("drop", drop);
 }
};
window.onload = () => {
  let tables = {};
  if (sessionStorage.getItem("my_tables") === null) {
    tables = { "Table-1": [], "Table-2": [], "Table-3": [] };
  } else {
    tables = JSON.parse(sessionStorage.getItem("my_tables"));
  }
  buildtables(tables);
};
let table_div = document.getElementsByClassName("tables")[0];
let allmenu_div = document.getElementsByClassName("menu")[0];
let tbsearch = document.getElementById("table_search");
let menusearch = document.getElementById("menu_search");
let visible = true;
for (let item in menu) {
  for (let dish in menu[item]) {
    let menu_div = document.createElement("div");
    let dish_name = document.createElement("h2");
    let price = document.createElement("h4");
    dish_name.innerText = dish;
    price.innerText = "Price :" + menu[item][dish];
    menu_div.appendChild(dish_name);
    menu_div.appendChild(price);
    price.setAttribute("id", dish + "_" + menu[item][dish]);
    menu_div.classList.add("each_item");
    menu_div.setAttribute("id", item + "_" + dish);
    menu_div.setAttribute("draggable", true);
    menu_div.addEventListener("dragstart", dragStart);
    allmenu_div.appendChild(menu_div);
  }
}
//search
tbsearch.addEventListener("input", (e) => {
  table_div.childNodes.forEach((item) => {
    visible = item.innerText.includes(e.target.value);
    item.classList.toggle("hide", !visible);
  });
});
menusearch.addEventListener("input", (e) => {
  allmenu_div.childNodes.forEach((item) => {
    visible = item.id.includes(e.target.value.toLowerCase());
    item.classList.toggle("hide", !visible);
  });
});
//search_end
//drag
function dragStart(e) {
  let order = {};
  let item = e.target.childNodes[0].innerText;
  let cost = e.target.childNodes[1].innerText.slice(7);
  order[item] = cost;
  order = JSON.stringify(order);
  e.dataTransfer.setData("json", order);
}
function dragEnter(e) {
  e.preventDefault();
}
function dragOver(e) {
  e.preventDefault();
}
function dragLeave(e) {}
function drop(e) {
  let s = String(e.target.id);
  if (s.indexOf("_") != -1) {
    s = s.slice(0, s.search("_"));
  }
  const data = JSON.parse(e.dataTransfer.getData("json"));
  tables = JSON.parse(sessionStorage.getItem("my_tables"));
  tables[s].push(data);
  buildtables(tables);
  // console.log('dropped')
  attach_events();
}
function deleteitem(e) {
  let splitted = e.target.id.split("_");
  let table_name = splitted[0];
  let dish_name = splitted[1].replace("-", " ");
  deletefrom_table(table_name, dish_name);
  document.getElementById(table_name + "_" + "modal").style.display = "block";
}
function additem(e) {
  let nitems = e.target.value;
  let splitted = e.target.id.split("_");
  let table_name = splitted[0];
  let dish_name = splitted[1].replace("-", " ");
  let tables = JSON.parse(sessionStorage.getItem("my_tables"));
  let k = 0;
  for (let i in tables[table_name]) {
    if (Object.keys(tables[table_name][i]) != dish_name) {
      k++;
    } else {
      break;
    }
  }
  let addme = deletefrom_table(table_name, dish_name);
  addto_table(table_name, dish_name, addme, nitems, k);
  document.getElementById(table_name + "_" + "modal").style.display = "block";
}
function deletefrom_table(table_name, dish) {
  let item_toadd = {};
  let tables = JSON.parse(sessionStorage.getItem("my_tables"));
  let table_array = Object.keys(tables);
  table_array.forEach((item) => {
    if (item === table_name) {
      let newarr = [];
      tables[item].forEach((x) => {
        if (Object.keys(x)[0] != dish) {
          newarr.push(x);
        } else {
          item_toadd = x;
        }
        tables[item] = newarr;
      });
    }
  });
  buildtables(tables);
  attach_events();
  return item_toadd;
}
function addto_table(table_name, dish, addme, nitems, k) {
  var cp = [];
  let tables = JSON.parse(sessionStorage.getItem("my_tables"));
  let table_array = Object.keys(tables);
  let arr = [];
  table_array.forEach((item) => {
    if (item === table_name) {
      while (nitems > 0) {
        arr.push(addme);
        nitems -= 1;
      }
      cp = tables[item];
    }
  });
  dummy = [...cp.slice(0, k), ...arr, ...cp.slice(k)];
  tables[table_name] = dummy;
  console.log(dummy);
  buildtables(tables);
  attach_events();
}
//sessionStorage.clear()
function clearSession(e) {
  let now_table = e.target.id;
  let tbill = document.getElementById(now_table + "_bill");
  if (confirm(`Total bill for ${now_table}\n${tbill.innerText}`) ==true) {
    let tables = JSON.parse(sessionStorage.getItem("my_tables"));
    let table_array = Object.keys(tables);
    table_array.forEach((item) => {
      if (item === now_table) {
        tables[item] = [];
        buildtables(tables);
        attach_events();
      }
    });
  }
}
//sessionStorage.clear()
//drop