var app = angular.module('myApp',['ngRoute', 'ngResource']).run(function($rootScope){
  $rootScope.user = {
    fName:"Alec",
    lName:"Doran-Twyford",
    profilepic:"img/team/now_cas.png",
      fb:{icon:"fa-facebook",iconsq:"fa-facebook-square",url:"https://fb.com/alectronicX"},
      fbPage:{icon:"fa-facebook",iconsq:"fa-facebook-square",url:"https://fb.com/alectronic0"},
      twitter:{icon:"fa-twitter",iconsq:"fa-twitter-square",url:"https://twitter.com/alectronic0"},
      linkedin:{icon:"fa-linkedin",iconsq:"fa-linkedin-square",url:"https://www.linkedin.com/in/alectronic0"},
      github:{icon:"fa-github",iconsq:"fa-github-square",url:"https://github.com/Alectronic0"},
      pintrest:{icon:"fa-pinterest",iconsq:"fa-pinterest-square",url:"https://pinterest.com/alectronic0/"},
      gplus:{icon:"google-plus",iconsq:"fa-google-plus-square",url:"https://plus.google.com/+AlecDoranTwyford"},
      snapchat:{icon:"fa-snapchat-ghost",iconsq:"fa-snapchat-ghost-square",url:"https://www.snapchat.com/add/alectronic"},
      soundcloud:{icon:"fa-snapchat-ghost",iconsq:"fa-snapchat-ghost-square",url:"https://soundcloud.com/alectronic0"},
      instagram:{icon:"fa-instagram",iconsq:"",url:"https://www.instagram.com/alectronic0/"},
      youtubeVlog:{icon:"fa-youtube",iconsq:"fa-youtube-square",url:"https://www.youtube.com/user/alecdorantwyfordvlog"},
      youtubePro:{icon:"fa-youtube",iconsq:"fa-youtube-square",url:"https://www.youtube.com/user/alectronic0"},
      foursquare:{icon:"fa-foursquare",iconsq:"",url:"https://foursquare.com/alectronic0"},
      //skype:{icon:"fa-skype",iconsq:"",url:"skype:AlecDoranTwyford?chat"},
      steam:{icon:"fa-steam",iconsq:"fa-steam-square",url:"http://steamcommunity.com/id/Alectronic0/"},
      stackoverflow:{icon:"fa-stack-overflow",iconsq:"" ,url:"http://stackoverflow.com/users/2893200/alec-george-doran-twyford"},
      stackexchange:{icon:"fa-stack-exchange",iconsq:"" ,url:"http://stackexchange.com/users/3438883/alec-george-doran-twyford"}
    }

});





app.controller('aboutController', function($scope){
    $scope.about = [
      {
        id:"2",
        ico:"fa-pencil-square-o",
        img:"",
        url:"",
        title:"Junior Product Manager",
        subtitle:"",
        desc:"Completed a Product Manager Course with General Assembly. Love Tickering and think of ways to imporve products"
      },
      {
        id:"1",
        ico:"fa-graduation-cap",
        img:"",
        url:"",
        title:"Graduate Computer Scienest",
        subtitle:"",
        desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"
      },
      {
        id:"3",
        ico:"fa-code",
        img:"",
        url:"",
        title:"Junior Software Engineer",
        subtitle:"",
        desc:"Polyglot programmer Expreince in Java, JavaScript(Angular.js, Node.Js), Visual Basic(VBA), MySQL, MongoDB. Who Can quickly learn and adapt to new language with a few days."
      }
    ]
});


app.controller('folioController', function($scope){

    $scope.folio = [
      {
        id:"2",
        ico:"",
        img:"img/folio/product_managment.png",
        url:"aaaa",
        title:"Junior Product Manager",
        subtitle:"",
        desc:"Completed a Product Manager Course with General Assembly. Love Tickering and think of ways to imporve products"
      },
      {
        id:"1",
        ico:"",
        img:"img/folio/computer_science.png",
        url:"",
        title:"Graduate Computer Scienest",
        subtitle:"",
        desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"
      },
      {
        id:"3",
        ico:"",
        img:"img/folio/software_engineer.png",
        url:"",
        title:"Junior Software Engineer",
        subtitle:"",
        desc:"Polyglot programmer Expreince in Java, JavaScript(Angular.js, Node.Js), Visual Basic(VBA), MySQL, MongoDB. Who Can quickly learn and adapt to new language with a few days."
      }
    ]

});

app.controller('timelineController', function($scope){
    $scope.timeline = [
      {
        id:"4",
        ico:"",
        img:"img/timeline/grad.png",
        url:"",
        title:"The Uni Years",
        subtitle:"2009-2012",
        desc:"Graduate with a 1st Class"
      },
      {
        id:"5",
        ico:"",
        img:"img/timeline/glebe.jpg",
        url:"",
        title:"Traveled To Austalia",
        subtitle:"2013-2014",
        desc:"Early 2013 I set off to Austalia. In this time I explored the East Coast, Sky Dived, Fire Spinning and Meet many great people. End of 2014 Decide to come home (missed the cold weather)."
      },
      {
        id:"6",
        ico:"",
        img:"img/timeline/foodtechyear.jpg",
        url:"",
        title:"Food & Tech Adventure",
        subtitle:"2014 - 2016",
        desc:"One of the hard periods of my life so far re-adjusting to life in London. Looking to start my career in Product Managment but failing. However gain a lot of expreince working for startups."
      },
      {
        id:"7",
        ico:"",
        img:"img/timeline/now_pro.png",
        url:"",
        title:"Present Time",
        subtitle:"2016-Now",
        desc:"After the my 3 months at Gleat I knew if I wanted to become a Product Manager I would need improve my software Engineer Skills. I Joined Sky and set to work learning Android and the MEAN stack in my spare time. Right Now look for a role to use this ned skills."
      }
    ]
});

app.controller('teamController', function($scope){
    $scope.team =  [
      {
        id:"7",
        ico:"",
        img:"",
        url:"",
        title:"Graduate Computer Scienest",
        subtitle:"",
        desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"
      }
    ]
});




app.controller('refController', function($scope){
    $scope.refrence =  [
      {
        id:"7",
        ico:"",
        img:"img/refrence/kdot.jpg",
        url:"",
        title:"Kimeshan",
        subtitle:"Lead Developer @ GLEAT",
        desc:"Great guy",
        mobile:"+447554742854",
        email:"kimeshan@gmail.com",
        linkedin:"https://www.linkedin.com/in/kimeshan"
      },
      {
        id:"7",
        ico:"",
        img:"img/refrence/ian.jpg",
        url:"",
        title:"Kimeshan",
        subtitle:"MD @ IVSTEL",
        desc:"Great guy",
        mobile:"+612 9288 8888",
        email:"Ian@ivstel.com",
        linkedin:"https://www.linkedin.com/in/ian-barnes-4753871"
      },
      {
        id:"7",
        ico:"",
        img:"img/refrence/chris.jpg",
        url:"",
        title:"Chris Climo",
        subtitle:"Line Manager @ Sky",
        desc:"Great guy",
        mobile:"+447546366878",
        email:"Christopher.Climo@sky.uk",
        linkedin:"https://www.linkedin.com/in/chris-climo-869b7741"
      },
      {
        id:"7",
        ico:"",
        img:"img/refrence/blank.png",
        url:"",
        title:"Jamie H",
        subtitle:"Manager @ Waitrose",
        desc:"Great guy",
        mobile:"",
        email:"",
        linkedin:"https://www.linkedin.com/in/jamie-hewitt-47a7a675"
      },
    ]
});
