




const card = document.querySelector('.card');
const cardContainer = document.querySelector('.card__container');
const status = document.querySelector('.status');
const avatar = document.querySelector('.card__avatar');
const info = document.querySelector('.card__info');
// const img = document.querySelectorAll('.content__img-wrapper');
// const prices = document.querySelector('.content__price-wrapper');
// const text = document.querySelector('.content__text');

cardContainer.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
	let yAxis = (window.innerHeight / 2 -	 e.pageY) / 60;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
cardContainer.addEventListener('mouseenter',(e) => {
	info.style.transform =  'translateZ(100px)';
	status.style.transform =  'translateZ(100px)';
	avatar.style.transform =  'translateZ(50px)';
	card.style.transition = `all .3s ease`;
	setTimeout(() => {
		card.style.transition = `none`;
	}, 300);
});
cardContainer.addEventListener('mouseleave',(e) => {
	card.style.transition = `all .5s ease`;
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	status.style.transform =  'translateZ(0px)';
	avatar.style.transform =  'translateZ(0px)';
	info.style.transform =  'translateZ(0px)';
});




//========================================================================================================================================================
