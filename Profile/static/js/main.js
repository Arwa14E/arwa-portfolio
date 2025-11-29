// main.js — small interactive bits

document.addEventListener('DOMContentLoaded', function () {
  // set current year in footer
  const yr = new Date().getFullYear();
  document.getElementById('year').textContent = yr;

  // email button opens mailto (already set), but we ensure accessibility focus
  const emailBtn = document.getElementById('email-btn');
  if (emailBtn) {
    emailBtn.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' ') emailBtn.click();
    });
  }
});
