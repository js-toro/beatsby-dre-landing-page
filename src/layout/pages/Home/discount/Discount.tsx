import { useContext, useEffect } from "react";

import { CursorContext } from "../../../../components/Cursor";
import {
	DiscountButton,
	DiscountImageContainer,
	InfoContainer,
	Wrapper,
} from "./Discount.styles";

import DiscountImage from "../../../../assets/discount-image.png";
import ShoppingBag from "../../../../assets/shopping-bag-icon.svg";
import { animateDiscount, animateDiscountWrapper } from "./Discount.animations";

export const Discount = () => {
	const { setHovered } = useContext(CursorContext);

	useEffect(() => {
		animateDiscountWrapper();
		animateDiscount();
	}, []);

	return (
		<Wrapper id="discount-section" className="container discount-wrapper">
			<InfoContainer>
				<h3>Immerse yourself in your music</h3>
				<p className="discount">Buy Now, up to 40% off.</p>
				<DiscountButton
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					$variant={true}
				>
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
