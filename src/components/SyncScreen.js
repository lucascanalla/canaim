import React from 'react';
import axios from 'axios';

export const SyncScreen = () => {

	const url = process.env.REACT_APP_API_URL
	const requestOptions = {
		  method: 'POST',
		  redirect: 'follow'
		};

	const fetchApi = async() => {
		/*fetch("http://localhost:3977/api/from-client", requestOptions)
		  .then(response => response.text())
		  .then(result => console.log(result))
		  .catch(error => console.log('error', error));*/
		  //`${url}/from-client`
		const response =  await fetch(`${url}/from-client`, requestOptions);
		console.log(response.ok);   

	}

	const handleClick = (e) => {
        fetchApi();
    }


	return (
		<div className="row mt-25">
			<button className="btn btn-primary"
					onClick = { handleClick } >Sync</button>
		</div>
	)
}

