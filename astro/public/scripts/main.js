function htmlEncode(input) {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function copyToClipboard(id) {
    const preElement = document.getElementById(id);
    const textToCopy = preElement.textContent;
    console.log(textToCopy)
    navigator.clipboard.writeText(textToCopy)
    this.value = 'copied'
    alert('Code copied to clipboard!');
}

const codes = window.document.querySelectorAll('div')
codes.forEach((selector, index) => {
    if (selector.id === 'example') {
        selector.insertAdjacentHTML('beforeend', `<div><h3>Code <button onclick="copyToClipboard('copy-${index}')">Copy</button></h3><pre id="copy-${index}">${htmlEncode(selector.innerHTML)}</pre></div>`)
    }
    return selector
})