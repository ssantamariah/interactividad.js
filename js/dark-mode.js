const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');



function toggleTheme() {

    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      toggleThemeBtn.innerHTML = "<i class= 'fa-solid fa-sun'></i>";
        // toggleThemeBtn.textContent = "Activar Light Mode";

    } else {
      toggleThemeBtn.innerHTML = "<i class= 'fa-solid fa-moon'></i>";
        // toggleThemeBtn.textContent = "Activar Dark Mode";
    }
}
toggleThemeBtn.addEventListener('click', function () {
    toggleTheme();

});


colorPicker.addEventListener('change', function () {
    document.body.style.color = colorPicker.value;
});

backgroundPicker.addEventListener('change', function () {
    document.body.style.background = backgroundPicker.value;
});