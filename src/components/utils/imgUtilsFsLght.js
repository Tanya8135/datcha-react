export const getImgForScreenSize = (photo) => {
    const width = window.innerWidth;

    if (width <= 768) {
        return photo.srcMobile;
    } else if (width <= 1024) {
        return photo.srcTablet;
    } else {
        return photo.srcDesktop;
    }
};