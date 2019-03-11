routes = (function () {
    return {
        initialize: function () {
            Fusion.addJS('src/login/login.js')
            setTimeout(function () {
                Fusion.navbar.initialize(document.getElementById('header'))
                Fusion.navbar.nav.addItem({id: 'dashboard', label: 'Home', path: '/home'})
                Fusion.navbar.nav.addItem({id: 'login', label: 'Login', path: '/login'})
                Fusion.routing.addRoute({id: 'dashboard', title: 'Home', path: '/home'}, dashboard)
                Fusion.routing.addRoute({id: 'login', title: 'Login', path: '/login'}, login)
            }, 100)
        }
    }
}())