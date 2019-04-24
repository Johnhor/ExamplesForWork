export default class PhoneViewer {
	constructor(element, props){
	this.element = element;
	this.props = props;	
	this.render();	 
	}

	render(){
	  const {phone} = this.props;		
	  this.element.innerHTML = `
	  <div class='container-wrap'>
          <div class='details details-wrap'>
              <div class='details__promo-img'>
                  <img class="details__phone" src="${phone.images[0]}">
              </div>
              <div class='details__desc'>
                  <button type='button' class='item__btn'>Back</button>
                  <button type='button' class='item__btn'>Add to basket</button>
                   <h1>${phone.name}</h1>

                   <p>${phone.description}</p>

                   <ul class="details__list-photo">
                       <li>
                        <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg" class='catalog__img'>
                      </li>
                      <li>
                        <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg" class='catalog__img'>
                      </li>
                      <li>
                        <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg"class='catalog__img'>
                      </li>
                      <li>
                        <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg"class='catalog__img'>
                      </li>
                      <li>
                        <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg"class='catalog__img'>
                      </li>
                      <li>
                        <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg"class='catalog__img'>
                      </li>
                   </ul>
              </div> 
          </div>
      </div>`;	 
	}
}