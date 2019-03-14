index = (function () {
    var template =
        `<div id="content-pane"></div>`
    return {
        initialize: function () {
            var content = Fusion.htmlToDOMElement(template)
            Fusion.addJS('src/components/card/card.js')
            setTimeout(function () {
                content.querySelector('.content-pane').innerHTML = card.initialize({}).innerHTML;
                document.getElementById('root').innerHTML = content.innerHTML
            }, 30)
        }
    }
}())