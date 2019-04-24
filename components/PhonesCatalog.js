export default class PhonesCatalog {
	constructor(element, props){
		this.element = element;
		this.props = props;

		this.render(); 

    this.element.addEventListener('click', (event) => {
       const link = event.target.closest('[data-element="PhoneLink"]');
        if(!link) {
          return;
        }
        const phoneId = link.dataset.phoneId;
       this.props.onPhoneSelected(phoneId);
    });
	}
	render(){
		this.element.innerHTML = `
		<div class='PhonesCatalog'>
		 <ul class='catalog__list'> 
            ${ this.props.phones.map(phone => `
              <li class='item catalog__item'>
              <a 
              data-element="PhoneLink"
              data-phone-id="${ phone.id }"
              href="#!/phones/${ phone.id }" class="thumb">
              <img alt="${phone.name}" src="${phone.imageUrl}" class='catalog__img'>
              </a>
                <div class='item__desc'>
                   <a
                     data-element="PhoneLink"
                     data-phone-id="${ phone.id }"      
                    href="#!/phones/${ phone.id }" class='item__link'>${phone.name}</a>
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