let count = 0;

function increment() {
  count++;
  document.getElementById("result").innerHTML = "Today's count is " + count;
}

function light_mode() {
  localStorage.setItem("page_stylesheet_name", "light.css");
  load_style();
}

function dark_mode() {
  localStorage.setItem("page_stylesheet_name", "dark.css");
  load_style();
}

function load_style() {
  page_style = localStorage.getItem("page_stylesheet_name");
  if (page_style == null) {
    page_style = "light.css";
  }
  document.getElementById("page_style").setAttribute("href", page_style);
}

load_style();
