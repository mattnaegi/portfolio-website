// console.log('script loaded');

let data;

//mobile menu toggle
const mobilemenu = document.getElementById('m-btn');
mobilemenu.addEventListener('click', function() {
    console.log('togglemenu');
    document.getElementById('menu-list').classList.toggle("show");
});


