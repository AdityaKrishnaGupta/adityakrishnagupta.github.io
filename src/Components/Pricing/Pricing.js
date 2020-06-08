import React from "react";
import "./Pricing.css";
const Pricing = () => {
	return (
		<div className="pricing">
			<h1 className="body-heading">Pricing</h1>
			<div className="pricing-cards">
				<div className="pricing-card">
					<div className="card-details">
						<div className="pack-background">
							<h2 className="pack-name">Starters</h2>
						</div>
						<div className="pack-details">
							<span className="price">
								$0<span className="month">/mo</span>
							</span>
							<ul className="pack-points">
								<li className="pack-point">3 Questions and Answers</li>
								<li className="pack-point">Aternate Days</li>
								<li className="pack-point">2 Programming Pointers</li>
								<li className="pack-point">Detailed Answers</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="pricing-card best">
					<div className="card-details">
						<div className="pack-background">
							<h2 className="pack-name">ProPack</h2>
						</div>
						<div className="pack-details">
							<span className="price">
								$0<span className="month">/mo</span>
							</span>
							<ul className="pack-points">
								<li className="pack-point">4 Questions and Answers</li>
								<li className="pack-point">Regularity Ensured</li>
								<li className="pack-point">4 Programming Pointers</li>
								<li className="pack-point">Detailed Answers</li>
								<li className="pack-point">Video Solutions</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="pricing-card">
					<div className="card-details">
						<div className="pack-background">
							<h2 className="pack-name">Masters</h2>
						</div>
						<div className="pack-details">
							<span className="price master">Coming Soon</span>

							<ul className="pack-points">
								<li className="pack-point">6 Questions and Answers</li>
								<li className="pack-point">Regularity Ensured</li>
								<li className="pack-point">6 Programming Pointers</li>
								<li className="pack-point">Detailed Answers</li>
								<li className="pack-point">Video Solutions</li>
								<li className="pack-point">Mentoship Sessions</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Pricing;
