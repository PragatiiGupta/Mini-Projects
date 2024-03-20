import { useState } from "react";
import "./App.css";

function App() {
	const [color,setColor] = useState('white');
	const colors = ['black','red','green','pink','yellow','blue','orange'];
	const handleClick = () => {
		let randomIndex;
		do {
		  randomIndex = Math.floor(Math.random() * colors.length);
		} while (colors[randomIndex] === color);
	
		setColor(colors[randomIndex]);
	}
	return (
		<>
			<div style={{width:'500px',height:'250px',backgroundColor:color}}>
				<button style={{marginTop:'20%'}} onClick={handleClick}>Generate</button>
			</div>
		</>
	);
}

export default App;