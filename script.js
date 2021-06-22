const circle=document.querySelector('.head .nav-bar .nav-list .circle');
const mobile_menu=document.querySelector('.head .nav-bar .nav-list ul');
const item=document.querySelectorAll('.head .nav-bar .nav-list ul li a');

const header=document.querySelector('.head.container');



document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

circle.addEventListener('click',()=>{
    circle.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

item.forEach((item)=>{
    item.addEventListener('click',()=>{
        circle.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    
    })
})













