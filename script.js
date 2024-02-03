let count = 0;

function increment() {
  count++;
  document.getElementById("result").innerHTML = "Today's count is " + count;
}

let page_style = localStorage.getItem("page_stylesheet_name") || "home.css";

function load_style() {
  document.getElementById("style_link").setAttribute("href", page_style);
}

document.getElementById("page_style").addEventListener("click", function () {
  page_style = page_style === "home.css" ? "home2.css" : "home.css";

  localStorage.setItem("page_stylesheet_name", page_style);

  load_style();
});

load_style();
