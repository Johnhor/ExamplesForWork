export default class PhonesCatalog {
	constructor(element, props){
		this.element = element;
		this.props = props;

		this.render(); 
	}
	render(){
		this.element.innerHTML = `
		<div class='PhonesCatalog'>
		 <ul class='catalog__list'> 
            ${ this.props.phones.map(phone => `
              <li class='item catalog__item'>
              <a href="#!/phones/${ phone.id }" class="thumb">
              <img alt="${phone.name}" src="${phone.imageUrl}" class='catalog__img'>
              </a>
                <div class='item__desc'>
                   <a href="#!/phones/${ phone.id }" class='item__link'>${phone.name}</a>
                   <p class='item__text'>${phone.snippet}</p>
                </div>
                <button type='button' class='item__btn'>Add</button>
              </li>
            	`).join('')}
         </ul> 
          </div>
		`; 
	}
}