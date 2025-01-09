

let k;
function backspace(){
    k=document.querySelector('#display').value;
    k=k.slice(0,-1);
    document.querySelector('#display').value=k;
}

