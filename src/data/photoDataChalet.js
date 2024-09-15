const photoDataChalet = [
    {
        id: 1,
        src: `${process.env.PUBLIC_URL}/images/photo/240/chalet.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/chalet.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/chalet.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/chalet.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/chalet@2.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/chalet@2.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/chalet@2.jpg 376w
        `,
        alt: 'Шале'
    },
    { id: 2, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/chalet1.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/chalet1.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/chalet1.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/chalet1.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/chalet1@2.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/chalet1@2.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/chalet1@2.jpg 376w
        `,
        alt: 'Шале' },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/chaletPhoto/ladder_chalet1.jpg`, alt: 'Сходи, шале, перший поверх' },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/chaletPhoto/first_floor.jpg`, alt: 'Перший поверх' },
    { id: 5, src: `${process.env.PUBLIC_URL}/images/chaletPhoto/kitchen_chalet.jpg`, alt: 'Кухня' },
    { id: 6, src: `${process.env.PUBLIC_URL}/images/chaletPhoto/second_floor.jpg`, alt: 'Другий поверх, шале' },
    { id: 7, src: `${process.env.PUBLIC_URL}/images/chaletPhoto/second_floor_bed.jpg`, alt: 'Другий поверх, ліжко, шале' },


]

export default photoDataChalet;