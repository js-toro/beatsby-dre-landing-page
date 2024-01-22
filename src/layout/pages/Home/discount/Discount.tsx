import {
	DiscountButton,
	DiscountImageContainer,
	InfoContainer,
	Wrapper,
} from "./Discount.styles";

import DiscountImage from "../../../../assets/discount-image.png";
import ShoppingBag from "../../../../assets/shopping-bag-icon.svg";

export const Discount = () => {
	return (
		<Wrapper id="discount-section" className="container">
			<InfoContainer>
				<h3>Immerse yourself in your music</h3>
				<p>Buy Now, up to 40% off.</p>
				<DiscountButton $variant={true}>
					<img src={ShoppingBag} alt={"Shopping Bag Icon"} />
					Buy now
				</DiscountButton>
			</InfoContainer>

			<DiscountImageContainer>
				<img
					src={DiscountImage}
					alt="A beautiful headphones"
					draggable="false"
				/>
			</DiscountImageContainer>
		</Wrapper>
	);
};
