const executeOrder = () => {
	console.log('Order placed')
	let orderId = document.getElementById('order-id-input').value
	console.log(orderId)
	document.getElementById('order-id-input').value = ''
}

































const chefReceived = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Chef received the order and started preparing')
			resolve()
		}, 2000)
	})
}

const pizzaSauceAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Pizza Sauce added')
			resolve()
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('First layer of cheeze added')
			resolve()
		}, 5000)
	})
}

const toppingsAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Toppings added')
			resolve()
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Second layer of cheeze added')
			resolve()
		}, 5000)
	})
}

const pizzaBaked = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Pizza baked!')
			resolve()
		}, 15000)
	})
}

const oreganoAddedAndPacked = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Oregano added and packed')
			resolve()
		}, 8000)
	})
}

const packageReceivedAtCounter = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Package received at counter')
			resolve()
		}, 2000)
	})
}

// const executeOrder = () => {
// 	console.log('Order placed')
// 	chefReceived()
// 		.then(pizzaSauceAdded)
// 		.then(firstLayerOfCheezeAdded)
// 		.then(toppingsAdded)
// 		.then(secondLayerOfCheezeAdded)
// 		.then(pizzaBaked)
// 		.then(oreganoAddedAndPacked)
// 		.then(packageReceivedAtCounter)
// 		.then(() => console.log('The order is ready and handed over to the Zomato delivery guy!'))
// 		.catch((err) => console.log(err))
// }