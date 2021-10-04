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
    $("#nameToGuess").text(person.name);
  }
}
