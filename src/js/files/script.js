// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Переход на страницу благодарности после отправки формы
document.addEventListener( 'formSent', function( event ) {
	location = 'https://portfolio.webkrutko.by/thank-you-page.html';
}, false );

// Защита формы от ботов через пустое поле
// Форма в контактах
if ( document.querySelector('.btn') ) {  // Проверяем наличие элемента на странице
		let code = document.querySelector('#code'); // Получаем скрытый input
		document.querySelector('.btn').onclick = function(){ // Клик по кнопке отправки
			code.value = 'NOSPAM'; // Подставляем значение в value инпута	
	};
}
  // Кнопка НАЗАД
if ( document.querySelector('.button-back') ) {  // Проверяем наличие элемента на странице
	document.querySelector('.button-back').onclick = function(){ // Клик по кнопке НАЗАД
		window.history.go(-2); // возвращаемся назад
	};
}









