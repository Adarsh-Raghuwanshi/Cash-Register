const inputAmount = document.querySelector("#bill");
const btnNext = document.querySelector("#next");
const aboutApp = document.querySelector("p");
const descImg = document.querySelector("#desc");
const announcementImg = document.querySelector("#announcement");
const givenCash = document.querySelector("#givenCash");
const btnCheck = document.querySelector("#check");
const output = document.querySelector("#output");
const tableHeading = document.querySelector("#table-heading");
const table = document.querySelector("#table");
const tableColumn = document.querySelectorAll(".display");

let notes = [2000, 500, 100, 20, 10, 5, 1];

btnNext.addEventListener("click", () => {
    if(inputAmount.value == "" || inputAmount.value == 0){
        alert("Enter your bill amount!");
        return;
    }

    descImg.style.display = "none";
    announcementImg.style.display = "none";
    aboutApp.style.display = "none";
    btnNext.style.display = "none";
    givenCash.style.display = "block";
    btnCheck.style.display = "block";
})

btnCheck.addEventListener("click", () => {
    output.style.display = "block";
    tableHeading.style.display = "none";
    table.style.display = "none";

    let billAmount = inputAmount.value;
    let givenAmount = givenCash.value;
    let amountToReturn = givenAmount - billAmount;
    if(amountToReturn < 0){
        output.innerHTML = "Insufficient cash given!"
        return;
    }else if(amountToReturn == 0){
        output.innerHTML = "Nothing to return! All accounts are clear."
        return;
    }

    output.innerHTML = "Amount to be returned is ₹" + amountToReturn;
    tableHeading.style.display = "block";
    table.style.display = "flex";

    for(let i = 0; i < notes.length; i++){
        let noteCount = Math.floor(amountToReturn / notes[i]);
        tableColumn[i].innerHTML = noteCount;
        amountToReturn = amountToReturn % notes[i];
    }
})