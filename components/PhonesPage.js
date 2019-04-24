import PhonesCatalog from './PhonesCatalog.js';
import ShopingCart from './ShopingCart.js';
import Filter from './Filter.js';
import {getAll, getById} from '../js/api/phones.js';

export default class PhonesPage {
  constructor(element) {
 	this.element = element;

 	this.render();

   this.initComponent(PhonesCatalog, {
     phones: getAll(),
   });
   this.initComponent(ShopingCart);
   this.initComponent(Filter); 
  }

  initComponent(Constructor, props = {}) {
     new Constructor(this.element.querySelector(`[data-component="${Constructor.name}"]`),
      props
      );
  }
  render() {
  	this.element.innerHTML = `
    <div class='catalog catalog-wrap'>
       <div class='container-wrap'>
        <div class='catalog__sidebar'>

          <div data-component="Filter"></div>

           <div class="catalog__shop-list">

              <div data-component="ShopingCart"></div>

           </div>
        </div>
       </div> 
        <div class='catalog__content'>
          <div class='container-wrap'>

            <div data-component="PhonesCatalog"></div>

          </div>
        </div>
     </div>
     `;
  }
}