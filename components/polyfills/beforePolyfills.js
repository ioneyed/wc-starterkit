var makeTemplate = function (strings, ...substs) {
    let html = '';
    for (let i = 0; i < substs.length; i++) {
        html += strings[i];
        html += substs[i];
    }
    html += strings[strings.length - 1];
    let template = document.createElement('template');
    template.innerHTML = html;
    return template;
};