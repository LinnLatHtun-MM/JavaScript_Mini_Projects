let toastBox = document.getElementById('toastBox');
let successMessage = '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMessage = '<i class="fa-solid fa-circle-xmark"></i>Something went wrong!';
let invalidMessage = '<i class="fa-solid fa-exclamation"></i>Invalid Input, check again!';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes("Something")) {
        toast.classList.add('error');
    } else if (msg.includes("Invalid")) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000)
}






