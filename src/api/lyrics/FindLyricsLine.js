export const findLyricsLine = (lyrics, time) => {
    let low = 0;
    let high = lyrics.length - 1;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (lyrics[middle].milliseconds <= time) {
            if (middle === lyrics.length - 1 || lyrics[middle + 1].milliseconds > time) {
                return middle;
            }

            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return null;
}