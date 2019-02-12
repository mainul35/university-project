Fusion.appBody.navbar = (function () {
    return {
        items: [
            {
                label: "Home",
                href: "#"
            },
            {
                label: "Link",
                href: "#"
            },
        ],
        initialize: function () {

        },
        nav: {
            content: document.querySelector(".navbar-nav"),
            addItem: function (item) {
                var element = ''
                this.items.forEach(function (item) {
                    element = '<li class="nav-item">'
                    element += `<a class="nav-link" href="${item.href}">${item.label}</a>`
                    element += '</li>'
                })
                this.navbar.nav.content.innerHTML += element
            }
        }

    }
}());