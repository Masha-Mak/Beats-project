let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.752004, 37.576133],
        zoom: 13,
        controls: []
    });

    const coords = [
        [55.747504, 37.581093],
        [55.747765, 37.605615],
        [55.75844, 37.621659],
        [55.761392, 37.583569]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./images/icons/marker.svg",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);