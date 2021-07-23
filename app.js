const submitBtn = document.querySelector("form");
const percentPos = document.querySelector(".container").children[1];

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault(true);
  let perecntOfNinja = 0;
  const answers = document.querySelectorAll("input");
  answers.forEach((answer) => {
    if (answer.checked === true && answer.defaultValue === "A") {
      perecntOfNinja += 25;
    }
  });
  scrollTo(0, 0);

  let i = 0;
  const timer = setInterval(() => {
    console.log("hellow");
    i++;
    percentPos.textContent = `${i} % of ninja`;

    if (i === perecntOfNinja) {
      clearInterval(timer);
    }
  }, 10);
});
