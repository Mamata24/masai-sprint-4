// (function () {
//     document.querySelector('.book').style.display = 'none';
//     document.querySelector('.show').style.display = 'none';
// })();
var detailsbtn = document.getElementById("detailsbtn");
var bookingbtn = document.getElementById("bookingbtn");

detailsbtn.addEventListener('click', toggle1)

bookingbtn.addEventListener('click', toggle2)

function toggle1() {
    console.log("toggle1")
    var st = document.querySelector('.book')
    if (st.classList.contains('needs-validation')) {
        document.querySelector('.details').classList.remove('needs-validation');
    }
    else {
        st.classList.add('needs-validation')
        document.querySelector('.details').classList.remove('needs-validation');

    }
}
function toggle2() {
    console.log("toggle2")
    var st = document.querySelector('.details')
    if (st.classList.contains('needs-validation')) {
        document.querySelector('.book').classList.remove('needs-validation');
    }
    else {
        st.classList.add('needs-validation')
        document.querySelector('.book').classList.remove('needs-validation');

    }






    // var st = document.querySelector('.book')
    // var st1 = document.querySelector('.details')
    // st.classList.toggle("needs-validation")
    // st1.classList.toggle("needs-validation")
    // console.log(st)
}
// var venue = document.getElementById("venue").addEventListener('change', function () {

// })