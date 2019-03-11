dashboard = (function () {
    var template = `
       <div class="dashboard"></div>
    `
    return {
        content: template,
        initialize: function (container) {
            var content = Fusion.htmlToDOMElement(template)
            Fusion.addCSS('src/dashboard/dashboard.css')
            Fusion.addJS('src/dashboard/right-panel/right-panel.js')
            dashboard.content = container.innerHTML = content.querySelector('body').innerHTML
            setTimeout(function () {
                rightPanel.initialize(container)
            }, 100)
        }
    }
}())