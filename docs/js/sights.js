import Alpine from 'alpinejs'
 
window.Alpine = Alpine

Alpine.data("sights", () => ({
    sights: [
        {
            name: "Látnivaló 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius minima molestiae beatae natus voluptate vel facere aliquid harum! Facere vero deserunt rerum. Architecto error pariatur expedita beatae! Nam, minus rem!",
            image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
            link: "https://www.google.com",
        },
        {
            name: "Látnivaló 2",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius minima molestiae beatae natus voluptate vel facere aliquid harum! Facere vero deserunt rerum. Architecto error pariatur expedita beatae! Nam, minus rem!",
            image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
            link: "https://www.google.com",
        }
    ],
}))

Alpine.start()
