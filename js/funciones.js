const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0;
let rutasImg = [];

const navegacionImagenes = direccion => {
	if(direccion == 0){
		imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length - 1;
	}else{
		imgActual = imgActual < rutasImg.length - 1 ? imgActual + 1 : 0;
	}
	imgModal.setAttribute("src",rutasImg[imgActual]);
};

//abrir modal
enlaces.forEach( (enlace,indice) => {
	rutasImg.push(enlace.getAttribute("href"));
	enlace.addEventListener("click", evento => {
		evento.preventDefault();
		imgActual = indice;
		imgModal.setAttribute("src",rutasImg[imgActual]);
		modal.classList.add("visible");
	});
});

//cerrar modal
modal.addEventListener("click",() => {
	modal.classList.remove("visible");
});

//navegación modal
flechas.forEach((flecha,indice) => {
	flecha.addEventListener("click", evento => {
		evento.stopPropagation();
		navegacionImagenes(indice);
	});
});

window.addEventListener("keyup", evento => {
	switch(evento.keyCode){
		case 27:
			modal.classList.remove("visible");
		break;
		case 37:
			navegacionImagenes(0);
		break;
		case 39:
			navegacionImagenes(1);
		break;
	}
});