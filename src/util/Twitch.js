let client_id='7j2vmr1mefogyx4249drtvvarov66h';

let Twitch = {	  
	  getFeaturedStreamers() {

	    return fetch(`https://api.twitch.tv/kraken/streams/featured?client_id=${client_id}`).then(response => {
	    	if(response.ok) {
	    		return response.json();
	    	} else {
	    		throw new Error('Get stream API request failed');
	    	}
	    }).then(jsonResponse => {
	    	console.log(jsonResponse.featured);
	    	return jsonResponse.featured;
	    });
	  },
}

export { Twitch }