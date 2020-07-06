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
