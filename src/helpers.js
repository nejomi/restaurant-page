function appendElements (element, childs) {
    childs.forEach(child => {
        element.appendChild(child);
    })
}

export default appendElements;