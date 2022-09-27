const selections = doucment.querySelectorall(".selection");

let pScore = 0;
let cScore = 0;

selections.forEach((selection) => {
    selection.addEventListner("click", () => {
        const pInput = this.value;
        console.log(pInput);
    });
});