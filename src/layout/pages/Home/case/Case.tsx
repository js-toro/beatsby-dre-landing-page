import CaseImage from "./assets/case-image.png";

export const Case = () => {
	return (
		<section id="case-section" className="container case">
			<h2 className="case__title">Case</h2>

			<div className="case__container">
				<div className="case__image">
					<img
						src={CaseImage}
						alt="A beautiful case for your headphones"
						draggable="false"
					/>
				</div>

				<div className="case__info">
					<p>
						With a comfortable and adaptable case so that you can store it
						whenever you want, and keep your durability forever.
					</p>
					<button className="btn">More info</button>
				</div>
			</div>
		</section>
	);
};
