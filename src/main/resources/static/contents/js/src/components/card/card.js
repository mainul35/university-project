card = (function () {
    template = `
        <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
        </div>`
    return {
        initialize: function (data = {}) {
            var content = Fusion.htmlToDOMElement(template)
            Fusion.addCSS('src/components/card/card.css')
            if (data.src) {
                content.querySelector('.card-img-top')[0].src = data.src
            }
            if (data.title) {
                content.querySelector('.card-title')[0].innerHTML = data.title
            }
            if (data.text) {
                content.querySelector('.card-text')[0].innerHTML = data.text
            }
            return content
        }
    }
}())