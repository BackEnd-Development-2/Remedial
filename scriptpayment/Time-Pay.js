// Set waktu akhir menjadi 1 menit dari sekarang
var countDownDate = new Date();
countDownDate.setMinutes(countDownDate.getMinutes() + 1);

// Update waktu setiap 1 detik
var x = setInterval(function() {

  // Ambil waktu sekarang
  var now = new Date().getTime();

  // Hitung selisih waktu antara waktu akhir dan waktu sekarang
  var distance = countDownDate - now;

  // Hitung waktu dalam jam, menit, dan detik
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan waktu dalam format "menit:detik"
  document.getElementById("Time-Pay").innerHTML = "Selesaikan Pembayaran dalam " + minutes + ":" + seconds;

  // Jika waktu sudah berakhir, tampilkan pesan dan pindahkan ke halaman "checkout.html"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Time-Pay").innerHTML = "Waktu telah berakhir";
    window.location.href = "SuksesPayment.html";
}

}, 1000);
