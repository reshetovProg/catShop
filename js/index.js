const counterBtn = document.querySelectorAll(".counter-btn[data-counter-btn]");

const productBtn = document.querySelectorAll(".product-btn");

const cartList = document.querySelector(".cart-list");

counterBtn.forEach((el) => {
	el.addEventListener('click', () => {
		let param = el.dataset.counterBtn;
		let val = el.parentElement.children[1].dataset.counterCount;
		if (param == "+") val = +val + 1;
		else if (param == "-" && val > 1) val = +val - 1;
		el.parentElement.children[1].dataset.counterCount = val;
		el.parentElement.children[1].textContent = val;
		console.log(el.parentElement.children[1].textContent);
	})

})

productBtn.forEach((el) => {
	el.addEventListener('click', () => {
		const cartProduct = document.createElement('div');
		cartProduct.classList.add('cart-product');
		cartProduct.innerHTML = `
		<div class="product-img p1"></div>
					<div class="cart-product__container">
						<div class="product__title">
							Корм <b>ProBalance Immuno</b> для кошек с курицей и индейкой
						</div>
						<div class="product-count">
							<div class="product-count__counter">
								<div class="counter-btn" data-counter-btn="-">-</div>
								<div class="counter-btn" data-counter-count="1">1</div>
								<div class="counter-btn" data-counter-btn="+">+</div>
							</div>
							<div class="product-count__price">330 P</div>
						</div>
					</div>
		`

		cartList.appendChild(cartProduct);
	})
})

