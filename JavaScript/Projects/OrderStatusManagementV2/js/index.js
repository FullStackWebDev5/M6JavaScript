const executeOrder = () => {
	let orderId = document.getElementById('order-id-input').value
	document.getElementById('order-id-input').value = ''

	createOrderCard(orderId)

	document.getElementById(orderId).innerText = 'Order Placed'

	chefReceived(orderId)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderId).innerText = 'Package received at counter')
		.catch((err) => console.log(err))
}