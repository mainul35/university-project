Fusion.appBody.navbar = (function () {

    var items = []
    return {
        initialize: function () {
            var navContent = Fusion.appBody.navbar.nav.content
            navContent.innerHTML = ''
            items = [
                {
                    label: "Home",
                    href: "#"
                },
                {
                    label: "Link",
                    href: "#"
                },
            ]

            var element = ''
            items.forEach(function (item) {
                element += Fusion.appBody.navbar.nav.buildItem(item)
            })
            navContent.innerHTML += element
        },
        nav: {
            content: document.querySelector(".navbar-nav"),
            addItem: function (item) {
                var navContent = Fusion.appBody.navbar.nav.content
                items.push(item)
                navContent.innerHTML += Fusion.appBody.navbar.nav.buildItem(item)
            },
            buildItem: function (item) {
                var element = ''
                element += '<li class="nav-item">'
                element += `<a class="nav-link" href="${item.href}">${item.label}</a>`
                element += '</li>'
                return element
            }
        }
    }
}());