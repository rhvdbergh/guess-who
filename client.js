console.log("Here are all the available people:", people);

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
  }

  $("#nameToGuess").text(people[randomNumber(0, people.length - 1)].name);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
