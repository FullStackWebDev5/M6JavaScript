const executeOrder = () => {
	let orderId = document.getElementById('order-id-input').value
	document.getElementById('order-id-input').value = ''

	let orderCardsWrapper = document.getElementById('order-cards-wrapper')

	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeader = document.createElement('div')
	let cardBody = document.createElement('div')
	let cardText1 = document.createElement('p')
	let cardText2 = document.createElement('p')
	let cardText3 = document.createElement('p')
	let statusBadge = document.createElement('span')
	let cardFooter = document.createElement('div')

	colDiv.classList = 'col-md-3 order-status-card'
	cardDiv.classList = 'card text-center'
	cardHeader.classList = 'card-header'
	cardBody.classList = 'card-body'
	cardText1.classList = 'card-text'
	cardText2.classList = 'card-text'
	cardText3.classList = 'card-text'
	statusBadge.classList = 'badge rounded-pill bg-success'
	cardFooter.classList = 'card-footer'

	cardHeader.innerHTML = `Order ID: <b>${orderId}</b>`
	cardText1.innerText = 'Medium Size Pizza - 2 Nos'
	cardText2.innerHTML = 'Bill Amount: <b>$22</b>'
	statusBadge.innerText ='First layer of cheeze added'
	cardFooter.innerText = '18-08-2022 10:24 PM'

	cardDiv.appendChild(cardHeader)
	cardBody.appendChild(cardText1)
	cardBody.appendChild(cardText2)
	cardBody.appendChild(cardText3)
	cardText3.appendChild(statusBadge)
	cardDiv.appendChild(cardBody)
	cardDiv.appendChild(cardFooter)
	colDiv.appendChild(cardDiv)
	orderCardsWrapper.appendChild(colDiv)
}

// <div class="col-md-3 order-status-card">
// 	<div class="card text-center">
// 		<div class="card-header">
// 			Order ID: <b>MP202200001</b>
// 		</div>
// 		<div class="card-body">
// 			<p class="card-text">Medium Size Pizza - 2 Nos</p>
// 			<p class="card-text">Bill Amount: <b>$22</b></p>
// 			<p class="card-text">
// 				<span class="badge rounded-pill bg-success">First layer of cheeze added</span>
// 			</p>
// 		</div>
// 		<div class="card-footer">
// 			18-08-2022 10:24 PM
// 		</div>
// 	</div>
// </div>