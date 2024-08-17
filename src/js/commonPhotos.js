const listCommonPhotos = [
    {
        srcSet: `${process.env.PUBLIC_URL}/images/mob/catalog/pouf/green_pouf@2_160.png 320w, ${process.env.PUBLIC_URL}/images/mob/catalog/pouf/green_pouf_160.png 160w`,
        sizes: "(min-width: 375px) 160px, 100vw",
        src: process.env.PUBLIC_URL + "/images/mob/catalog/pouf/green_pouf_160.png",
        alt: "Green pouf"
    },
    // {srcSet: `${process.env.PUBLIC_URL}/images`}
]

export default listCommonPhotos;