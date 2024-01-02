function validateLogin() {
    // Mendapatkan nilai input dari form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Username dan password yang sudah ditentukan
    var validUsername = "ahmadfauziramadhan";
    var validPassword = "ahmdfauzi03";

    // Memeriksa apakah input sesuai dengan yang ditentukan
    if (username === validUsername && password === validPassword) {
        alert("Login Sukses");
        // Redirect ke halaman baru atau tindakan lainnya
        window.location.href = "loginsukses.html";
    } else {
        alert("Login Gagal");
    }
}