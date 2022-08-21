const chefReceived = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Chef Received'
			resolve(orderId)
		}, 2000)
	})
}

const pizzaSauceAdded = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Pizza Sauce added'
			resolve(orderId)
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'First layer of cheeze added'
			resolve(orderId)
		}, 5000)
	})
}

const toppingsAdded = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Toppings added'
			resolve(orderId)
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Second layer of cheeze added'
			resolve(orderId)
		}, 5000)
	})
}

const pizzaBaked = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Pizza baked!'
			resolve(orderId)
		}, 15000)
	})
}

const oreganoAddedAndPacked = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Oregano added and packed'
			resolve(orderId)
		}, 8000)
	})
}

const packageReceivedAtCounter = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Package received at counter'
			resolve()
		}, 2000)
	})
}