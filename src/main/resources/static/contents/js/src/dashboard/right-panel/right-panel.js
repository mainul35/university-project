rightPanel = (function () {
    var template = `
    <div id="right-panel" class="right-panel">
        <div class="breadcrumbs"></div><!-- Header-->
        <div class="content mt-3"></div> <!-- .content -->
    </div>`
    return {
        template: template,
        initialize: function (container) {
            var content = Fusion.htmlToDOMElement(template)
            Fusion.addCSS('src/dashboard/right-panel/right-panel.css')
            Fusion.addJS('src/dashboard/breadcrumbs/breadcrumbs.js')
            rightPanel.template = container.querySelector('.dashboard').innerHTML = content.querySelector('body').innerHTML
            setTimeout(function () {
                breadcrumbs.initialize(container)
            }, 100)
        }
    }
}())