class Products {

    render(){
        let htmlCatalog = '';

        CATALOG.forEach(({id, img, name, price}) => {
            htmlCatalog += `
                <li class="store_element">
                    <div class="element_image">
                        <img class="store_element_img" src='../${img}' />
                    </div>
                    <div class="store_element_list">
                        <div class="store_element_text">
                            <h5 class="store_element_name">${name}</h5>
                            <p class="store_element_price">${price}</p>
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