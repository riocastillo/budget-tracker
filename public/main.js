// document.querySelector('#add').addEventListener('click', addNewGoal)

const buttons = document.getElementsByClassName('addGoal')

Array.from(buttons).forEach(button => {
  button.addEventListener('click', buttonStuff)
})

function buttonStuff(button) {
  console.log("You have clicked the button")
  // Grab the parent
  const parent = button.target.parentNode
  console.log(parent, 'button.target:', button.target)
  console.log(parent.childNodes)
  console.log(parent.childNodes[1].childNodes[1].value)
  const goal = parent.childNodes[1].childNodes[1].value
  const amount = parent.childNodes[3].childNodes[1].value
  const balance = parent.childNodes[5].childNodes[1].value
  const note = parent.childNodes[7].childNodes[1].value

  console.log(goal, amount, balance, note)

  fetch('budget', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'goal': goal,
      'amount': amount,
      'balance': balance,
      'note': note,
      //add user name
    })
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
}

//adds new input to the "table"
function addNewGoal() {
  console.log('function accessed')
}


// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });



// Array.from(trash).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     fetch('messages', {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg
//       })
//     }).then(function (response) {
//       window.location.reload()
//     })
//   });
// });

//button + its click event listener is triggering the deletion 
//the trash function get accessed
//create a fetch and an app.delete
//the database entries get gathered
// clears out database
//returns removed list from the dom

document.querySelector('#clear').addEventListener('click', clearList)

function clearList() {
  fetch('clear', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({

    })
  }).then(function (response) {
        window.location.reload()
      })
}