/**
 *
 * @param {HTMLElement} e
 * @param {string} className
 */
function DisplayControl(e, className) {
    let elements = document.querySelectorAll(`.${className}`);
    if (e.getAttribute('value').slice(-3) === '숨기기') {
        e.setAttribute('value', `${e.dataset.title} 보이기`);
        for (let element of elements) {
            element.style.display = 'none';
        }
    } else {
        e.setAttribute('value', `${e.dataset.title} 숨기기`);
        for (let element of elements) {
            element.style.display = 'block';
        }
    }
}
