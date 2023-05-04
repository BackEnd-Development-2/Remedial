const button = document.querySelector('.btn');
      button.addEventListener('click', function() {
        if (!isLoggedIn()) {
          alert('Anda harus login terlebih dahulu');
        } else {
          window.location.href = 'link-kelas'; // ganti dengan link halaman kelas
        }
      });

      function isLoggedIn() {
        // ganti dengan kode untuk memeriksa apakah pengguna sudah login atau belum
        // contoh: return true jika pengguna sudah login, false jika belum
        return false;
        }
