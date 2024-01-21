import DiscountImage from "./assets/discount-image.png";

export const Discount = () => {
	return (
		<section id="discount-section" className="container discount">
			<div className="discount__info">
				<h3>Immerse yourself in your music</h3>
				<p>Buy Now, up to 40% off.</p>
				<button className="btn btn-variant">Buy now</button>
			</div>

			<div className="discount__image">
				<img
					src={DiscountImage}
					alt="A beautiful headphones"
					draggable="false"
				/>
			</div>
		</section>
	);
};
