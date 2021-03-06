import React, { Component, Fragment } from "react";
import "./FileUpload.css";

const { version } = require("../../package.json");
// const path = require("path");
// const packageJSON = path.dirname(require.resolve("deadbolt")) + "/package.json";
// const { version } = require(packageJSON);

export default class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onDragOver = event => {
		event.preventDefault();
		return false;
	};

	onClick = event => {
		this.refs.fileUploader.click();
	};

	render() {
		const { setFilePath } = this.props;

		return (
			<Fragment>
				<div
					className="fileUpload"
					onDragOver={this.onDragOver}
					onDragLeave={() => false}
					onDragEnd={() => false}
					onDrop={event => {
						event.preventDefault();
						let file = event.dataTransfer.files[0];

						return setFilePath(file);
					}}
					onClick={this.onClick}
				>
					<input
						type="file"
						ref="fileUploader"
						style={{ display: "none" }}
						onChange={event => {
							event.stopPropagation();
							event.preventDefault();
							let file = event.target.files[0];

							return setFilePath(file);
						}}
					/>
					<div className="fileUploadIcon">
						<img src="./dropFileIcon.svg" />
					</div>
					<span className="fileUploadText">Select or Drop</span>
				</div>
				<span className="versionTag">{`v${version}`}</span>
			</Fragment>
		);
	}
}
