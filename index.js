let isDDOpen = false;
let isDDOptionSelected = false;

const displayBtn = document.querySelector("#ddButtonMain");
displayBtn.innerText = "<";

const ddField = document.querySelector("#ddField");
ddField.innerText = "Select an Option";

const listItems = ["Account", "Cart", "Log In"];

const displayOrHideListItems = (isDDOpen) => {
  if (isDDOpen === true) {
    const ddItemContainer = document.createElement("div");
    ddItemContainer.id = "ddItemContainer";
    ddItemContainer.classList.add("ddItemContainer");
    ddField.append(ddItemContainer);
    listItems.forEach((element) => {
      const ddItem = document.createElement("div");
      ddItem.classList.add("ddItem");
      ddItem.innerText = element;
      ddItemContainer.append(ddItem);
      ddItem.addEventListener("click", () => {
        alert(`Navigating to ${element}`);
      })
    });
  } else {
    const existingContainer = document.querySelector("#ddItemContainer");
    if (existingContainer) {
      existingContainer.remove();
    }
  }
};

displayBtn.addEventListener("click", () => {
  if (displayBtn.innerText === "<") {
    displayBtn.innerText = "v";
    isDDOpen = true;
  } else if (displayBtn.innerText === "v") {
    displayBtn.innerText = "<";
    isDDOpen = false;
  }
  displayOrHideListItems(isDDOpen);
});
