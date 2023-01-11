const input = document.getElementById("name-input");
const generateButton = document.getElementById("generate-button");
const tagContainer = document.getElementById("tag-container");
const clearAllButton = document.getElementById("clear-all-button");

const colors = ["#f44336", "#9c27b0", "#3f51b5", "#4caf50", "#ffeb3b"];

function createTag(name) {
  const tag = document.createElement("div");
  tag.classList.add("name-tag");
  tag.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  tag.innerHTML = `
  <h3 class="title">HELLO</h3>
  <p class="tag-p">my name is</p>
  <h2 class="name">${name}</h2>
  <i class="fas fa-times delete-icon"></i>
</div>
  `;

  const deleteIcon = tag.querySelector(".delete-icon");
  deleteIcon.addEventListener("click", () => deleteTag(tag));

  return tag;
}

function generateName() {
  const name = input.value;
  const tag = createTag(name);
  tagContainer.appendChild(tag);
  input.value = "";
}

function deleteTag(tag) {
  tag.remove();
}

function clearAll() {
  while (tagContainer.firstChild) {
    tagContainer.removeChild(tagContainer.firstChild);
  }
}

generateButton.addEventListener("click", generateName);
clearAllButton.addEventListener("click", clearAll);
