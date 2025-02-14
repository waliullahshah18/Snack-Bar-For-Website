let toastbox = document.getElementById('toastbox')
let SuccessMsg = "<i class='bx bxs-check-circle' style='color:	#008000'></i> Successfully submitted"
let ErrorMsg = "<i class='bx bxs-x-circle' style='color:rgb(255, 0, 0)'></i> Pleace fix the error!"
let InvalidMsg = "<i class='bx bxs-error-circle' style='color: #FFA500'></i> Invalid Input, Ckeck again"


function showtoast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast)

    if (msg == ErrorMsg) {
        toast.classList.add('error');  
    }
    if (msg == InvalidMsg) {
        toast.classList.add('inald');  
    }




    setTimeout(() => {
        toast.remove();
    }, 5000);

}
