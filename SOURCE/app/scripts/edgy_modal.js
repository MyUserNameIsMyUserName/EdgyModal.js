function trowModal(data) {
  // create a new div element
  var newModal = document.createElement("div");
  newModal.classList.add("ao_modal");
  // create a new div element
  var newModalInner = document.createElement("div");
  newModalInner.classList.add("ao_modal_inner");
  // and give it some content
  var newModalTitle = document.createElement("h1");
  var newModalTitleText = document.createTextNode(data.title);
  newModalTitle.appendChild(newModalTitleText);
  // and give it some content
  var newModalText = document.createElement("p");
  var newModalTextText = document.createTextNode(data.text);
  newModalText.appendChild(newModalTextText);

  // and give it some content
  var newModalButtons = document.createElement("div");
  newModalButtons.classList.add("ao_modal_buttons");
  var newModalButton = document.createElement("button");
  var newModalButtonText = document.createTextNode(data.confirmButtonText);
  newModalButton.appendChild(newModalButtonText);
  newModalButton.classList.add("blue_btn");
  newModalButton.innerHTML = data.confirmButtonHTML;
  var newModalButtonCancel = document.createElement("button");
  var newModalButtonTextCancel = document.createTextNode(data.cancelButtonText);
  newModalButtonCancel.appendChild(newModalButtonTextCancel);
  newModalButtonCancel.innerHTML = data.cancelButtonHTML;

  // add the text node to the newly created div
  newModalInner.appendChild(newModalTitle);
  newModalInner.appendChild(newModalText);

  newModalInner.appendChild(newModalButtons);
  newModalButtons.appendChild(newModalButton);
  newModalButtons.appendChild(newModalButtonCancel);

  newModal.appendChild(newModalInner);

  document.body.appendChild(newModal);
}

//TEST MODAL
function testModalFunc() {
  var testModal = {
    title: "Error [alpha_version]!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
    confirmButtonHTML: `<button class="cybr-btn">
                            Confirm<span aria-hidden>_</span>
                            <span aria-hidden class="cybr-btn__glitch">
                            Confirm_
                            </span>
                            <span aria-hidden class="cybr-btn__tag">
                            R25
                            </span>
                        </button>`,
    cancelButtonText: "Nope",
    cancelButtonHTML: `<button class="cybr-btn">
                            Cancel<span aria-hidden>_X</span>
                            <span aria-hidden class="cybr-btn__glitch">Cancel_X</span>
                            <span aria-hidden class="cybr-btn__tag">R25</span>
                        </button>`,
    showCancelButton: true,
    showCloseButton: true,
  };

  trowModal(testModal);
}
