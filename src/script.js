// Mobile Menu Toggle Script
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);





// Pricing Table Toggle Script
 const monthlyBtn = document.getElementById('monthlyBtn');
    const yearlyBtn = document.getElementById('yearlyBtn');
    const monthlyContent = document.getElementById('monthlyContent');
    const yearlyContent = document.getElementById('yearlyContent');

    monthlyBtn.addEventListener('click', () => {
      monthlyBtn.classList.add('bg-primary', 'text-white');

      yearlyBtn.classList.remove('bg-primary', 'text-white');
      yearlyBtn.classList.add('text-gray');

      monthlyContent.classList.remove('hidden');
      yearlyContent.classList.add('hidden');
    });

    yearlyBtn.addEventListener('click', () => {
      yearlyBtn.classList.add('bg-primary', 'text-white');

      monthlyBtn.classList.remove('bg-primary', 'text-white');
      monthlyBtn.classList.add('text-gray');

      yearlyContent.classList.remove('hidden');
      monthlyContent.classList.add('hidden');
    });