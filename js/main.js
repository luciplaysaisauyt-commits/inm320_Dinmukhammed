const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar      = document.getElementById('sidebar');
const backdrop     = document.getElementById('sidebarBackdrop');

function openSidebar() {
  sidebar.classList.add('show');
  backdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('show');
  backdrop.classList.remove('show');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', openSidebar);
backdrop.addEventListener('click', closeSidebar);

const saveTaskBtn  = document.getElementById('saveTaskBtn');
const taskForm     = document.getElementById('taskForm');
const taskModal    = document.getElementById('taskModal');
const successToast = document.getElementById('successToast');

saveTaskBtn.addEventListener('click', function () {
  taskForm.classList.add('was-validated');
  if (!taskForm.checkValidity()) return;

  var modal = bootstrap.Modal.getOrCreateInstance(taskModal);
  modal.hide();
  taskForm.reset();
  taskForm.classList.remove('was-validated');
  new bootstrap.Toast(successToast, { delay: 3000 }).show();
});