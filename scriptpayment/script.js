const couponInput = document.querySelector('#Coupon-Discount');
const applyButton = document.querySelector('#Submit-Discount');
const priceLabel = document.querySelector('#Price'); // memilih label harga dengan id "Price"
let harga = 550000

applyButton.addEventListener('click', () => {
  const couponCode = couponInput.value;
  if (couponCode === '') {
    alert('Please enter a coupon code.');
  } else if (couponCode === 'BE-2') {
    alert(`Coupon code ${couponCode} has been applied. You got discount.`);
    harga = 200000; // menghitung harga setelah didiskon
    priceLabel.textContent = `Rp. ${harga.toLocaleString()}`; // memperbarui nilai label harga dengan harga setelah didiskon
  } else {
    alert(`Sorry, coupon code ${couponCode} is not valid.`);
  }
});


// mendapatkan elemen button Checkout
const paymentButton = document.getElementById('Payment');

// menambahkan event listener ketika tombol Checkout ditekan
paymentButton.addEventListener('click', function() {
  // mendapatkan nilai payment method yang dipilih
  const paymentMethod = document.getElementById('payment-method').value;

  // jika payment method adalah Dana atau Gopay
  if (paymentMethod === 'Dana' || paymentMethod === 'Gopay') {
    // mendapatkan nilai nomor akun e-wallet
    const ewalletAccountNumber = document.getElementById('ewallet-account-number').value;
    // jika nomor akun e-wallet tidak kosong
    if (ewalletAccountNumber.trim() !== '') {
      // melakukan pembayaran menggunakan payment method yang dipilih dan nomor akun e-wallet
      alert(`Pembayaran berhasil menggunakan ${paymentMethod} dengan nomor akun ${ewalletAccountNumber}`);
      // mengosongkan nomor akun e-wallet
      document.getElementById('ewallet-account-number').value = '';
      window.location.href = "PaymentNotifOffline.html?bayar=" + harga;
    } else {
      alert('Nomor akun e-wallet harus diisi');
    }
  } 
});
