const id = document.querySelector('#adviceNumber');
const quote = document.querySelector('#Quote');
const dice = document.querySelector('#Dice');

async function fetchRandomAdvice() {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	console.log(data);
	id.innerHTML = `${data.slip.id}`;
	quote.innerHTML = `"${data.slip.advice}"`;
}

// Function to update the advice
function updateAdvice() {
	fetchRandomAdvice().then((advice) => {
		if (advice) {
			id.innerHTML = `${data.slip.id}`;
			quote.innerHTML = `"${data.slip.advice}"`;
		}
	});
}

// Initial advice loading
updateAdvice();

// Event listener for dice click
dice.addEventListener('click', updateAdvice);
