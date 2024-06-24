
function changeState(state) {
    const waterImage = document.getElementById('waterState');
    if (state === 'freeze') {
        waterImage.src = 'assets/ice.jpg';
        waterImage.alt = 'Ice';
    } else if (state === 'room') {
        waterImage.src = 'assets/water.jpg';
        waterImage.alt = 'Room Temperature Water';
    } else if (state === 'boil') {
        waterImage.src = 'assets/boiling.jpg';
        waterImage.alt = 'Boiling Water';
    }
}
function speakText(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1; // Speed of the speech
    utterance.pitch = 1; // Pitch of the speech
    utterance.volume = 1; // Volume of the speech
    speechSynthesis.speak(utterance);
}

function narratePage() {
    const pageContent = document.querySelector('main').innerText;
    speakText(pageContent);
}
