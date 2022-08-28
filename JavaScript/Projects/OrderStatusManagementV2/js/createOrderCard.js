let numberOfOrders = 0

const createOrderCard = (orderId, billDetails) => {
	let orderCardsWrapper = document.getElementById('order-cards-wrapper')

	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeader = document.createElement('div')
	let cancelBtn = document.createElement('i')
	let cardBody = document.createElement('div')
	let cardText2 = document.createElement('p')
	let statusBadge = document.createElement('span')
	let cardFooter = document.createElement('div')

	colDiv.classList = 'col-md-3 order-status-card'
	cardDiv.classList = 'card text-center'
	cardHeader.classList = 'card-header'
	cancelBtn.classList = 'fa-solid fa-xmark cancel-btn'
	cardBody.classList = 'card-body'
	cardText2.classList = 'card-text'
	statusBadge.classList = 'badge rounded-pill bg-success'
	cardFooter.classList = 'card-footer'

	cardHeader.innerHTML = `<span>Order ID: <b>${orderId}</b></span>`
	statusBadge.innerText ='First layer of cheeze added'
	cardFooter.innerText = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
  });

	statusBadge.id = orderId

	let billTable = createOrderCardBillTable(billDetails)

	cardHeader.appendChild(cancelBtn)
	cardDiv.appendChild(cardHeader)
	cardBody.appendChild(billTable)
	cardText2.appendChild(statusBadge)
	cardBody.appendChild(cardText2)
	cardDiv.appendChild(cardBody)
	cardDiv.appendChild(cardFooter)
	colDiv.appendChild(cardDiv)
	orderCardsWrapper.appendChild(colDiv)

	cancelBtn.addEventListener('click', () => {
		// orderCardsWrapper.removeChild(colDiv)
		colDiv.style.display = 'none'
		numberOfOrders--

		if(numberOfOrders === 0) {
			document.getElementById('empty-order-img').style.display = 'block'
		}
	})

	numberOfOrders++
}

{/* <div class="col-md-3 order-status-card">
	<div class="card text-center">
		<div class="card-header"><span>Order ID: <b>QWE202212</b></span><i class="fa-solid fa-xmark cancel-btn"></i>
		</div>
		<div class="card-body">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Item</th>
						<th scope="col">Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Medium Corn</td>
						<td>$5.00</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Large Mushroom</td>
						<td>$7.50</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Medium Paneer</td>
						<td>$4.75</td>
					</tr>
					<tr>
						<th colspan="2">Total</th>
						<td>$17.25</td>
					</tr>
				</tbody>
			</table>
			<p class="card-text"><span class="badge rounded-pill bg-success" id="QWE202212">Second layer of cheeze
					added</span></p>
		</div>
		<div class="card-footer">August 23, 2022 at 10:37:28 PM</div>
	</div>
</div> */}