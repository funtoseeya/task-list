let guestList = ['Carl', "Stacey", "Robert"];
let guestListClean = guestList.slice(0, 2).join(", ");
let whoHasBeenHere = document.getElementById("who-has-been-here");
let invite = document.getElementById("invite");

function loadWhoHasBeenHere(){
whoHasBeenHere.textContent = `Hey there, did you know that ${guestList.length} people have visited this website?`;
invite.textContent = `People like ${guestListClean}, and others have left their mark here. You should too!`
}
loadWhoHasBeenHere();
const list = document.getElementById("guest-list");
function populateGuestList() {
    for (let i = 0; i < guestList.length; i++) {
        const guest = guestList[i];
        const li = document.createElement("li");
        li.textContent = guest;
        list.appendChild(li);
    }
}
populateGuestList();

const button = document.getElementById("submit");
button.addEventListener("click", addToList);

function addToList(event) {
    event.preventDefault();

    const guestName = document.getElementById("name").value;

    function refreshGuestList(){
        list.innerHTML="";
        populateGuestList();
    }

    if (guestName != "") {
        alert(`Thanks for dropping by, ${guestName}!`)
        guestList.push(guestName);
        document.getElementById("name").value = "";
        button.disabled=true;
        refreshGuestList();
        loadWhoHasBeenHere();
        invite.textContent = `People like ${guestListClean}, and others have left their mark here. And now you have too!`


    }
    else { alert("please enter your name!") };
}