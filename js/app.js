let dolar = 475.3;
let euro= 530.12;
let iva= 2.12;



//*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/--





function toggleAccordion(index) {
  let accordionItem = document.querySelector(".accordion-item:nth-child(" + index + ")");
  if (accordionItem) {
    accordionItem.classList.toggle("active");
  }
}



//*-----------------------------------------------------------*color picker js *-------------------------------------/--



const COLOR_SELECT= document.querySelectorAll(".color");
COLOR_SELECT.forEach(color => {
  color.addEventListener("click" , ()=>{
    let colorNameClass = color.className;
    if (!color.classList.contains("active-color")) {
      let colorName= colorNameClass.slice("colorNameClass".indexOf(" - " + 1, colorNameClass.length))
      resetActiveBtns()
      console.log(colorName)
      color.classList.add("active-color");
    
    }
  })
})
function resetActiveBtns(){
  COLOR_SELECT.forEach(color => {
    color.addEventListener("click",()=>{
      color.classList.remove('active-color');
    })
     
  });
}

function setNewColor(color){
  document.querySelector('.banner-right img').src = `images/tshirt_${color}.png`;

  

//*-------------------navbar transparent--------------------------

window.onscroll = function() {scrollFunction()};
let x = document.getElementsByClassName("linkItem");
let fill=document.getElementsByClassName("icon-navbar");

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

      document.getElementById("navbar").style.background = "#000012";
      document.getElementById("logo").style.color = "white";



      for(let i = 0; i < 7; i++){
          x[i].style.color= "white";
          fill[i].style.fill= "white";
          fill[i].style.color= "white";
      }

    }
    else {
      document.getElementById("navbar").style.background = "#ffff";  
      document.getElementById("logo").style.color = "#464D5C";
      for(let i = 0; i < 7; i++){
        x[i].style.color= "#3E3E3E";
        fill[i].style.fill= "#3E3E3E";
        fill[i].style.color= "#3E3E3E";
        }
      

    }
  }
}



/*------------------------------------------Ffilter panel 2------------------------------------------------------------------------------------------- */


const moveButton = document.getElementById('moveButton');
const myDiv = document.getElementById('panel-1');


let posicionOriginal = myDiv.getBoundingClientRect();
let movido = false;
moveButton.addEventListener('click', () => {
    // Generar valores de posición aleatorios dentro del tamaño de la ventana
    if (!movido) {
    // Mueve el elemento a una nueva posición
    myDiv.style.transform = `translateX(0vh)`;
    movido = true;
    }
   else {
    // Restablece el elemento a su posición original
    myDiv.style.transform = "translateX(-120%)";
    movido = false;
  }

    
    // // Aplicar transformación de translate al div
    // myDiv.style.transform = `translate(-200px)`;
     
});
const button2= document.getElementById('closer-sidebar');
button2.addEventListener("click", ()=>{
  myDiv.style.transform = "translateX(-120%)";
  movido=false;
})


//*--------------------------------------------------------------CARRITO-------------------------------------------------------------------------------- */
let carrito= [];

function agregar(params) {
    let ag= prompt("que producto desea comprar? escribe un numero" );

    do{
      ag= prompt(" 1)adidas yezzy 2)Element 3)123 4)LURIS");
      switch (ag) {
        case "1":
      
            for (const iterator in name1) {
              let prd= name1[iterator]; 
              console.log(prd)
            }
            console.log(name1.compra());
          
          break;
          case "2":
            for (const iterator in name2) {
              let prd= name2[iterator]; 
              console.log(prd)
            }
          break;
          case "3":
            for (const iterator in name3) {
              let prd= name3[iterator]; 
              console.log(prd)
            }
          break;
          case "4":
            for (const iterator in name4) {
              let prd= name4[iterator]; 
              console.log(prd)
            }
          break;
      
        default:
          break;
      }
    } while (ag === "esc");
  
}


//**/----------------------------------------link zapas---------------------------------------------------------//// */

document.addEventListener("DOMContentLoaded", ()=>{
  let linkZapas= document.getElementsByClassName("linkProductMain");
  let linkZapasShop= document.getElementsByClassName("productShop");
    for(let i = 0; i < linkZapas.length; i++){
      linkZapas[i].addEventListener("click",function(event){
        location.href="#";
      })
    }
    for(let i = 0; i < linkZapasShop.length; i++){
      linkZapasShop[i].addEventListener("click",function(event){
        location.href="#";
      })
    }

})




//CSS INPUT RANGE


let minDollars = 500;
let maxDollars = 15000;

let minSlider = document.querySelector("#min");
let maxSlider = document.querySelector("#max");

function numberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function updateDollars() {
  let fromValue =
    ((maxDollars - minDollars) * minSlider.value) / 100 + minDollars;
  let toValue =
    ((maxDollars - minDollars) * maxSlider.value) / 100 + minDollars;

  document.querySelector("#from").textContent = `$${numberWithSpaces(
    Math.floor(fromValue)
  )}`;
  document.querySelector("#to").textContent = `$${numberWithSpaces(
    Math.floor(toValue)
  )}`;
}

maxSlider.addEventListener("input", () => {
  let minValue = parseInt(minSlider.value);
  let maxValue = parseInt(maxSlider.value);

  if (maxValue < minValue + 10) {
    minSlider.value = maxValue - 10;

    if (minValue === parseInt(minSlider.min)) {
      maxSlider.value = 10;
    }
  }

  updateDollars();
});

minSlider.addEventListener("input", () => {
  let minValue = parseInt(minSlider.value);
  let maxValue = parseInt(maxSlider.value);

  if (minValue > maxValue - 10) {
    maxSlider.value = minValue + 10;

    if (maxValue === parseInt(maxSlider.max)) {
      minSlider.value = parseInt(maxSlider.max) - 10;
    }
  }

  updateDollars();
});





// agregar()
function filterProducts() {
 let category = document.getElementById('category').value;
 let products = document.getElementsByClassName('product');

  // Mostrar u ocultar los productos según la categoría seleccionada
  for (var i = 0; i < products.length; i++) {
   let product = products[i];

    if (category === 'all' || product.classList.contains(category)) {
      product.classList.add('show');
    } else {
      product.classList.remove('show');
    }
  }
}
//la función filterProducts() obtiene el valor de la categoría seleccionada y recorre todos los elementos de producto. Luego, verifica si el producto coincide con la categoría seleccionada. Si es así, agrega la clase show al producto para mostrarlo; de lo contrario, la clase show se elimina para ocultarlo.//


//Este es un ejemplo básico de un carrito de compra utilizando JavaScript. 
//Puedes agregar productos al carrito llamando a la función addToCart y proporcionando
// el nombre y el precio del producto. Los productos se mostrarán en el carrito y 
//se actualizará el total automáticamente.

let cartItems = [];
let cartTotal = 0;

function addToCart(producto, precio) {
    cartItems.push({ producto, precio });
    cartTotal += precio;
    updateCart();
}
function removeFromCart(index) {
  const removedItem = cartItems.splice(index, 1)[0];
  cartTotal -= removedItem.precio;
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  cartItems.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("cart-item");
      listItem.textContent = `${item.producto} - $${item.precio}`;
      
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Eliminar";
      removeBtn.classList.add("remove-from-cart-btn");
      removeBtn.onclick = () => removeFromCart(index);

      listItem.appendChild(removeBtn);
      cartItemsElement.appendChild(listItem);
  });

  const cartTotalElement = document.getElementById("cart-total");
  cartTotalElement.textContent = `$${cartTotal}`;
}


