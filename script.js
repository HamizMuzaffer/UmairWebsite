// document.addEventListener('click', function(event) {
//     var navUl = document.getElementById('nav-ul');
//     var check = document.getElementById('check');

//     // Check if the click is outside the <ul> and the checkbox is checked
//     if (!event.target.closest('#nav-ul') && check.checked) {
//         // Uncheck the checkbox and hide the menu
//         check.checked = false;
//         navUl.style.display = 'none';
//     }
// });



// function setVisible() {
//     var navUl = document.getElementById('nav-ul');
//     var check = document.getElementById('check');

//     // Check if the checkbox is checked (menu is open on small screens)
//     if (check.checked) {
//         // Uncheck the checkbox and hide the menu
//         check.checked = false;
//         navUl.style.display = 'none';
//     }
  
//         check.checked = true;
    

    
// }

function toggleMenu() {
    var navUl = document.getElementById('nav-ul');
    var check = document.getElementById('check');

    // Toggle the display of the menu based on the checkbox state
    navUl.style.display = check.checked ? 'block' : 'none';
}

function setVisible() {
    var check = document.getElementById('check');

    // Uncheck the checkbox to hide the menu
    check.checked = false;

    // Optionally, you can call toggleMenu() here to ensure the menu state is consistent
    // toggleMenu();
}

