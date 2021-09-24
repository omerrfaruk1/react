import * as actionTypes from "./actionTypes"

export  function addToCart(cartItem){
    return {type: actionTypes.ADD_TO_CART,payload: cartItem}
}

export  function removefromCart(product){
    return {type: actionTypes.REMOVE_FROM_CART,payload:product}
}
// eğer 8. satırda default kullanacak olsaydık bize "Parsing error: Only one default export allowed per module." bu şekilde bir hata dondurecekti
// :)) bunuda yeni ögrendim eger default'u tek basına kullanaca olursamda tekrar hata alırım
