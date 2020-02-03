import React, { Component, Fragment } from "react";
import "./EncryptionForm.css";

import FileHeader from "../components/FileHeader";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default class EncryptionForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			password: "",
			confirmPassword: "",
			displayMatchError: false
		};
	}

	/* Event Handlers */

	render() {
		const { fileName, onEncrypt, onAbort } = this.props;
		const { password, confirmPassword, displayMatchError } = this.state;

		return (
			<Fragment>
				<FileHeader fileName={fileName} />
				<div className="formBody">
					<Input
						placeholder="Enter encryption password"
						value={password}
						onChange={event =>
							this.setState({ password: event.target.value })
						}
					/>
					<Input
						placeholder="Confirm your password"
						value={confirmPassword}
						onChange={event =>
							this.setState({
								confirmPassword: event.target.value
							})
						}
						inErrorMode={displayMatchError}
					/>
					{displayMatchError ? (
						<span className="errorText">
							Error: Passwords don't match
						</span>
					) : null}
					<div className="buttonsWrapper">
						<PrimaryButton
							onClick={() => {
								if (password === confirmPassword) {
									onEncrypt(password);
								} else {
									this.setState({ displayMatchError: true });
								}
							}}
						>
							<img
								className="encryptIcon"
								src="./encryptIcon.svg"
							/>
							<span className="encryptButtonText">Encrypt</span>
						</PrimaryButton>
						<SecondaryButton onClick={onAbort}>
							<span className="abortButtonText">Abort</span>
						</SecondaryButton>
					</div>
				</div>
			</Fragment>
		);
	}
}