const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var datLich = $('#datlich');
var modal = $('.modal1');
var close = $('.close');
var close = $('.close');
var btn_close = $('#btn-close');
var btn_addVaoBang = $('#btn-datlich');
var modal_container = $('.modal-container');
var tbody = $('tbody');
var data = [];
var stt = 0;

function render() {
    var tables = '';
    for(var key in data) {
        tables += `
        <tr>
            <td>${stt++}</td>
            <td>${data[key].Ma}</td>
            <td>${data[key].MatKhau}</td>
            <td>${data[key].NgayKham}</td>
            <td>${data[key].PhuThu}</td>
            <td>${data[key].ChuyenKhoa}</td>
        </tr>
        `;
    }
    tables.innerHTML = tables;
}

datLich.addEventListener('click', () => {
    modal.classList.add('show')
});

close.addEventListener('click', () => {
    modal.classList.remove('show')
});

btn_close.addEventListener('click', () => {
    modal.classList.remove('show')
});

modal.addEventListener('click', (e) => {
   if (!modal_container.contains(e.target)) {
       btn_close.click();
   }
});

btn_addVaoBang.addEventListener('click', (e) => {
   var txtMa = $('#txt-mabenhnhan').value;
   var txtMa = $('#txt-mabenhnhan').value;
   var txtMa = $('#txt-mabenhnhan').value;
   var txtMa = $('#txt-mabenhnhan').value;
   var txtMa = $('#txt-mabenhnhan').value;
 });