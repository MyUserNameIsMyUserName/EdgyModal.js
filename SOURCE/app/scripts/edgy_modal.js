function trowModal(data) {

  // CREATE MODAL CONTAINER/ROOT DIV
  var newModal = document.createElement("div");
  newModal.classList.add("ao_modal");
  
  // MODAL CONTENT CONATINER 
  // Info:
  // This is where your edits get added to. Space where the content
  // is being stored and presented.
  var newModalInner = document.createElement("div");
  newModalInner.classList.add("ao_modal_inner");
  
  // MODAL TITLE...>>>
  var newModalTitle = document.createElement("h1");
  var newModalTitleText = document.createTextNode(data.title);
  newModalTitle.appendChild(newModalTitleText);
  
  // MODAL SUBTITLE...>>>
  var newModalText = document.createElement("p");
  var newModalTextText = document.createTextNode(data.text);
  newModalText.appendChild(newModalTextText);

  // MODAL BUTTONS CONTINAER DIV --->
  // Info: 
  // Gets createad and attached with classname so we can add  
  // buttons into bottom section of the modal.
  var newModalButtons = document.createElement("div");
  newModalButtons.classList.add("ao_modal_buttons");
  // !END! MODAL BUTTONS CONTAINER DIV !!!

  // CONFIRM BUTTON ===>>>
  var newModalButton = document.createElement("button");

  if (data.confirmButtonText){
    newModalButton.appendChild(document.createTextNode(data.confirmButtonText));
  }
  
  if (data.confirmButtonHTML){
    newModalButton.innerHTML = data.confirmButtonHTML;
  }
  // !END! CONFIRM BUTTON !!!


  // CANCEL BUTTON ===>>>
  var newModalButtonCancel = document.createElement("button");

  if (data.cancelButtonText) {
    newModalButtonCancel.appendChild(document.createTextNode(data.cancelButtonText));
  }

  if (data.cancelButtonHTML){
    newModalButtonCancel.innerHTML = data.cancelButtonHTML;
  }
  // !END! CANCEL BUTTON !!!

  // CLOSE BUTTON --->>>
  if (data.showCloseButton === true){
    var newModalButtonCLOSE = document.createElement("button");
    newModalButtonCLOSE.classList.add('close_btn')
    newModalButtonCLOSE.appendChild(document.createTextNode("X"));
  }

  // Appending buttons to their container.
  newModalButtons.appendChild(newModalButton);
  newModalButtons.appendChild(newModalButtonCancel);

  // Here we fill in CONTENT/INNER div of modal.
  newModalInner.appendChild(newModalTitle);
  newModalInner.appendChild(newModalText);
  newModalInner.appendChild(newModalButtons);

  if (typeof(newModalButtonCLOSE) !== undefined){
    newModalInner.appendChild(newModalButtonCLOSE);
  }

  // Appending INNER [CONTENT CONTAINER] to MODAL ROOT ELEM.
  newModal.appendChild(newModalInner);

  // Appending the whole MODAL ROOT ELEM. to Document body.
  // Info:
  // Being last thing in document makes it easier to show as an overlay
  // covering everything before it.
  document.body.appendChild(newModal);
}

//TEST MODAL
function testModalFunc() {
  var testModalHTMLButtons = {
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

  trowModal(testModalHTMLButtons);
}
