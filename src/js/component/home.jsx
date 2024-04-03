import React, { useState } from "react";
// import Tarea from "./Tarea"

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");

	const [todoList, setTodoList] = useState([]);

	//https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl
	const deleteByIndex = (index) => {
		setTodoList(todoList => {
			return todoList.filter((_, i) => i !== index)
		})
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">lista de tareas</h1>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<input type="text" className="border-0 text-center" placeholder="Añade una tarea"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodoList(todoList => [...todoList, inputValue]);
								setInputValue("");
							}
						}
						}
					/>
				</li>

				{todoList.length === 0 ? <li className="list-group-item">Añade una tarea</li> :
					todoList.map((tarea, index) => {
						return <li className="list-group-item" key={index}>{tarea}
							<span
								className="ms-2 badge text-bg-secondary"
								// onClick={() => delete todoList[index]}
								onClick={() => deleteByIndex(index)}
							>X</span>
						</li>;
					})
				}


			</ul>
		</div>
	);
};

export default Home;
