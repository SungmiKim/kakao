function search() {
  var searchContent = document.getElementById("friends__search-content");
  var friends = document.getElementById("friends");

  friends.style.opacity = 0.5;
  searchContent.style.opacity = 1;
}
function cancel() {
  var searchContent = document.getElementById("friends__search-content");
  var friends = document.getElementById("friends");

  friends.style.opacity = 1;
  searchContent.style.opacity = 0;
}
function ready() {
  alert("준비중 입니다 ^-^");
}

function titleChangeSecond() {
  var titleFirst = document.getElementById("title-first");
  var titleSecond = document.getElementById("title-second");
  var firstContent = document.getElementById("find__first-content");
  var secondContent = document.getElementById("find__second-content");

  titleFirst.style.fontWeight = 500;
  titleFirst.style.borderBottom = "none";
  titleSecond.style.fontWeight = 600;
  titleFirst.textContent = "코로나";
  titleSecond.textContent = "#뉴스";
  titleSecond.style.borderBottom = "2px solid black";
  firstContent.style.visibility = "hidden";
  secondContent.style.visibility = "visible";
}

function titleChangeFirst() {
  var titleFirst = document.getElementById("title-first");
  var titleSecond = document.getElementById("title-second");
  var firstContent = document.getElementById("find__first-content");
  var secondContent = document.getElementById("find__second-content");

  titleSecond.style.fontWeight = 500;
  titleSecond.style.borderBottom = "none";
  titleSecond.textContent = "뉴스";
  titleFirst.style.fontWeight = 600;
  titleFirst.textContent = "#코로나";
  titleFirst.style.borderBottom = "2px solid black";
  firstContent.style.visibility = "visible";
  secondContent.style.visibility = "hidden";
}
