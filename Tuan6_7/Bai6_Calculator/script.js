var $ = document.querySelector.bind(document);


function val(result) {
    disp.value = disp.value + result
}

function calc() {
    if (disp.value == "") {
        alert("Please enter numbers");
        $('.disp').focus();
    } else {
        disp.value = eval(disp.value)
    }
}



$('#equ').addEventListener('dblclick', () => {
    disp.value = "";
});
