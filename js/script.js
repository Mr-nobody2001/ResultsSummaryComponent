let totalScore = document.querySelector("#Circle p:first-of-type");

let summaryData = document.querySelectorAll("#SecondSection>div>p");

fetch("assets/data.json")
  .then((doc) => doc.json())
  .then((data) => {
    let sum = 0;

    for (const jsonData of data) {
      if (jsonData.score > 100) throw new Error("Invalid value");
    }

    for (const jsonData of data) {
      switch (jsonData.category) {
        case "Reaction":
          summaryData[0].innerHTML =
            (jsonData.score < 10 ? "0" + jsonData.score : jsonData.score) +
            " <span>/ 100</span>";
          break;
        case "Memory":
          summaryData[1].innerHTML =
            (jsonData.score < 10 ? "0" + jsonData.score : jsonData.score) +
            " <span>/ 100</span>";
          break;
        case "Verbal":
          summaryData[2].innerHTML =
            (jsonData.score < 10 ? "0" + jsonData.score : jsonData.score) +
            " <span>/ 100</span>";
          break;
        case "Visual":
          summaryData[3].innerHTML =
            (jsonData.score < 10 ? "0" + jsonData.score : jsonData.score) +
            " <span>/ 100</span>";
          break;
      }

      sum += jsonData.score;
    }

    totalScore.textContent = Number.parseInt(sum / data.length);
  })
  .catch((error) => console.error("Erro:", error));
