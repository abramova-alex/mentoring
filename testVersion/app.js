var homeModel = sfMvc.createModel({Message :'Hello World'}),
    contModel = sfMvc.createModel({FirstName: "Sasha", LastName: "Abramova", Address: 'Kiev' }),
    loginModel = sfMvc.createModel({UserName : "Sasha", Password : "qwerty"});

var homeView = sfMvc.createView('Views/home.html'),
    contView = sfMvc.createView('Views/contact.html'),
    loginView = sfMvc.createView('Views/login.html');

var homeContr = sfMvc.createCntr(function (view, model) {}, homeView, homeModel),
    contContr = sfMvc.createCntr(function (view, model) {}, contView, contModel),
    loginContr = sfMvc.createCntr(function (view, model) {} , loginView, loginModel);


sfMvc.AddRoute(homeContr, 'home');
sfMvc.AddRoute(contContr, 'contact');
sfMvc.AddRoute(loginContr, 'login');
sfMvc.init();
