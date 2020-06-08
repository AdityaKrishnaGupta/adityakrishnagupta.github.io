import React from "react";
import "./Form.css";
const Form = () => {
	return (
		<div className="form-body">
			<h1 className="body-heading">Join Us and Stay Regular</h1>
			<div className="forms">
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLScQZLYNCQimKT87EDqgRP4-3dTDUdZ9LFZrqazwPuukLnXJ3Q/viewform?embedded=true"
					width="600"
					height="520"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>
					Loading…
				</iframe>
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLScmCBP6u6V1ZM2BwE0GkivEFnP7lED_PsSuTJfcR9uolTuyVQ/viewform?embedded=true"
					width="700"
					height="520"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>
					Loading…
				</iframe>
			</div>
		</div>
	);
};

export default Form;
