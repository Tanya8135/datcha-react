export const getImgForScreenSize = (photo, screenWidth) => {

    if (screenWidth <= 768) {
        return photo.srcMobile;
    } else if (screenWidth <= 1024) {
        return photo.srcTablet;
    } else {
        return photo.srcDesktop;
    }
};