//  PRODUCTS CARDS

class Products {

    render(){
        let htmlCatalog = '';

        CATALOG.forEach(({id, img, name, price}) => {
            htmlCatalog += `
                <li class="store_element">
                    <div class="element_image">
                        <img class="store_element_img" src="${img}" />
                    </div>
                    <div class="store_element_list">
                        <div class="store_element_text">
                            <h5 class="store_element_name">${name}</h5>
                            <p class="store_element_price">$ ${price}.00 USD</p>
                        </div>
                        <div class="nav_btns">
                            <div class="item_counter">
                                <button class="item_control" data-action="plus">+</button>
                                <p class="counter_number" data-counter>1</p>
                                <button class="item_control" data-action="minus">-</button>
                            </div>
                            <button data-id="${id}" class="addtocart_btn">Add to Cart</button>
                        </div>
                    </div>
                </li>
            `;
        })

        const html = `
            <ul class="store_list">${htmlCatalog}</ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render()




//      PRODUCTS COUNTER 

window.addEventListener('click', function(event){

    let productCounter;

    if (event.target.dataset.action === 'plus' || 'minus') {
        const itemCounter = event.target.closest('.item_counter');
        productCounter = itemCounter.querySelector('[data-counter]');
    }   

    if (event.target.dataset.action === 'plus') {
        productCounter.innerText = ++productCounter.innerText;
    }

    if (event.target.dataset.action === 'minus') {
        if (productCounter.innerText > 1) {
            productCounter.innerText = --productCounter.innerText;
        } 
    }
});
