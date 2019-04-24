import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import ShopingCart from './ShopingCart.js';
import Filter from './Filter.js';
import {getAll, getById} from '../js/api/phones.js';

export default class PhonesPage {
  constructor(element) {
 	this.element = element;

  this.state = {
    phones: getAll(),
    selectedPhone: null,
  };

 	this.render();
  }
  setState(newState){
    this.state = {
       ...this.state,
       ...newState,
    };
    this.render();
  }
  initComponent(Constructor, props = {}) {
    const componentName = Constructor.name;
    const element = this.element.querySelector(`[data-component="${componentName}"]`);
   if (element) {
    new Constructor(element, props);
   } 
  
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
            ${this.state.selectedPhone ? `
              <div data-component="PhoneViewer"></div>
              ` : 
              `<div data-component="PhonesCatalog"></div>
              `
            }
          
          </div>
        </div>
     </div>
     `;
      this.initComponent(PhonesCatalog, {
     phones: this.state.phones,
     onPhoneSelected: (phoneId) => {
        this.setState({
           selectedPhone: getById(phoneId)
        });
     }
   });
   this.initComponent(PhoneViewer, {
    phone: this.state.selectedPhone,
   }); 
   this.initComponent(ShopingCart);
   this.initComponent(Filter); 
  }
}