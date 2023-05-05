//Coupon
const couponInput = document.querySelector('#Coupon-Discount'); // memilih input coupon dengan id "Coupon-Discount"
const applyButton = document.querySelector('#Submit-Discount'); // memilih tombol "Apply" dengan id "Submit-Discount"

applyButton.addEventListener('click', () => { // menambahkan event listener untuk saat tombol "Apply" diklik
  const couponCode = couponInput.value; // mendapatkan nilai coupon dari input
  if (couponCode === '') { // jika input kosong
    alert('Please enter a coupon code.'); // memberikan notifikasi untuk memasukkan kode kupon
  } else if (couponCode === 'BE-2') { // jika kode kupon yang dimasukkan adalah "BE-2"
    alert(`Coupon code ${couponCode} has been applied. You got 10% discount.`); // memberikan notifikasi bahwa kupon berhasil diisi dan memberikan diskon 10%
  } else { // jika kode kupon yang dimasukkan bukan "BE-2"
    alert(`Sorry, coupon code ${couponCode} is not valid.`); // memberikan notifikasi bahwa kode kupon tidak valid
  }
});
