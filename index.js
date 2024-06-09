let isDDOpen = false;
let isDDOptionSelected = false;

const displayBtn = document.querySelector("#ddButtonMain");
const ddBtnContainer = document.querySelector("#ddBtnContainer")
displayBtn.innerText = "<";

const ddFieldContainer = document.querySelector("#ddFieldContainer");

const listItems = ["ACCOUNT", "CART", "LOG IN"];

const displayOrHideListItems = (isDDOpen) => {
  if (isDDOpen) {
    displayBtn.innerText = "v";
    ddBtnContainer.classList.add("ddBtnContainerActive");
    ddBtnContainer.classList.remove("ddBtnContainerInactive");
    const ddItemContainer = document.createElement("div");
    ddItemContainer.id = "ddItemContainer";
    ddItemContainer.classList.add("ddItemContainer");
    ddFieldContainer.append(ddItemContainer);
    listItems.forEach((element) => {
      const ddItem = document.createElement("div");
      ddItem.classList.add("ddItem");
      ddItem.innerText = element;
      ddItemContainer.append(ddItem);
      ddItem.addEventListener("click", () => {
        alert(`Navigating to ${element}`);
        isDDOpen = false;
        displayOrHideListItems(isDDOpen);
      })
    });
  } else {
    const existingContainer = document.querySelector("#ddItemContainer");
    ddBtnContainer.classList.remove("ddBtnContainerActive");
    ddBtnContainer.classList.add("ddBtnContainerInactive");
    displayBtn.innerText = "<";
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
    isDDOpen = false;
  }
  displayOrHideListItems(isDDOpen);
});

const onClickOutside = (element, callback) => {
    document.addEventListener('click', e => {
      if (!element.contains(e.target)) callback();
    });
  };
  
  onClickOutside(ddContainer, () => {
    isDDOpen = false;
    displayOrHideListItems(isDDOpen);
  });

