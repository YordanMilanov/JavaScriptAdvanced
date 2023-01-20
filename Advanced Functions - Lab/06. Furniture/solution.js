function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  const[input, output] = Array.from(document.querySelectorAll('textarea')); // [input, output] are HTML elements
  const tbody = document.querySelector('tbody');
 
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  const items = [];

  //parse input JSON and create table
  // -- find input textarea
  // -- parse JSON
  // -- for every itme 
  // ---- create row
  // ---- append row to table body
function buy() {
  let list = [];
  let total = 0;
  let decoration = 0;

const bought = items.filter(i => i.isChecked());

    for (const item of bought) {
    list.push(item.name);
    total += Number(item.price);
    decoration += Number(item.decFactor);
    }

    decoration /= bought.length;

    output.value = [
      `Bought furniture: ${list.join(', ')}`,
      `Total price: ${total.toFixed(2)}`,
      `Average decoration factor: ${decoration}`
    ].join('\n');
}

  function generate() {
    const data = JSON.parse(input.value); // parse the value of the input element form JSON to an object

    for (let item of data) {
      const row = document.createElement('tr');

      //Image Column
      row.appendChild(createColumn('img', item.img));

      //Name column
      row.appendChild(createColumn('p', item.name));

      //Price column
      row.appendChild(createColumn('p', item.price));

      //Price column
      row.appendChild(createColumn('p', item.decFactor));

      const c5 = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      c5.appendChild(checkbox);
      row.appendChild(c5);

      tbody.appendChild(row);

      items.push({
        ...item,
        isChecked
      });

      function isChecked() {
        return checkbox.checked;
      }
    }
  }


  //find user choices and summarize purchase
  // -- find all checked boxes
  // -- for every box
  // ---- read data from parent row
  // ---- append to result
  // --  output result to textarea

  function createColumn(type, content) {
    const result = document.createElement('td');
    let inner;
    if(type == 'img') {
      inner = document.createElement('img');
      inner.src = content;
    } else {
      inner = document.createElement('p');
      inner.textContent = content;
    }
    result.appendChild(inner);

    return result;
  }
}