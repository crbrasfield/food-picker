// export const apiKey = 'AIzaSyBG5D2GS_3grjsTEapa8wXo0lCHGyQk1N8';

// export const getLocations = (lat, long) => {
// 	var url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json'),
// 		params = {
// 			location: `${lat}, ${long}`,
// 			key: apiKey,
// 			radius: 3200,
// 			type: 'restaurant'
// 		}

// 	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
	
// 	return fetch(url, {
// 		mode: 'no-cors'
// 	})
// 	.then(response => {
// 		return response.json();
// 	})
// 	.then(data => {
// 			return data;
// 	})
// 	.catch(error => {
// 			return error;
// 	});
// }

const map = new window.google.maps.Map(document.createElement('div'))
const service = new window.google.maps.places.PlacesService(map);

export const getLocations = (lat, long, callback) => {
	var location = new window.google.maps.LatLng(lat, long);

	const resultAggregate = [];


	return service.nearbySearch({
		location,
		radius: 1500,
		type: ['restaurant']
	}, (results, status, pagination) => {
		if (pagination.hasNextPage) {
			resultAggregate.push(...results);
			pagination.nextPage()
		} else {
			// console.log(resultAggregate);
			callback(resultAggregate);
		}
	})
}