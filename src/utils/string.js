export const capitalizeEachWord = (text) => {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

export const removeHyphens = (text) => {
    const words = text.replace("-"," ");
    return words
}