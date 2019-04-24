export default class ShopingCart {
	 constructor(element) {
	 	this.element = element;

	 	this.render(); 
	 }

	 render() {
     this.element.innerHTML = `
      <div class='ShopingCart'>
       <p>Shoping cart</p>
      </div> 
     `; 
  }
}