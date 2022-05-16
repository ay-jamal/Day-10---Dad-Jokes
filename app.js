// fetch("https://icanhazdadjoke.com/").then((e) => {
//   console.log(e);
// });

const jokeEl = document.getElementById("joke");
const get_joke = document.getElementById("get_joke");

get_joke.addEventListener("click", getJoke);
getJoke();

async function getJoke() {
  // call the api
  let jokeRe = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const joke = await jokeRe.json();
  console.log(joke.joke);

  // set new joke
  jokeEl.innerHTML = joke.joke;
}
