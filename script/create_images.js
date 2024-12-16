let arr = [{
    image: 'images/gal1.jpg',
    alt: 'Gallery Image 1'
}, {
    image: 'images/gal2.jpeg',
    alt: 'Gallery Image 2'
}, {
    image: 'images/gal3.jpg',
    alt: 'Gallery Image 3'
}, {
    image: 'images/gal4.jpg',
    alt: 'Gallery Image 4'
}];


renderImage();
function renderImage() {
    let imagesHTML = '';
  
    arr.forEach((image) => {
        imagesHTML += `
        <div class="gallery-item">
            <img src="${image.image}" alt="${image.alt}">
        </div>
      `;
    });

    document.querySelector('.grid-gallery').innerHTML = imagesHTML;
}