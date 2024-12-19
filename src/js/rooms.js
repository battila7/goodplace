import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
 
window.Alpine = Alpine

Alpine.plugin(focus)

Alpine.data("rooms", () => ({
    rooms: [
        {
            name: "Szoba 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius minima molestiae beatae natus voluptate vel facere aliquid harum! Facere vero deserunt rerum. Architecto error pariatur expedita beatae! Nam, minus rem!"
        },
        {
            name: "Szoba 2",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius minima molestiae beatae natus voluptate vel facere aliquid harum! Facere vero deserunt rerum. Architecto error pariatur expedita beatae! Nam, minus rem!"
        }
    ],
}))
 
Alpine.data("gallery", () => ({
    imageGalleryOpened: false,
    imageGalleryActiveUrl: null,

    imageColumns: [
        [
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
                title: "Reggeli"
            },
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
                title: "Ebéd"
            },
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
                title: "Vacsora"
            },
        ],
        [
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
                title: "Kint"
            },
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
                title: "Bent"
            },
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
                title: "Fent"
            },
        ],
    ],

    imageGalleryOpen(el) {
        const imageElement = el.querySelector('img');

        this.imageGalleryActiveUrl = imageElement.src;
        this.imageGalleryOpened = true;
    },
    imageGalleryClose() {
        this.imageGalleryOpened = false;
        setTimeout(() => this.imageGalleryActiveUrl = null, 300);
    },
}))

Alpine.start()
