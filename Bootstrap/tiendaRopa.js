let item1 = {tipo:'Falda vaquera', precio: 20.99};
let item2 = {tipo: 'Blusa vaporosa', precio: 19.99};
let item3 = {tipo:'Pantalón corto', precio: 24.99};
let item4 = {tipo: 'Vestido', precio: 39.99};
let item5 = {tipo:'Conjunto traje', precio: 51.99};
let item6 = {tipo: 'Camiseta rayas', precio: 17.99};
let item7 = {tipo:'Jersey turquesa', precio: 25.99};
let item8 = {tipo: 'Vestido blanco', precio: 40.99};

let cart =[];


jQuery(() => {
    $("#button1").on('click', ()=> {
        cart.push(item1);
        console.log(item1);
    });
    $("#button2").on('click', ()=> {
        cart.push(item2);
        console.log(item2);
    });
    $("#button3").on('click', ()=> {
        cart.push(item3);
    });
    $("#button4").on('click', ()=> {
        cart.push(item4);
    });
    $("#button5").on('click', ()=> {
        cart.push(item5);
    });
    $("#button6").on('click', ()=> {
        cart.push(item6);
    });
    $("#button7").on('click', ()=> {
        cart.push(item7);
    });
    $("#button8").on('click', ()=> {
        cart.push(item8);
    });
    
    $("#cartButton").on('click', ()=> {

        let sum = 0;
        for (let i = 0; i< cart.length; i++) {
            $("#modalBody").append(`<ul>
                                     <li>${cart[i].tipo} - - ${cart[i].precio}</li>
                                     </ul>`)
            sum += cart[i].precio
        }
        console.log(sum);
        $("#modalBody").append(`<p>Total: ${sum}€</p>`)
    })
})




// let faldaVaquera = {tipo:'Falda vaquera', precio: 20.99}

// let carrito =[];

// function add1(){
//     carrito.push(faldaVaquera)
// }


// function showChart(){
//     let totalPrecio;
    
//     for(let i = 0; i<carrito.length; i++){
//         totalPrecio += carrito[i].precio
        
//     }

//     console.log(totalPrecio)
// }