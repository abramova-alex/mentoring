(function () {
    var homeModule = sfMvc.createModule();

    homeModule
        .modelCreate({Message: 'Hello World'})
        .viewCreate('Views/home.html')
        .controllerCreate(function (view, model) {
            console.log("home page");
        });

    var contModule = sfMvc.createModule();

    contModule
        .modelCreate({FirstName: "Sasha", LastName: "Abramova", Address: 'Kiev'})
        .viewCreate('Views/contact.html')
        .controllerCreate(function (view, model) {
            console.log("Contact page");
        });

    var loginModule = sfMvc.createModule();

    loginModule
        .modelCreate({UserName: "Sasha", Password: "qwerty"})
        .viewCreate('Views/login.html')
        .controllerCreate(function (view, model) {
            console.log("login page");
        });

    sfMvc.AddRoute(homeModule, 'home');
    sfMvc.AddRoute(contModule, 'contact');
    sfMvc.AddRoute(loginModule, 'login');
    sfMvc.init();

})();
