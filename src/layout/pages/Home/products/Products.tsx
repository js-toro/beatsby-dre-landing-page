import ShoppingBagIcon from "./assets/shopping-bag-icon.svg";
import Product1 from "./assets/product-1.png";
import Product2 from "./assets/product-2.png";
import Product3 from "./assets/product-3.png";
import Product4 from "./assets/product-4.png";
import Product5 from "./assets/product-5.png";

export const Products = () => {
	return (
		<section id="products-section" className="container products">
			<h2 className="products__title">
				Choose <br />
				Your Style
			</h2>

			<div className="products__grid">
				<div className="product">
					<img
						className="product__image"
						src={Product1}
						alt="A beautiful headphones"
					/>

					<div className="product__grid">
						<div>
							<h3 className="product__title">Black</h3>
							<p className="product__reference">N299K</p>
						</div>
						<button className="btn btn-variant">
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</button>
					</div>
				</div>

				<div className="product">
					<img
						className="product__image"
						src={Product2}
						alt="A beautiful headphones"
					/>

					<div className="product__grid">
						<div>
							<h3 className="product__title">Red Black</h3>
							<p className="product__reference">N299K</p>
						</div>
						<button className="btn btn-variant">
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</button>
					</div>
				</div>

				<div className="product">
					<img
						className="product__image"
						src={Product3}
						alt="A beautiful headphones"
					/>

					<div className="product__grid">
						<div>
							<h3 className="product__title">Night Black</h3>
							<p className="product__reference">N299K</p>
						</div>
						<button className="btn btn-variant">
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</button>
					</div>
				</div>

				<div className="product">
					<img
						className="product__image"
						src={Product4}
						alt="A beautiful headphones"
					/>

					<div className="product__grid">
						<div>
							<h3 className="product__title">Blue</h3>
							<p className="product__reference">N299K</p>
						</div>
						<button className="btn btn-variant">
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</button>
					</div>
				</div>

				<div className="product">
					<img
						className="product__image"
						src={Product5}
						alt="A beautiful headphones"
					/>

					<div className="product__grid">
						<div>
							<h3 className="product__title">Twilight Gray</h3>
							<p className="product__reference">N299K</p>
						</div>
						<button className="btn btn-variant">
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
