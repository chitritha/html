    const names = [];
function check(){

    const newname = document.getElementById("newname").value.trim().toLowerCase();
    if (names.includes(newname)){
        window.alert("This name is already in the list");
    }
    else {
        addNameToList(newname);
        names.push(newname)
    }
}
function addNameToList(newName){
    const ul = document.getElementById("namelist");
    const li = document.createElement('li');
    li.innerHTML = newName
    ul.appendChild(li);
}