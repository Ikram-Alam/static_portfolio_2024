const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSection = document.getElementById(button.getAttribute('data-target')!);
    if (targetSection?.style.display === 'none') {
      targetSection.style.display = 'block';
    } else {
      targetSection!.style.display = 'none';
    }
  });
});
