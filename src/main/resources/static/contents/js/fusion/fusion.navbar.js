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
                element = '<li class="nav-item">'
                element += `<a class="nav-link" href="${item.href}">${item.label}</a>`
                element += '</li>'
            })
            navContent.innerHTML = element
        },
        nav: {
            content: document.querySelector(".navbar-nav"),
            addItem: function (item) {
                var navContent = Fusion.appBody.navbar.nav.content
                items.push(item)
                var element = ''
                element = '<li class="nav-item">'
                element += `<a class="nav-link" href="${item.href}">${item.label}</a>`
                element += '</li>'
                navContent.innerHTML += element
            }
        }
    }
}());