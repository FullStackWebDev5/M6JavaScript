let currentOrderNumber = 1

const executeOrder = () => {
	let orderId = createOrderId()

	let item1 = document.getElementById('item-1').value
	let price1 = document.getElementById('price-1').value
	let item2 = document.getElementById('item-2').value
	let price2 = document.getElementById('price-2').value
	let item3 = document.getElementById('item-3').value
	let price3 = document.getElementById('price-3').value

	resetFields()

	let billDetails = [
		{
			item: item1,
			price: Number(price1),
		},
		{
			item: item2,
			price: Number(price2),
		},
		{
			item: item3,
			price: Number(price3),
		}
	]

	createOrderCard(orderId, billDetails)

	currentOrderNumber++

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

const resetFields = () => {
	document.getElementById('item-1').value = ''
	document.getElementById('price-1').value = ''
	document.getElementById('item-2').value = ''
	document.getElementById('price-2').value = ''
	document.getElementById('item-3').value = ''
	document.getElementById('price-3').value = ''
} 

const createOrderId = () => {
	let todaysDate = new Date()

	let temp = `MP${todaysDate.getFullYear()}${todaysDate.getMonth() + 1}${todaysDate.getDate()}`

	let numOfPreceedingZeroes = 3
	if(currentOrderNumber >= 10)
		numOfPreceedingZeroes = 2
	else if(currentOrderNumber >= 100)
		numOfPreceedingZeroes = 1
	else if(currentOrderNumber >= 1000)
		numOfPreceedingZeroes = 0
	
	while(numOfPreceedingZeroes--)
		temp = temp + '0'

	return `${temp}${currentOrderNumber}`
}