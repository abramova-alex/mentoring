var homeModel = sfMvc.createModel({Message :'Hello World'}),
    contModel = sfMvc.createModel({FirstName: "Sasha", LastName: "Abramova", Address: 'Kiev' }),
    loginModel = sfMvc.createModel({UserName : "Sasha", Password : "qwerty"});

var homeContr = sfMvc.createCntr(function (view, model) {}, 'Views/home.html', homeModel),
    contContr = sfMvc.createCntr(function (view, model) {}, 'Views/contact.html', contModel),
    loginContr = sfMvc.createCntr(function (view, model) {}, 'Views/login.html', loginModel);


sfMvc.AddRoute(homeContr, 'home');
sfMvc.AddRoute(contContr, 'contact');
sfMvc.AddRoute(loginContr, 'login');
sfMvc.init();
