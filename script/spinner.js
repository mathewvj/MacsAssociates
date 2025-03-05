// Spinner load
const loader = document.getElementById("loader");

const slowNetworkTimeout = setTimeout(() => {
  loader.style.display = "flex";
}, 1000); // Show spinner if page loads slowly

// Hide loader once the page fully loads
window.addEventListener("load", function () {
  clearTimeout(slowNetworkTimeout);
  loader.style.display = "none";
});
