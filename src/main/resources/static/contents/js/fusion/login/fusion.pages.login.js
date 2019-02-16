Fusion.pages.login = (function () {
    var template = `
    <link href="/contents/css/login.css" rel="stylesheet" type="text/css"/>
    <div class="align-content-center">
        <div id="global-wrapper">
            <div id="content-wrapper">
                <div class="container">
                    <div class="col-sm-6 col-md-4 mx-auto">
                        <div class="account-wall">
                            <img src="/contents/images/download.png" class="profile-img"/>

                            <form action="" method="post" class="form-signin" onsubmit="false">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" name="username" class="form-control" required="required"/>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" class="form-control" required="required"/>
                                </div>
                                <input type="hidden" name="grant_type" value="password"/>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-lg btn-primary btn-block" value="Login" name="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    return {
        content: template,
        css: [],
        js: [],
        initialize: function (container) {
            var content = Fusion.htmlToDOMElement(template)
            Fusion.addCSS('/contents/css/login.css')
            Fusion.pages.login.content = container.innerHTML = content.querySelector('body').innerHTML
        }
    }
}())