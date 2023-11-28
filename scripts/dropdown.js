const DROPDOWN_BUTTON = document.getElementById('dropdown-button');
const DROPDOWN_CONTENT = document.getElementById('dropdown-content');
const DROPDOWN_BACKGROUND = document.getElementById('dropdown-background');
const BODY = document.getElementById('page-top');

DROPDOWN_BUTTON.addEventListener('click', () => {
  let showDropdown = false;

  showDropdown = !showDropdown;

  DROPDOWN_CONTENT.style.display = showDropdown ? 'block' : 'none';
  DROPDOWN_BACKGROUND.style.display = showDropdown ? 'block' : 'none';
});

DROPDOWN_BACKGROUND.addEventListener('click', () => {
  DROPDOWN_CONTENT.style.display = 'none';
  DROPDOWN_BACKGROUND.style.display = 'none';
})