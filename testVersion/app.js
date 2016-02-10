(function () {
    var homeModule = sf.createModule();

    homeModule
        .modelCreate("home", {Message: 'Hello World'})
        .viewCreate('Views/home.html')
        .controllerCreate(function (view, model) {
            console.log("home page");
        });

    var contModule = sf.createModule();

    contModule
        .modelCreate("contact", {FirstName: "Sasha", LastName: "Abramova", Address: 'Kiev'})
        .viewCreate('Views/contact.html')
        .controllerCreate(function (view, model) {
            console.log("Contact page");
        });

    var loginModule = sf.createModule();

    loginModule
        .constantCreate("test", "testValue")
        .modelCreate("login", {UserName: "Sasha", Password: "qwerty"})
        .viewCreate('Views/login.html')
        .controllerCreate(function (view, model) {
            console.log("" + loginModule.constant.const["test"]);
        });

    sf.AddRoute(homeModule, 'home');
    sf.AddRoute(contModule, 'contact');
    sf.AddRoute(loginModule, 'login');
    sf.init();

    loginModule.controller.onModelChange();

    loginModule.model.update({UserName: "gggggg", Password: "0"});

})();
