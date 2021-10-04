console.log("Here are all the available people:", people);

let nameToGuess;

$(readyNow);

function readyNow() {
  console.log("JQ");
  for (let person of people) {
    let face = $(`
  <div class="face">
    <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">

  </div>
  `);
    $("body").append(face);
    face.data(person);
  }

  nameRandomizer();
  // event listener
  $(`.face`).on(`click`, checkIfCorrect);
}

function checkIfCorrect() {
  console.log(`in check`);
  let name = $(this).data().name;
  console.log(name);
  if (name === nameToGuess) {
    alert(`you got it`);
    nameRandomizer();
  } else {
    alert(`you were wrong`);
  }
}

function nameRandomizer() {
  nameToGuess = people[randomNumber(0, people.length - 1)].name;
  $("#nameToGuess").text(nameToGuess);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
