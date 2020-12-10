const add_button = document.getElementById("add_button");
const add_notes_editbox = document.getElementById("add_notes_editbox");
const to_do_list_items = document.getElementById("to_do_list");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".error-modal");
const logOut = document.getElementById("logOut");
backdrop.addEventListener("click", closeModal);
logOut.addEventListener("click",logOutUser);
let to_do_list = document.getElementById("to_do_list");

let notes_array = [];


const uname = localStorage.getItem('user');
const localStorageArray = JSON.parse(localStorage.getItem(uname));
if (Array.isArray(localStorageArray)) {
localStorageArray.forEach((value, index, array1) => {
    
    to_do_list.innerHTML = to_do_list.innerHTML+'<div class="to_do_list_items" id="'+value["notes_id"]+'"><div class="avatar"><div class="avatar_text">'+value["date"]+'</div> </div> <div class="note">'+value["note"]+'</div></div>'; 

    to_do_list.addEventListener('click', (event) => {

        // event.target.closest('.avatar').classList.toggle('red');
       }
       );

})
};

add_button.addEventListener("click", add_notes);

function add_notes() {
    let editText = add_notes_editbox.value;
if (editText === '' || editText ===' '){
    modal.classList.add("open");
    backdrop.classList.add("open");
    modal.innerHTML = '<p>Please enter Note Text</p>';
}
else{
    const dates = new Date().getDate();
    const month = new Date().toLocaleString('default', { month: 'short' });
    const datestring = dates +' '+ month;
    
    to_do_list = document.getElementById("to_do_list");
    to_do_list.innerHTML = "";
    notes_array.push({
        "user": "ayush",
        "notes_id"   : 1,
        "date" : datestring,
        "note" : editText
     })

    notes_array.forEach((value, index, array1) => {
       
        to_do_list.innerHTML = to_do_list.innerHTML+'<div class="to_do_list_items id="'+value["notes_id"]+'"><div class="avatar"><div class="avatar_text">'+value["date"]+'</div> </div> <div class="note">'+value["note"]+'</div></div>'; 
    
    });
    add_notes_editbox.value = '';
    
    localStorage.setItem(uname,JSON.stringify(notes_array));
    
    // to_do_list.addEventListener('click', (event) => {

    //  event.target.closest('.to_do_list_items').classList.toggle('red');
    // }
    // );
    let to_list_items2 = document.querySelectorAll('.to_do_list_items');
    to_list_items2.forEach(element => {
        element.addEventListener('click', event => {
            event.target.classList.toggle('red');
        })
    });



}
}

function closeModal() {
    modal.classList.remove("open");
    backdrop.classList.remove("open");

}

function logOutUser() {
    localStorage.setItem('user','');
    window.location.replace("file:///C:/Javascript/serp_training_JS_assignment/index.html");
}

