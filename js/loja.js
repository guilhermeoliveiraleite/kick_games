if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  var totalAmount = "0,00"
  
  function ready() {
    // Botão remover produto
    const removercarrinho = document.getElementsByClassName("remover")
    for (var i = 0; i < removercarrinho.length; i++) {
      removercarrinho[i].addEventListener("click", removeProduct)
    }
  
    // Mudança valor dos inputs
    const quantinput = document.getElementsByClassName("produto-qtd-input")
    for (var i = 0; i < quantinput.length; i++) {
      quantinput[i].addEventListener("change", checkIfInputIsNull)
    }
  
    // Botão add produto ao carrinho
    const addcarrinho = document.getElementsByClassName("add-carrinho")
    for (var i = 0; i < addcarrinho.length; i++) {
      addcarrinho[i].addEventListener("click", addProductToCart)
    }
  
    // Botão comprar
    const comprar = document.getElementsByClassName("comprar-botao")[0]
    comprar.addEventListener("click", makePurchase)
  }
  
  function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  }
  
  function checkIfInputIsNull(event) {
    if (event.target.value === "0") {
      event.target.parentElement.parentElement.remove()
    }
  
    updateTotal()
  }
  
  function addProductToCart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("imagem-produto")[0].src
    const productName = productInfos.getElementsByClassName("titulo-produto")[0].innerText
    const productPrice = productInfos.getElementsByClassName("preco-produto")[0].innerText
  
    const productsCartNames = document.getElementsByClassName("car-produto-titulo")
    for (var i = 0; i < productsCartNames.length; i++) {
      if (productsCartNames[i].innerText === productName) {
        productsCartNames[i].parentElement.parentElement.getElementsByClassName("produto-qtd-input")[0].value++
        updateTotal()
        return
      }
    }
  
    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("car-produto")
  
    newCartProduct.innerHTML =
      `
        <td class="produto-identificacao">
          <img src="${productImage}" alt="${productName}" class="car-produto-imagem">
          <strong class="car-produto-titulo">${productName}</strong>
        </td>
        <td>
          <span class="car-produto-preco">${productPrice}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="produto-qtd-input">
          <button type="button" class="remover">Remover</button>
        </td>
      `
    
    const tableBody = document.querySelector(".car-tabela tbody")
    tableBody.append(newCartProduct)
    updateTotal()
  
    newCartProduct.getElementsByClassName("remover")[0].addEventListener("click", removeProduct)
    newCartProduct.getElementsByClassName("produto-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
  }
  
  function makePurchase() {
    if (totalAmount === "0,00") {
      alert("Seu carrinho está vazio!")
    } else {  
        window.location.href = 'final_shop.html';
    //   alert(
    //     `
    //       Obrigado pela sua compra!
    //       Valor do pedido: R$${totalAmount}\n
    //       Volte sempre :)
    //     `
    //   )
  
      document.querySelector(".car-tabela tbody").innerHTML = ""
      updateTotal()
    }
  }
  
  // Atualizar o valor total do carrinho
  function updateTotal() {
    const cartProducts = document.getElementsByClassName("car-produto")
    totalAmount = 0
  
    for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName("car-produto-preco")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("produto-qtd-input")[0].value
  
      totalAmount += productPrice * productQuantity
    }
    
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".car-total-container span").innerText = "R$" + totalAmount
  }