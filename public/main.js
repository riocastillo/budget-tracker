const buttons = document.getElementsByClassName("addGoal");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", buttonStuff);
});

function amountLeft(amount, spent) {
  let amountLeft = amount - spent
  console.log(amountLeft)
  return amountLeft
//anything after return will not be executed so you set the innertext beforehand
}

function buttonStuff(button) {
  console.log("You have clicked the button");
  // Grab the parent
  const parent = button.target.parentNode;
  const goal = parent.childNodes[1].childNodes[1].value;
  const amount = parent.childNodes[3].childNodes[1].value;
  const spent = parent.childNodes[5].childNodes[1].value;
  const balance = parent.childNodes[7].childNodes[1].value;
  const note = parent.childNodes[9].childNodes[1].value;

  let amountLeft =  amount - spent
  document.querySelector(".balance").innerText = amountLeft

  fetch("budget", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      goal: goal,
      amount: amount,
      spent: spent,
      balance: balance,
      amountLeft: amountLeft,
      note: note,
      completed: false,
    }),
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      window.location.reload(true);
    });
}



//adds new input to the "table"
function addNewGoal() {
  console.log("function accessed");
}

document.querySelector("#clear").addEventListener("click", clearList);

function clearList() {
  fetch("clear", {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  }).then(function (response) {
    window.location.reload();
  });
}

function deleteGoal(id) {
  console.log(id)
  console.log("delete value", id);
  fetch("deleteOne", {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  }).then(function (response) {
    window.location.reload();
  });
}

function checkRow(id) {
  console.log("check value", id);
  fetch("checkOne", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  }).then(function (response) {
    window.location.reload();
  });
}
