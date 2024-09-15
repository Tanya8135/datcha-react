const photoDataCommon = [
    {
        id: 1,
        src: `${process.env.PUBLIC_URL}/images/photo/240/altanka1.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/altanka1.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/altanka1.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/altanka1.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/altanka1@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/altanka1@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/altanka1@2.jpg 752w
        `,
        alt: 'Альтанка'
    },
    {
        id: 2,
        src: `${process.env.PUBLIC_URL}/images/photo/240/altanka2.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/altanka2.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/altanka2.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/altanka2.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/altanka2@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/altanka2@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/altanka2@2.jpg 752w
    `,
        alt: 'Альтанка'
    },
    {
        id: 3,
        src: `${process.env.PUBLIC_URL}/images/photo/240/altanka3.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/altanka3.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/altanka3.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/altanka3.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/altanka3@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/altanka3@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/altanka3@2.jpg 752w
        `,
        alt: 'Альтанка'
    },
    {
        id: 4,
        src: `${process.env.PUBLIC_URL}/images/photo/240/altanka2_5.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/altanka2_5.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/altanka2_5.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/altanka2_5.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/altanka2_5@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/altanka2_5@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/altanka2_5@2.jpg 752w
        `,
        alt: 'Альтанка'
    },
    {
        id: 5,
        src: `${process.env.PUBLIC_URL}/images/photo/240/alley3.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/alley3.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley3.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley3.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/alley3@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley3@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley3@2.jpg 752w
        `,
        alt: 'Алея'
    },
    {
        id: 6,
        src: `${process.env.PUBLIC_URL}/images/photo/240/alley4.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/alley4.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley4.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley4.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/alley4@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley4@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley4@2.jpg 752w
        `,
        alt: 'Алея'
    },
    {
        id: 7,
        src: `${process.env.PUBLIC_URL}/images/photo/240/alley5.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/alley5.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley5.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley5.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/alley5@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley5@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley5@2.jpg 752w
        `,
        alt: 'Алея'
    },
    {
        id: 8,
        src: `${process.env.PUBLIC_URL}/images/photo/240/alley6.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/alley6.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley6.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley6.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/alley6@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley6@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley6@2.jpg 572w,
        `,
        alt: 'Алея'
    },
    {
        id: 9,
        src: `${process.env.PUBLIC_URL}/images/photo/240/alley7.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/alley7.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley7.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley7.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/alley7@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/alley7@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/alley7@2.jpg 572w,
        `,
        alt: 'Алея'
    },
    {
        id: 10,
        src: `${process.env.PUBLIC_URL}/images/photo/240/cottage.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/cottage.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/cottage.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/cottage.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/cottage@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/cottage@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/cottage@2.jpg 572w,
        `,
        alt: 'Будиночек'
    },
    {
        id: 11,
        src: `${process.env.PUBLIC_URL}/images/photo/240/cottage2.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/cottage2.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/cottage2.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/cottage2.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/cottage2@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/cottage2@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/cottage2@2.jpg 572w,
        `,
        alt: 'Будиночек'
    },
    {
        id: 12,
        src: `${process.env.PUBLIC_URL}/images/photo/240/cottage3.jpg`,
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/cottage3.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/cottage3.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/cottage3.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/cottage3@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/cottage3@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/cottage3@2.jpg 572w,
        `,
        alt: 'Будиночек'
    },
    {
        id: 13, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/cottage4.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/cottage4.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/cottage4.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/cottage4.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/cottage4@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/cottage4@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/cottage4@2.jpg 572w,
        `,
        alt: 'Будиночек'
    },
    {
        id: 14, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/fishing.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/fishing.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/fishing.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/fishing.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/fishing@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/fishing@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/fishing@2.jpg 572w,
        `,
        alt: 'Риболовля'
    },
    {
        id: 15, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/fishing_gear.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/fishing_gear.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/fishing_gear.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/fishing_gear.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/fishing_gear@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/fishing_gear@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/fishing_gear@2.jpg 572w,
        `,
        alt: 'Риболовля, снасті'
    },
    {
        id: 16, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/grill.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/grill.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/grill.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/grill.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/grill@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/grill@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/grill@2.jpg 572w,
        `,
        alt: 'Мангал'
    },
    {
        id: 17, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/kitchen.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/kitchen.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/kitchen.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/kitchen.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/kitchen@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/kitchen@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/kitchen@2.jpg 572w,
        `,
        alt: 'Кухня'
    },
    {
        id: 18, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/pier.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/pier.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/pier.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/pier.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/pier@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/pier@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/pier@2.jpg 572w,
        `,
        alt: 'Пірс'
    },
    {
        id: 19, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/pier_sunset.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/pier_sunset.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/pier_sunset.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/pier_sunset.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/pier_sunset@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/pier_sunset@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/pier_sunset@2.jpg 572w,
        `,
        alt: 'Пірс, схід сонця'
    },
    {
        id: 20, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/room.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/room.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/room.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/room.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/room@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/room@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/room@2.jpg 572w,
        `,
        alt: 'Кімната'
    },
    {
        id: 21, 
        src: `${process.env.PUBLIC_URL}/images/photo/240/view.jpg`, 
        srcSet: `
        ${process.env.PUBLIC_URL}/images/photo/240/view.jpg 240w,
        ${process.env.PUBLIC_URL}/images/photo/341/view.jpg 341w,
        ${process.env.PUBLIC_URL}/images/photo/376/view.jpg 376w,
        ${process.env.PUBLIC_URL}/images/photo/240/view@2.jpg 480w,
        ${process.env.PUBLIC_URL}/images/photo/341/view@2.jpg 682w,
        ${process.env.PUBLIC_URL}/images/photo/376/view@2.jpg 572w,
        `,
        alt: 'Вид з будиночку'
    },
]

export default photoDataCommon;