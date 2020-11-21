let add_button = document.getElementById("add_button");
let add_notes_editbox = document.getElementById("add_notes_editbox");
let notes_array = [];

add_button.addEventListener("click", add_notes);

function add_notes() {
    let dates = new Date().getDate();
    let month = new Date().toLocaleString('default', { month: 'short' });
    console.log(dates+'month'+month);
}





