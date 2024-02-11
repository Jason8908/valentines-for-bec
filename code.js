let noClickCount = 0, beat = 0;
let yesStyles = {
    left: 3,
    right: 3,
    top: 1,
    button: 1,
    fontSize: 0.6
}
let noStyles = {
    left: 3,
    right: 3,
    top: 1,
    button: 1,
    fontSize: 0.6
}
const noText = [
    'No',
    'Are you sure?',
    "Are you sure you're sure",
    "Are you suuuuure that you're sure that you're sure?",
    'Please?',
    'Pretty please?',
    'Pretty please with icing on top?',
    "But I think we're a great match!",
    "The best match even.",
    "I'm gonna be very sad Bec...",
    "I'm gonna be very very sad Bec...",
    "I'm gonna be very very very sad Bec...",
    "I'm gonna be very very very very sad Bec..."
]
const beatSize = [
    1,
    1.2
]
const beating = setInterval(() => {
    let heart = document.getElementById("heart");
    if (heart === undefined || heart === null)
        return;
    beat++;
    heart.style.fontSize = `${beatSize[beat%beatSize.length]}em`;
}, 350);
const onClickYes = (yesButton) => {
    // Getting No Button
    let noButton = document.getElementById("btnNo");
    let text = document.getElementById("question");
    let gif = document.getElementById("myGif");
    // Changing styles.
    yesButton.style.display = 'None';
    noButton.style.display = 'None';
    text.innerHTML = "Yippee!!! I'm so glad to have you in my life. 💗";
    gif.src = "https://i.pinimg.com/originals/87/0d/7f/870d7fb339a65b7c9e08efbca8597f30.gif";
}
const onClickNo = (noButton) => {
    noClickCount++;
    // Scaling the paddings.
    yesStyles = scaleFontSize(scalePadding(yesStyles, 1.25), 1.4);
    noStyles = scalePadding(noStyles, 0.95);
    // Getting the yes button.
    let yesButton = document.getElementById('btnYes');
    // Setting paddings.
    setStyles(yesButton, yesStyles);
    setStyles(noButton, noStyles, true);
}
const scalePadding = (styles, scale) => {
    let result = {};
    for (const [key, value] of Object.entries(styles))
        if (key != 'fontSize')
            result[key] = value*scale;
        else
            result[key] = value;
    return result;
}
const scaleFontSize = (styles, scale) => {
    let result = {};
    for (const [key, value] of Object.entries(styles))
        if (key == 'fontSize')
            result[key] = value*scale;
        else
            result[key] = value;
    return result;
}
const setStyles = (elem, paddings, no = false) => {
    elem.style.paddingTop = `${paddings.top}%`;
    elem.style.paddingLeft = `${paddings.left}%`;
    elem.style.paddingRight = `${paddings.right}%`;
    elem.style.paddingBottom = `${paddings.bottom}%`;
    elem.style.fontSize = `${paddings.fontSize}em`;
    if (no)
        elem.innerHTML = noText[noClickCount%noText.length];
}