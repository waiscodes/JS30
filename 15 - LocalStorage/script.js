const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
// to populate list, you must parse the stringified json or return empty.
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = e.target.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);

  //local storage is an object that takes in a string so you must stringify your JSON.
  localStorage.setItem("items", JSON.stringify(items));
  e.target.reset();
}

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join("");
};

const toggleDone = (e) => {
  // This gives a double click event. Pick v
  if (!e.target.matches("input")) return;
  const el = e.target;
  // another use case for data set.
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
};

itemsList.addEventListener("click", toggleDone);
addItems.addEventListener("submit", addItem);

populateList(items, itemsList);
