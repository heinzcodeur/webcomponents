class NewDivComponents extends HTMLElement{
   constructor() {
       super();

       this.attachShadow({mode:"open"})
   }

   connectedCallback(){
       this.shadowRoot.innerHTML =
           `
            <style>
                div{
                    height:200px;
                    width:200px;
                    background-color: lightsteelblue;
                }
            </style>
            <div>
                <span>Youpi!</span>
            </div> 
           
           `
   }
}

window.customElements.define('new-div',NewDivComponents)