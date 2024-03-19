import React, { useState } from "react";

function App() {
	const accordion = [
        { id: 1, heading: "Heading 1", content: "Content of the accordion 1" },
        { id: 2, heading: "Heading 2", content: "Content of the accordion 2" },
        { id: 3, heading: "Heading 3", content: "Content of the accordion 3" }
    ];
	const [open,setOpen] = useState(null);
	const handleClick = (id) => {
		setOpen((prevState) => prevState === id ? null : id )
	}
	return (
			<div style={{ marginLeft:'30px', display: 'flex', width: '350px', flexDirection: 'column' }}>
				{accordion.map((accord) => (
					<React.Fragment key={accordion.id}>
						<button style={{marginTop:'10px'}} onClick={() => handleClick(accord.id)}>{accord.heading}</button>
						{open === accord.id && <div style={{textAlign:'center'}}>{accord.content}</div>}
					</React.Fragment>
				))}
			</div>

	);
}