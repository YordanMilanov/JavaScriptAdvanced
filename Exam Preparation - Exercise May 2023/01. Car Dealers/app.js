window.addEventListener("load", solve);

function solve() {

  //all inputs
  let [make, model, year, originalCost, sellingPrice] = document.querySelectorAll('input');
  //fuel is exception because it is option not input
  let fuel = document.getElementById('fuel');

  let tableBody = document.getElementById('table-body');

  const publishButton = document.getElementById('publish');
  publishButton.addEventListener('click', onSubmit);

  const carListUL = document.getElementById('cars-list');

  const profit = document.getElementById('profit');

  // let editButton = document.querySelector('button.action-btn.edit');
  // editButton.addEventListener('click', edit);
  

  function onSubmit(e) {
    e.preventDefault();

    const makeInputValue = make.value;
    const modelInputValue = model.value;
    const yearInputValue = year.value;
    const fuelInputValue = fuel.value;
    const originalCostInputValue = originalCost.value;
    const sellingPriceInputValue = sellingPrice.value;

    if(!makeInputValue ||
      !modelInputValue ||
      !yearInputValue ||
      !fuelInputValue ||
      !originalCostInputValue ||
      !sellingPriceInputValue
      ){return;}

      let trEl = document.createElement('tr');
      trEl.classList.add("row");

      let makeTdEl = document.createElement('td');
      makeTdEl.textContent = makeInputValue;
      let modelTdEl = document.createElement('td');
      modelTdEl.textContent = modelInputValue;
      let yearTdEl = document.createElement('td');
      yearTdEl.textContent = yearInputValue;
      let fuelTdEl = document.createElement('td');
      fuelTdEl.textContent = fuelInputValue;
      let originalCostTdEl = document.createElement('td');
      originalCostTdEl.textContent = originalCostInputValue;
      let sellingPriceTdEl = document.createElement('td');
      sellingPriceTdEl.textContent = sellingPriceInputValue;

      let buttonsTdEl = document.createElement('td');

      //define buttons
      const editBtn = document.createElement('button');
      editBtn.classList.add('action-btn', 'edit');
      editBtn.textContent = "Edit";

      const sellBtn = document.createElement('button');
      sellBtn.classList.add('action-btn', 'sell');
      sellBtn.textContent = "Sell";

      //attach buttons to td
      buttonsTdEl.appendChild(editBtn);
      buttonsTdEl.appendChild(sellBtn);

      //attach created tds to the table row

      trEl.appendChild(makeTdEl);
      trEl.appendChild(modelTdEl);
      trEl.appendChild(yearTdEl);
      trEl.appendChild(fuelTdEl);
      trEl.appendChild(originalCostTdEl);
      trEl.appendChild(sellingPriceTdEl);
      trEl.appendChild(buttonsTdEl);

      //attach row to tbody
      tableBody.appendChild(trEl);

      //clear
     clearAllInputFields();

     //inner callBacks
     editBtn.addEventListener('click', (e) => {
      make.value = makeInputValue;
      model.value = modelInputValue;
      year.value = yearInputValue;
      fuel.value = fuelInputValue;
      originalCost.value = originalCostInputValue;
      sellingPrice.value = sellingPriceInputValue;
  
      trEl.remove();
     });

     sellBtn.addEventListener('click', (e) => {
      liEl = document.createElement('li');
      liEl.classList.add('each-list');

      let nameSpan = document.createElement('span');
      nameSpan.textContent = `${makeInputValue} ${modelInputValue}`;

      let yearSpan = document.createElement('span');
      yearSpan.textContent = yearInputValue;

      let priceSpan = document.createElement('span');
      priceSpan.textContent = Number(sellingPriceInputValue) - Number(originalCostInputValue);

      liEl.appendChild(nameSpan);
      liEl.appendChild(yearSpan);
      liEl.appendChild(priceSpan);

      carListUL.appendChild(liEl);

      trEl.remove();

      //populate the profit
      profit.textContent = (Number(profit.textContent) + (Number(sellingPriceInputValue) - Number(originalCostInputValue))).toFixed(2);

      });
  }

  function clearAllInputFields() {
    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    originalCost.value = "";
    sellingPrice.value = "";
  }

  console.log(editButton)
}
