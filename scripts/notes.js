let add_button = document.getElementById("add_button");
let add_notes_editbox = document.getElementById("add_notes_editbox");
let to_do_list_items = document.getElementById("to_do_list");
let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".error-modal");
backdrop.addEventListener("click", closeModal);
let notes_array = [];

add_button.addEventListener("click", add_notes);

function add_notes() {
    let editText = add_notes_editbox.value;
if (editText === '' || editText ===' '){
    modal.classList.add("open");
    backdrop.classList.add("open");
    modal.innerHTML = '<p>Please enter Note Text</p>';
}
else{
    let dates = new Date().getDate();
    let month = new Date().toLocaleString('default', { month: 'short' });
    console.log(dates+'month'+month);
    

    document.getElementById("to_do_list").innerHTML = document.getElementById("to_do_list").innerHTML+'<div class="to_do_list_items"><div class="avatar"><div class="avatar_text">21 Nov</div> </div> <div class="note">'+editText+'</div></div>'; 
    add_notes_editbox.value = '';
}
}

function closeModal() {
    modal.classList.remove("open");
    backdrop.classList.remove("open");

}



