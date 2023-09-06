
//?===========================Global variables==================== //

let logos = document.getElementsByClassName('logo-container')
let subTotal = parseInt(document.getElementById('subTotal').innerHTML)
let shippingCost = parseInt(document.getElementById('shippingCost').innerHTML)
let vatTax = parseInt(document.getElementById('vatTax').innerHTML)
let total  = parseInt(document.getElementById('total').innerHTML)

//!=============================when start========================//

logos[0]?.classList.add('border-logo')
calcTatal()

//*============================Events========================//


let eleArray = Array.from(logos);

  eleArray.forEach(ele =>{

    ele.addEventListener('click' , ()=>{

      if (eleArray.indexOf(ele) == 0) {
        document.getElementById('shippingCost').innerHTML = 0;
        shippingCost = 0;
        calcTatal();
      }
      else if (eleArray.indexOf(ele) == 1) {
        document.getElementById('shippingCost').innerHTML = 30;
        shippingCost = 30;
        calcTatal();
      }
      else if (eleArray.indexOf(ele) == 2) {
        document.getElementById('shippingCost').innerHTML = 35;
        shippingCost = 35;
        calcTatal();
      }
      else if (eleArray.indexOf(ele) == 3) {
        document.getElementById('shippingCost').innerHTML = 20;
        shippingCost = 30;
        calcTatal();
      }
      else if (eleArray.indexOf(ele) == 4) {
        document.getElementById('shippingCost').innerHTML = 25;
        shippingCost = 25;
        calcTatal();
      }
    })



})


//*============================function========================//

function calcTatal(){
  document.getElementById('total').innerHTML = subTotal + shippingCost + vatTax
}


$('.logo-container').click(function () {
  $(this).addClass('border-logo')
  $(this).siblings().removeClass('border-logo')
})
