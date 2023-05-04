const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  // Set cookies
  document.cookie = "login_required=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
});