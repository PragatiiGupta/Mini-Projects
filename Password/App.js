import { useState } from "react";
function App() {
	const [decor,setDecor] = useState('line-through');
	const[showPassword, setShowPassword] = useState(false);
	const handleClick = () => {
		setShowPassword(!showPassword);
		setDecor(showPassword ? 'line-through' : 'none');
	}

	return (
		<>
			<div style={{display: 'flex', alignItems: 'center'}}>
				<h3 style={{margin:'10px'}}>Password</h3>
				<input type={showPassword?'text':'password'} />
				<h3 style={{cursor: 'pointer',textDecoration: decor}} onClick={handleClick}>👁</h3>
			</div>
		</>
	);
}

export default App;