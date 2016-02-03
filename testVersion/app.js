var homeModel = sfMvc.createModel({Message :'Hello World'}),
    contModel = sfMvc.createModel({FirstName: "Sasha", LastName: "Abramova", Address: 'Kiev' }),
    loginModel = sfMvc.createModel({UserName : "Sasha", Password : "qwerty"});

var homeView = sfMvc.createView('Views/home.html'),
    contView = sfMvc.createView('Views/contact.html'),
    loginView = sfMvc.createView('Views/login.html');

var homeContr = sfMvc.createCntr(function (view, model) {}, homeView, homeModel),
    contContr = sfMvc.createCntr(function (view, model) {}, contView, contModel),
    loginContr = sfMvc.createCntr(function (view, model) {} , loginView, loginModel);


var homemodule = sfMvc.createModule(homeModel, homeView, homeContr);
var contmodule = sfMvc.createModule(contModel, contView, contContr);
var loginmodule = sfMvc.createModule(loginModel, loginView, loginContr);


sfMvc.AddRoute(homemodule, 'home');
sfMvc.AddRoute(contmodule, 'contact');
sfMvc.AddRoute(loginmodule, 'login');
sfMvc.init();
