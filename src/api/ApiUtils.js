export const getImageLink = (imagesList) => {
    if (!imagesList || imagesList?.length === 0) {
        return ''
    }

    return imagesList?.filter(e => e.width < 512)[0].url ?? imagesList[0].url
}