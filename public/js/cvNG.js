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
        ico:"fa-product-hunt",
        img:"",
        title:"Junior Product Manager",
        subtitle:"",
        desc:"Completed a Product Manager Course with General Assembly. Love Tickering and think of ways to imporve products"
      },
      {
        id:"1",
        ico:"fa-university",
        img:"",
        title:"Graduate Computer Scienest",
        subtitle:"",
        desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"
      },
      {
        id:"3",
        ico:"fa-code",
        img:"",
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
        title:"Junior Product Manager",
        subtitle:"",
        desc:"Completed a Product Manager Course with General Assembly. Love Tickering and think of ways to imporve products"
      },
      {
        id:"1",
        ico:"",
        img:"img/folio/computer_science.png",
        title:"Graduate Computer Scienest",
        subtitle:"",
        desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"
      },
      {
        id:"3",
        ico:"",
        img:"img/folio/software_engineer.png",
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
        title:"The Uni Years",
        subtitle:"2009-2012",
        desc:"Graduate with a 1st Class"
      },
      {
        id:"5",
        ico:"",
        img:"img/timeline/glebe.jpg",
        title:"Traveled To Austalia",
        subtitle:"2013-2014",
        desc:"Feb 2013 I set off too Austalia, In that time I got to "
      },
      {
        id:"6",
        ico:"",
        img:"img/timeline/glebe.jpg",
        title:"Food & Tech Adventure",
        subtitle:"Dec 2014 - Feb 2016",
        desc:"A tough year after returning from Austalia re-adjusting to leaving in the UK and looking for a role in community managment & product managment "
      },
      {
        id:"7",
        ico:"",
        img:"img/timeline/now_pro.png",
        title:"Present Time",
        subtitle:"2016-Now",
        desc:"After the my 3 months at Gleat I knew if I wanted to become a Product Manager I would need improve my software Engineer Skills. I Joined Sky at set to work learning Android and the MEAN stack in my spare time."
      }
    ]
});

app.controller('teamController', function($scope){
    $scope.team =  [
      {
        id:"7",
        ico:"",
        img:"",
        title:"Graduate Computer Scienest",
        subtitle:"",
        desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"
      }
    ]
});
