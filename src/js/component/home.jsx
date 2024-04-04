import React, { useState } from "react";
// import Tarea from "./Tarea"

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");

	const [todoList, setTodoList] = useState([]);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center text-center w-50 m-auto">
			<h1 className="text-center mt-5">lista de tareas</h1>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<input type="text" className="border-0 text-center" placeholder="Añade una tarea"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodoList(todoList.concat(inputValue));
								setInputValue("");
							}
						}
						}
					/>
				</li>

				{todoList.length === 0 ?
					<li className="list-group-item">No hay tareas pendientes</li> :
					todoList.map((tarea, index) => {
						return <li className="list-group-item text-start" key={index}>
							<span
								className="me-2 badge text-bg-secondary"

								onClick={() => setTodoList(
									todoList.filter(
										(todo, currentTodoIndex) => index != currentTodoIndex
									)
								)}
							>X</span>
							{tarea}
						</li>;
					})

				}
				{todoList.length > 0 ? <li className="list-group-item">c{todoList.length} tareas pendientes</li> : ""}


			</ul>
		</div >
	);
};

export default Home;
