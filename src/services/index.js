export const apiKey = 'AIzaSyBG5D2GS_3grjsTEapa8wXo0lCHGyQk1N8';

export const getLocations = (lat, long) => {
	var url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json'),
		params = {
			location: `${lat}, ${long}`,
			key: apiKey,
			radius: 3200,
			type: 'restaurant'
		}

	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
	fetch(url, {
		mode: 'no-cors'
	}).then(res => {
		console.log(res);
	})

	
}