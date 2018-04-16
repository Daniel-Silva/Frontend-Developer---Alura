    /* NAVGATION */

var btnOpenNav = document.getElementById('btn-open--nav');
var btnCloseNav = document.getElementById('link-navbar--close')

btnOpenNav.addEventListener('click', function(event){
    var navBar = document.getElementById('nav');
    
    if(navBar.classList == 'navigation nav-close'){
        navBar.classList.remove('nav-close');
        navBar.classList.add('nav-open');
    }else{
        navBar.classList.add('nav-open');
    }
});

btnCloseNav.addEventListener('click', function(event){
    var navBar = document.getElementById('nav');
    
    if(navBar.classList == 'navigation nav-open'){
        navBar.classList.remove('nav-open');
        navBar.classList.add('nav-close');
    }else{
        navBar.classList.add('nav-close');
    }
})
