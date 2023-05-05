const couponInput = document.querySelector('#Coupon-Discount');
const applyButton = document.querySelector('#Submit-Discount');
const priceLabel = document.querySelector('#Price'); // memilih label harga dengan id "Price"

applyButton.addEventListener('click', () => {
  const couponCode = couponInput.value;
  if (couponCode === '') {
    alert('Please enter a coupon code.');
  } else if (couponCode === 'BE-2') {
    alert(`Coupon code ${couponCode} has been applied. You got discount.`);
    const discountedPrice = 200000; // menghitung harga setelah didiskon
    priceLabel.textContent = `Rp. ${discountedPrice.toLocaleString()}`; // memperbarui nilai label harga dengan harga setelah didiskon
  } else {
    alert(`Sorry, coupon code ${couponCode} is not valid.`);
  }
});
