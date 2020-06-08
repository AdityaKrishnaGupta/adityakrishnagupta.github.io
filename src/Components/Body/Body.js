import React from "react";
import Form from "../Form/Form";
import illus from "../../body.svg";
import Pricing from "../Pricing/Pricing";
import "./Body.css";
const Body = () => {
	return (
		<div className="body">
			<h1 className="body-heading">Join Us and Stay Regular</h1>
			<div className="semi-body">
				<div className="list-items">
					<ul className="market-points">
						<li className="market-point">
							Learn and Practise Programming according to your needs!
						</li>
						<li className="market-point">
							Programming Stuff like questions, videos, detailed solutions for{" "}
							<strong>Free!</strong>
						</li>
						<li className="market-point">
							All the Material in your favourite What's App!
						</li>
						<li className="market-point">
							We won't spam! We hate it too.
							<strong> Just 6 messages a day!</strong>
						</li>
						<li className="market-point">
							Personalised content just for you all for
							<strong> Free Free and Free!</strong>
						</li>
					</ul>
				</div>
				<div className="body-illus">
					<img className="body-illus-image" src={illus} />
				</div>
			</div>
			<hr className="division" />
			<div>
				<Pricing />
			</div>
			<hr className="division" />
			<div>
				<Form />
			</div>
		</div>
	);
};
export default Body;
