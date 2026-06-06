let count = localStorage.getItem("reviewCount");

if (!count) {
  count = 0;
}

count = Number(count) + 1;

localStorage.setItem("reviewCount", count);

document.getElementById("count").textContent =
  `You have submitted ${count} review(s).`;