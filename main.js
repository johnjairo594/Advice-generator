const API_URL = 'https://api.adviceslip.com/advice';
const adviceId = document.getElementById('adviceId')
const adviceText = document.getElementById('adviceText')

async function getAdvice() {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (res.status != 200) {
        adviceText.innerText = `Hubo un error ${res.status}`
    } else {
        adviceId.innerText = `${data.slip.id}`
        adviceText.innerText = `"${data.slip.advice}"`
    }
}

getAdvice();