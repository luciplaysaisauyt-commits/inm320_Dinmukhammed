const sidebar  = document.getElementById('sidebar');
const backdrop = document.getElementById('sidebarBackdrop');
const menuBtn  = document.getElementById('hamburgerBtn');

menuBtn.addEventListener('click', function() {
  sidebar.classList.add('show');
  backdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
});

backdrop.addEventListener('click', function() {
  sidebar.classList.remove('show');
  backdrop.classList.remove('show');
  document.body.style.overflow = '';
});