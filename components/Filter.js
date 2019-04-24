export default class Filter {
  constructor(element) {
 	this.element = element;

 	this.render();
  }

  render() {
  	this.element.innerHTML = `
  	   <div class='Filter'>
  	       <form class='catalog__inline-form'>
              <input type='text' aria-label='Search' class='catalog__search' placeholder='Search'>
           </form>
           <select class='catalog__sort'>
              <option>one</option>
              <option>two</option>
           </select>
           </div>
           `;
     }
  }