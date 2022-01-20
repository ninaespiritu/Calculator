import React, { useState } from "react";
import { evaluate } from "mathjs";

export const Keypad = () => {
	const [result, setResult] = useState("");

	const handleClick = (e) => {
		setResult(result + e.target.id); // Or result.concat()
	};

	const clear = () => {
		setResult("");
	};

	const backspace = () => {
		setResult(result.slice(0, -1)); // Or (0, result.length - 1)
	};

	const equals = () => {
		try {
			setResult(evaluate(result));
		} catch (err) {
			setResult("Error");
		}
	};

	return (
		<div className="container">
			<div className="keypad">
				<form>
					<input type="text" value={result} />
				</form>
				<button id="clear" onClick={clear}>
					AC
				</button>
				<button id="backspace" onClick={backspace}>
					DEL
				</button>
				<button id="%" onClick={handleClick} className="percent">
					%
				</button>
				<button id="/" onClick={handleClick} className="operator">
					&divide;
				</button>
				<button id="1" onClick={handleClick}>
					1
				</button>
				<button id="2" onClick={handleClick}>
					2
				</button>
				<button id="3" onClick={handleClick}>
					3
				</button>
				<button id="*" onClick={handleClick} className="operator">
					&times;
				</button>
				<button id="4" onClick={handleClick}>
					4
				</button>
				<button id="5" onClick={handleClick}>
					5
				</button>
				<button id="6" onClick={handleClick}>
					6
				</button>
				<button id="-" onClick={handleClick} className="operator">
					&ndash;
				</button>
				<button id="7" onClick={handleClick}>
					7
				</button>
				<button id="8" onClick={handleClick}>
					8
				</button>
				<button id="9" onClick={handleClick}>
					9
				</button>
				<button id="+" onClick={handleClick} className="operator">
					+
				</button>
				<button id="." onClick={handleClick}>
					.
				</button>
				<button id="0" onClick={handleClick}>
					0
				</button>
				<button id="equals" onClick={equals}>
					=
				</button>
			</div>
		</div>
	);
};