import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { MdAdd } from 'react-icons/md';
import { IoWarning } from 'react-icons/io5';

const max_len = 200;

const InputModal = ({ inputnotesHandler }) => {
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const [messagelen, setmessagelen] = useState(200);
	const [danAlert, setDanAlert] = useState(false);

	const calculate = (len) => {
		const check = max_len - len;
		setmessagelen(check);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (title.trim().length === 0 || message.trim().length === 0) {
			setDanAlert(true);
		} else {
			console.log();
			inputnotesHandler({
				title,
				text: message,
				id: nanoid(),
				updatedate: new Date(),
			});
			setTitle('');
			setMessage('');
			setmessagelen(200);
		}
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-primary mx-3"
				data-bs-toggle="modal"
				data-bs-target="#staticBackdrop"
			>
				<MdAdd className="mb-1" />
				Add a New Note
			</button>

			<div
				className="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								New Note
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							{danAlert && (
								<div
									className="alert alert-warning alert-dismissible fade show"
									role="alert"
								>
									<IoWarning className="mb-1 mx-1" />
									<strong>Holy guacamole!</strong> You should check in on some
									of those fields below.
									<button
										type="button"
										className="btn-close"
										tabIndex="-1"
										data-bs-dismiss="alert"
										aria-label="Close"
										onClick={() => setDanAlert(false)}
									></button>
								</div>
							)}
							<form onSubmit={submitHandler}>
								<div className="mb-3">
									<label htmlFor="recipient-name" className="col-form-label">
										Add Title
									</label>
									<input
										type="text"
										className="form-control"
										id="recipient-name"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="message-text" className="col-form-label">
										Message:
									</label>
									<textarea
										className="form-control"
										id="message-text"
										value={message}
										maxLength="200"
										onChange={(e) => {
											calculate(e.target.value.length);
											setMessage(e.target.value);
										}}
									></textarea>
									<div className="d-flex justify-content-end">
										<small className="mx-2 mt-1">
											{messagelen}/200 characters left
										</small>
									</div>
								</div>
								<div className="modal-footer pt-1">
									<button
										type="button"
										className="btn btn-outline-danger"
										data-bs-dismiss="modal"
										onClick={() => {
											setmessagelen(200);
											setTitle('');
											setMessage('');
										}}
									>
										Cancel
									</button>
									<button
										type="button"
										className="btn btn-outline-warning"
										onClick={() => {
											setmessagelen(200);
											setTitle('');
											setMessage('');
										}}
									>
										Reset
									</button>
									<button
										type="submit"
										className="btn btn-primary"
										data-bs-dismiss="modal"
									>
										Add
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InputModal;
