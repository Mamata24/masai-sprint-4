// (function () {
//     document.querySelector('.book').style.display = 'none';
//     document.querySelector('.show').style.display = 'none';
// })();
var detailsbtn = document.getElementById("detailsbtn");
var bookingbtn = document.getElementById("bookingbtn");

detailsbtn.addEventListener('click', toggle)

bookingbtn.addEventListener('click', toggle1)

function toggle() {
    console.log("toggle1")
    var st = document.querySelector('.details')
    var st2 = document.querySelector('.book')
    st.classList.toggle("needs-validation")
    st2.classList.toggle("needs-validation")

    console.log(st)
    // if (st.classList.contains('needs-validation')) {
    //     document.querySelector('.book').classList.remove('needs-validation');

    // }
    // else {
    //     document.querySelector('.show').classList.remove('needs-validation');

    // }
}
function toggle1() {
    console.log("toggle2")
    var st = document.querySelector('.book')
    var st1 = document.querySelector('.details')
    st.classList.toggle("needs-validation")
    st1.classList.toggle("needs-validation")
    console.log(st)
}
var venue = document.getElementById("venue").addEventListener('change', function () {

})