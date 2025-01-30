var input = document.querySelector(".form-input");
var button = document.querySelector(".form-button");
var articles = document.querySelectorAll(".articles-item");

function rechercher() {
  var text = input.value.toLowerCase();

  articles.forEach(function (article) {
    if (article.textContent.toLowerCase().includes(text)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

button.addEventListener("click", rechercher);
