console.log('Here are all the available people:', people);

let nameToGuess;

$(readyNow);

function readyNow() {
  console.log('JQ');

  // randomize divs
  randomizeDivs();
  // randomize nameToGuess
  nameRandomizer();

  renderPeople();

  // event listener
  $(document).on(`click`, `.face`, checkIfCorrect);
}

function checkIfCorrect() {
  console.log(`in check`);
  let name = $(this).data().name;
  console.log(name);
  if (name === nameToGuess) {
    let self = $(this);
    $(this).addClass('success');

    setTimeout(function () {
      self.removeClass('success');
      // shuffle people array
      randomizeDivs();
      nameRandomizer();
      renderPeople();
    }, 2000);
  } else {
    alert(`you were wrong`);
  }
}

function renderPeople() {
  // first remove any faces, if there are any
  $(`.face`).remove();
  // render people to the DOM
  for (let person of people) {
    let face = $(`
  <div class="face">
    <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">

  </div>
  `);
    $('body').append(face);
    face.data(person);
  }
}

function nameRandomizer() {
  nameToGuess = people[randomNumber(0, people.length - 1)].name;
  $('#nameToGuess').text(nameToGuess);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function randomizeDivs() {
  // shuffle the people array
  // this will make it random
  // and since it's changed in place, it will affect everything

  // step through people array
  // swap at random
  for (let i = 0; i < people.length; i++) {
    // save the person so they can be swapped
    let temp = people[i];
    // pick a person at random to swap into index i
    let randomIndex = randomNumber(0, people.length - 1);
    people[i] = people[randomIndex];
    // replace the swapped person with the person who used to be at index i
    people[randomIndex] = temp;
  }
}
