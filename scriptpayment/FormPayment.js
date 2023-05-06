const btnSubmit = document.querySelector('#Payment');

const addDataUser = async (data) => {
  try {
      const response = await fetch("https://64549e1cf803f345762cc566.mockapi.io/Users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });
  
      const result = await response.json();
      window.location.href = "DetailPayment.html";
      console.log('a')
  } catch (error) {
      warning.innerText = `Error: ${error}`
  }
}

btnSubmit.addEventListener('click', (event) => {
event.preventDefault()
  const gender = document.querySelectorAll('input[name="gender"]');
  let genderUser

  gender.forEach((gender) => {
    if (gender.checked) {
      genderUser = gender.value;
    }
  });

  const dataUser = {
    Name : document.getElementById('full-name').value,
    JenisKelamin : genderUser,
    Nomor : document.getElementById('phone').value,
    Email : document.getElementById('email').value,
    AsalInstansi : document.getElementById('asal-sekolah').value,
    Alamat : document.getElementById('address').value,
    Kota : document.getElementById('city').value,
    Alasan : document.getElementById('state').value
  }

  addDataUser(dataUser)

});