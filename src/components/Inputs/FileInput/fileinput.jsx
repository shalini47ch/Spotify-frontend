import { useRef } from "react";
import Button from "../../Button/button"
import "./fileinput.css"

const FileInput = ({
	name,
	label,
	value,
	icon,
	type,
	handleInputState,
	...rest
}) => {
	const inputRef = useRef();

	return (
		<div className="file-container">
			<input
				type="file"
				ref={inputRef}
				onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
				value={value}
				{...rest}
			/>
			<Button
				style={{
					width: "15rem",
				}}
				onClick={() => inputRef.current.click()}
				label={label}
			/>
			{type === "image" && value && (
				<img
					src={typeof value === "string" ? value : URL.createObjectURL(value)}
					alt="file"
				/>
			)}
			{type === "audio" && value && (
				<audio
					src={typeof value === "string" ? value : URL.createObjectURL(value)}
					controls
				/>
			)}
			<Button label="Upload" style={{ width: "10rem" }} />
		</div>
	);
};

export default FileInput;