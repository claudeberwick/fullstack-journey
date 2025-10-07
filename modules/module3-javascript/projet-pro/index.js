function demarrerQuiz() {
  let score = 0;

  // Question 1
  let q1 = prompt("1️⃣ Quel langage permet de structurer une page web ? (HTML / CSS / JS)");
  if (q1.toLowerCase() === "html") {
    score++;
  }

  // Question 2
  let q2 = prompt("2️⃣ Quel langage sert à styliser une page web ?");
  if (q2.toLowerCase() === "css") {
    score++;
  }

  // Question 3
  let q3 = prompt("3️⃣ Quel langage permet de rendre une page web interactive ?");
  if (q3.toLowerCase() === "js" || q3.toLowerCase() === "javascript") {
    score++;
  }

  // Resultat final
  alert("Tu as obtenu " + score + "/3");

  if (score === 3) {
    alert("Excellent ! Tu es un futur pro 💪");
  } else if (score === 2) {
    alert("Bien joué 👏");
  } else {
    alert("Tu peux mieux faire ! 😢");
  }
}