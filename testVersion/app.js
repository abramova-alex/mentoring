var homeContr = sfMvc.createCntr(function (view, model) {
    }, 'Views/home.html', {Message :'Hello World'}),
    contContr = sfMvc.createCntr(function (view, model) {}, 'Views/contact.html',
        {
            FirstName: "Sasha",
            LastName: "Abramova",
            Address: 'Kiev'
        }
    ),
    loginContr = sfMvc.createCntr(function (view, model) {

    }, 'Views/login.html', {
        UserName : "Sasha",
        Password : "qwerty"
    });


sfMvc.AddRoute(homeContr, 'home');
sfMvc.AddRoute(contContr, 'contact');
sfMvc.AddRoute(loginContr, 'login');
sfMvc.init();

