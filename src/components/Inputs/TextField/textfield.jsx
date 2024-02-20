import Joi from "joi";
import ClearIcon from "@mui/icons-material/Clear";
import "./textfield.css"


const TextField = ({
	label,
	error,
	handleInputState,
	handleErrorState,
	schema,
	...rest
}) => {
	const validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const inputSchema = Joi.object({ [name]: schema });
		const { error } = inputSchema.validate(obj);
		return error ? error.details[0].message : "";
	};

	const handleChange = ({ currentTarget: input }) => {
		if (schema) {
			const errorMessage = validateProperty(input);
			if (handleErrorState) handleErrorState(input.name, errorMessage);
		}
		handleInputState(input.name, input.value);
	};

	return (
		<div className="container">
			<p className="label">{label}</p>
			<input
				{...rest}
				onChange={handleChange}
				className={
					error ? "input error":"input"
				}
			/>
			{error && (
				<p className="error_msg">
					<ClearIcon /> {error}
				</p>
			)}
		</div>
	);
};

export default TextField;