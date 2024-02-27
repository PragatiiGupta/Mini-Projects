let container = document.querySelector("#container");
let currentZoom = 1;
const minZoom = 1;
const maxZoom = 3;
const stepSize = 0.1;

container.addEventListener("wheel",(e) => {
    let direction = e.deltaY > 0 ? -1 : 1;
    zoom(direction);

});

const zoom = (direction) => {
    let newZoom = currentZoom + direction * stepSize;
    if(newZoom > maxZoom || newZoom < minZoom)
    return;
    currentZoom = newZoom;

    let image = document.querySelector('#img'); 
    image.style.transform = 'scale(' + currentZoom + ')'; 
}
