const criteria = [
  "clarity",
  "naturalness",
  "noise",
  "distortion",
  "pronunciation",
  "overall"
];

criteria.forEach((id) => {
  const slider = document.getElementById(id);
  const value = document.getElementById(`${id}Value`);

  slider.addEventListener("input", () => {
    value.textContent = slider.value;
  });
});

document.getElementById("calculate").addEventListener("click", () => {
  const scores = criteria.map((id) =>
    Number(document.getElementById(id).value)
  );

  const average =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;

  const rounded = average.toFixed(2);

  let interpretation = "Needs review";

  if (average >= 4.5) {
    interpretation = "Excellent";
  } else if (average >= 3.5) {
    interpretation = "Good";
  } else if (average >= 2.5) {
    interpretation = "Acceptable";
  } else if (average >= 1.5) {
    interpretation = "Poor";
  }

  document.getElementById("result").textContent =
    `Average score: ${rounded}/5 — ${interpretation}`;
});
