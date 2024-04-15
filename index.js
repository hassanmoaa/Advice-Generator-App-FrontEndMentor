const id = document.getElementById(adviceNumber);
const quote = document.getElementById(Quote);
const dice = document.getElementById(Dice);

async function fetchRandomAdvice() {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	console.log(data);
	id.innerHTML = `${data.slip.id}`;
	quote.innerHTML = `"${data.slip.advice}"`.catch((error) => {
		console.error('Error fetching advice:', error);
		return null;
	});

	// Function to update the advice
function updateAdvice() {
    fetchRandomAdvice().then(advice => {
        if (advice) {
            id.innerHTML = `${data.slip.id}`
            quote.innerHTML = `"${data.slip.advice}"`;
        }
    });
};

// Initial advice loading
updateAdvice();

// Event listener for dice click
dice.addEventListener('click', updateAdvice);
