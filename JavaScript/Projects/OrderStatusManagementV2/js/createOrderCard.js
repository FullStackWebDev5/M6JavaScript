const createOrderCard = (orderId) => {
	let orderCardsWrapper = document.getElementById('order-cards-wrapper')

	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeader = document.createElement('div')
	let cancelBtn = document.createElement('i')
	let cardBody = document.createElement('div')
	let cardText1 = document.createElement('p')
	let cardText2 = document.createElement('p')
	let statusBadge = document.createElement('span')
	let cardFooter = document.createElement('div')

	let billTable = document.createElement('table')
	let billTableHeader = document.createElement('thead')
	let billTableRows = []

	let billDetails = [
    {
      item: "Medium Corn",
      price: "$5.00",
    },
    {
      item: "Large Mushroom",
      price: "$7.50",
    },
    {
      item: "Medium Paneer",
      price: "$4.75",
    },
  ];

	for(let i = 0; i < 5; i++){
		billTableRows.push(document.createElement('tr'))
		let billTableColumns = []
		for(let j = 0; j < 3; j++) {
			if(i === 0) {
				billTableColumns.push(document.createElement('th'))
			} else {
				billTableColumns.push(document.createElement('td'))
			}
		}
		if(i === 0){
			billTableColumns[0].innerText = '#'
			billTableColumns[1].innerText = 'Item'
			billTableColumns[2].innerText = 'Price'
		} else if (i != 4) {
			console.log(i)
			billTableColumns[0].innerText = i
			billTableColumns[1].innerText = billDetails[i - 1].item
			billTableColumns[2].innerText = billDetails[i - 1].price
		}
		billTableRows[i].append(...billTableColumns)
	}

	colDiv.classList = 'col-md-3 order-status-card'
	cardDiv.classList = 'card text-center'
	cardHeader.classList = 'card-header'
	cancelBtn.classList = 'fa-solid fa-xmark cancel-btn'
	cardBody.classList = 'card-body'
	billTable.classList = 'table'
	cardText1.classList = 'card-text'
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

	cardHeader.appendChild(cancelBtn)
	cardDiv.appendChild(cardHeader)
	cardText1.appendChild(billTable)
	billTableHeader.append(...billTableRows)
	billTable.appendChild(billTableHeader)
	cardBody.appendChild(cardText1)
	cardText2.appendChild(statusBadge)
	cardBody.appendChild(cardText2)
	cardDiv.appendChild(cardBody)
	cardDiv.appendChild(cardFooter)
	colDiv.appendChild(cardDiv)
	orderCardsWrapper.appendChild(colDiv)

	cancelBtn.addEventListener('click', () => {
		// orderCardsWrapper.removeChild(colDiv)
		colDiv.style.display = 'none'
	})
}

/* <div class="col-md-3 order-status-card">
	<div class="card text-center">
		<div class="card-header">
			<span>Order ID: <b>shbjdkms</b></span>
			<i class="fa-solid fa-xmark"></i>
		</div>
		<div class="card-body">
			<p class="card-text">
				<table class="table">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Item</th>
						<th scope="col">Price</th>
					</tr>
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
				</table>
			</p>
			<p class="card-text"><span class="badge rounded-pill bg-success" id="QWE202212">Second layer of cheeze
					added</span></p>
		</div>
		<div class="card-footer">August 23, 2022 at 09:50:51 PM</div>
	</div>
</div> */