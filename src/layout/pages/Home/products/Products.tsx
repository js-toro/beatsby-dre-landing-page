import {
	Grid,
	Product,
	ProductButton,
	ProductGrid,
	ProductReference,
	ProductTitle,
	Title,
	Wrapper,
} from "./Products.styles";

import ShoppingBagIcon from "../../../../assets/shopping-bag-icon.svg";
import Product1 from "../../../../assets/product-1.png";
import Product2 from "../../../../assets/product-2.png";
import Product3 from "../../../../assets/product-3.png";
import Product4 from "../../../../assets/product-4.png";
import Product5 from "../../../../assets/product-5.png";
import { useContext } from "react";
import { CursorContext } from "../../..";

export const Products = () => {
	const { setHovered } = useContext(CursorContext);

	return (
		<Wrapper id="products-section" className="container">
			<Title>
				Choose <br />
				Your Style
			</Title>

			<Grid>
				<Product>
					<img src={Product1} alt="A beautiful headphones" />

					<ProductGrid>
						<div>
							<ProductTitle>Black</ProductTitle>
							<ProductReference>N299K</ProductReference>
						</div>
						<ProductButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							$variant={true}
						>
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</ProductButton>
					</ProductGrid>
				</Product>

				<Product>
					<img src={Product2} alt="A beautiful headphones" />

					<ProductGrid>
						<div>
							<ProductTitle>Red Black</ProductTitle>
							<ProductReference>N299K</ProductReference>
						</div>
						<ProductButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							$variant={true}
						>
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</ProductButton>
					</ProductGrid>
				</Product>

				<Product>
					<img src={Product3} alt="A beautiful headphones" />

					<ProductGrid>
						<div>
							<ProductTitle>Night Black</ProductTitle>
							<ProductReference>N299K</ProductReference>
						</div>
						<ProductButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							$variant={true}
						>
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</ProductButton>
					</ProductGrid>
				</Product>

				<Product>
					<img src={Product4} alt="A beautiful headphones" />

					<ProductGrid>
						<div>
							<ProductTitle>Blue</ProductTitle>
							<ProductReference>N299K</ProductReference>
						</div>
						<ProductButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							$variant={true}
						>
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</ProductButton>
					</ProductGrid>
				</Product>

				<Product>
					<img src={Product5} alt="A beautiful headphones" />

					<ProductGrid>
						<div>
							<ProductTitle>Twilight Gray</ProductTitle>
							<ProductReference>N299K</ProductReference>
						</div>
						<ProductButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							$variant={true}
						>
							<img
								draggable="false"
								src={ShoppingBagIcon}
								alt="Shopping icon"
							/>
						</ProductButton>
					</ProductGrid>
				</Product>
			</Grid>
		</Wrapper>
	);
};
