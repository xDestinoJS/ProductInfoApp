let barcodeEl = document.getElementById("barcode")

let productNameEl = document.getElementById("productName")
let productImageEl = document.getElementById("productImage")
let productBrandEl = document.getElementById("productBrand")
let productInfoEl = document.getElementById("productInfo")

function fetchProductInfo(barcode) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then(res => res.json())
    .then(data => {
        productNameEl.innerHTML = data.product["product_name"]
        productImageEl.src = data.product["image_front_url"]
        productBrandEl.innerHTML = data.product.brands

        productInfo.classList.remove("hidden")
    })
    .catch(err => {
        productInfo.classList.add("hidden")
    })
}

async function searchProduct() {
    const barcode = parseInt(barcodeEl.value)

    if (!isNaN(barcode)) {
        fetchProductInfo(barcode)
    }
}