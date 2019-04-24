export default class PhonesCatalog {
	constructor(element){
		this.element = element;

		this.render(); 
	}
	render(){
		this.element.innerHTML = `
			<div class='PhonesCatalog'>
			<ul class='catalog__list'> 
             <li class='item catalog__item'>
              <a href="#!/phones/motorola-xoom" class="thumb">
              <img alt="MOTOROLA XOOM™" src="img/phones/motorola-xoom.0.jpg" class='catalog__img'>
              </a>
                <div class='item__desc'>
                   <a href='#' class='item__link'>MOTOROLA XOOM™</a>
                   <p class='item__text'>The Next, Next Generation Experience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).</p>
                </div>
                <button type='button' class='item__btn'>Add</button>
             </li>

             <li class='item catalog__item'>
             <a href="#!/phones/motorola-atrix-4g" class="thumb">
              <img alt="MOTOROLA ATRIX™ 4G" src="img/phones/motorola-atrix-4g.0.jpg" class="catalog__img">
            </a>
                <div class='item__desc'>
                   <a href='#' class='item__link'>MOTOROLA ATRIX™ 4G</a>
                   <p class='item__text'>MOTOROLA ATRIX 4G the world's most powerful smartphone.</p>
                </div>
                <button type='button' class='item__btn'>Add</button>
             </li>

             <li class='item catalog__item'>
              <a href="#!/phones/dell-streak-7" class="thumb">
              <img alt="Dell Streak 7" src="img/phones/dell-streak-7.0.jpg" class='catalog__img'>
            </a>
                <div class='item__desc'>
                   <a href='#' class='item__link'>Dell Streak 7</a>
                   <p class='item__text'>Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small enough to carry around, big enough to gather around.</p>
                </div>
                <button type='button' class='item__btn'>Add</button>
             </li>

             <li class='item catalog__item'>
              <a href="#!/phones/samsung-gem" class="thumb">
              <img alt="Samsung Gem™" src="img/phones/samsung-gem.0.jpg" class='catalog__img'>
            </a>
                <div class='item__desc'>
                   <a href='#' class='item__link'>Samsung Gem™</a>
                   <p class='item__text'>The Samsung Gem™ brings you everything that you would expect and more from a touch display smart phone – more apps, more features and a more affordable price.</p>
                </div>
                <button type='button' class='item__btn'>Add</button>
             </li>

             <li class='item catalog__item'>
              <a href="#!/phones/dell-venue" class="thumb">
              <img alt="Dell Venue" src="img/phones/dell-venue.0.jpg" class='catalog__img'>
            </a>
                <div class='item__desc'>
                   <a href='#' class='item__link'>Dell Venue</a>
                   <p class='item__text'>The Dell Venue; Your Personal Express Lane to Everything</p>
                </div>
                <button type='button' class='item__btn'>Add</button>
             </li>

            </ul> </div>
		`; 
	}
}