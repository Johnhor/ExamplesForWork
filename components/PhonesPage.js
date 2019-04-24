export default class PhonesPage {
    constructor(element){
         this.element = element;

         this.render();
    }

    render(){
         this.element.innerHTML = `
             <div class='row'>
                <div class='col col-12'>
                    <div class='item'>
                       <div class='col-auto'>
                           <div class='img'></div>
                       </div>
                       <div class='col'>
                         <div class='mob-desc'>
                           <div class='name'>Nokia</div>
                           <div class='desc'>
                               Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.We concentrate on the language itself here, with the minimum of environment-specific notes.
                           </div>
                         </div>  
                       </div>
                    </div> 
                </div>
                <div class='col col-12'>
                    <div class='item'>
                       <div class='col-auto'>
                           <div class='img'></div>
                       </div>
                       <div class='col'>
                         <div class='mob-desc'>
                           <div class='name'>Nokia</div>
                           <div class='desc'>
                               Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.We concentrate on the language itself here, with the minimum of environment-specific notes.
                           </div>
                         </div>  
                       </div>
                    </div> 
                </div>
                <div class='col col-12'>
                    <div class='item'>
                       <div class='col-auto'>
                           <div class='img'></div>
                       </div>
                       <div class='col'>
                         <div class='mob-desc'>
                           <div class='name'>Nokia</div>
                           <div class='desc'>
                               Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.We concentrate on the language itself here, with the minimum of environment-specific notes.
                           </div>
                         </div>  
                       </div>
                    </div> 
                </div>
           </div>`;
    }
}