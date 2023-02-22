const productList = document.getElementById("product-list");
const progressBar = document.getElementById("progress");
const addProductButton = document.getElementById("add-product");
const productNameInput = document.getElementById("product-name");

addProductButton.addEventListener("click", function() {
  const productName = productNameInput.value;
  if (productName) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox">
      <span>${productName}</span>
    `;
    productList.appendChild(li);
    productNameInput.value = "";
    updateProgress();
  }
});

productList.addEventListener("change", updateProgress);

function updateProgress() {
  const checkedProducts = productList.querySelectorAll("input:checked");
  progressBar} 