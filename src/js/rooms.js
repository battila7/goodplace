import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
 
window.Alpine = Alpine

Alpine.plugin(focus)
 
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
        [
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
                title: "A"
            },
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
                title: "B"
            },
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
                title: "C"
            },
        ],
        [
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
                title: "A"
            },
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
                title: "B"
            },
            {
                src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
                title: "C"
            },
        ]
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
