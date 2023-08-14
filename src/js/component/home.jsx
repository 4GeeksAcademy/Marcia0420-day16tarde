import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState([])

	function envioTarea(e) {
		e.preventDefault()
		setLista([...lista, tarea])
		setTarea("")
	}

	function eliminar(id) {
		let nuevasTareas = []
		nuevasTareas = lista.filter((item, index) => {
			if (index !== id) {
				return item
			}
		})
		setLista(nuevasTareas)
	}

	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">to do list!</h1>

			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">tareas</label>
				<input type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					value={tarea}
					onChange={(e) => setTarea(e.target.value)}
				/>
				<br />
				<button className="btn btn-success" onClick={(e) => envioTarea(e)}> agregar tarea</button>
				<br />
				<ul className="list-group">
					{lista.map((item, id) => (
						<li className="list-group-item" key={id}>
							{item}
							<button className="btn btn-outline-success float-end"
							onClick={()=>eliminar(id)}>
								X
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
