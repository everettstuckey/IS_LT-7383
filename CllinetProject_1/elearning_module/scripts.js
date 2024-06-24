
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
    