var app = angular.module('myApp',['ngRoute', 'ngResource']).run(function($rootScope){
  $rootScope.fb = {icon:"fa-facebook",iconsq:"fa-facebook-square",url:"https://fb.com/alectronicX"}
  $rootScope.fbPage = {icon:"fa-facebook",iconsq:"fa-facebook-square",url:"https://fb.com/alectronic0"}
  $rootScope.twitter = {icon:"fa-twitter",iconsq:"fa-twitter-square",url:"https://twitter.com/alectronic0"}
  $rootScope.linkedin = {icon:"fa-linkedin",iconsq:"fa-linkedin-square",url:"https://www.linkedin.com/in/alectronic0"}
  $rootScope.github = {icon:"fa-github",iconsq:"fa-github-square",url:"https://github.com/Alectronic0"}
  $rootScope.pintrest = {icon:"fa-pinterest",iconsq:"fa-pinterest-square",url:"https://pinterest.com/alectronic0/"}
  $rootScope.gplus = {icon:"google-plus",iconsq:"fa-google-plus-square",url:"https://plus.google.com/+AlecDoranTwyford"}
  $rootScope.snapchat = {icon:"fa-snapchat-ghost",iconsq:"fa-snapchat-ghost-square",url:"https://www.snapchat.com/add/alectronic"}

  $rootScope.soundcloud = {icon:"fa-snapchat-ghost",iconsq:"fa-snapchat-ghost-square",url:"https://soundcloud.com/alectronic0"}
  $rootScope.instagram = {icon:"fa-instagram",iconsq:"",url:"https://www.instagram.com/alectronic0/"}
  $rootScope.youtubeVlog = {icon:"fa-youtube",iconsq:"fa-youtube-square",url:"https://www.youtube.com/user/alecdorantwyfordvlog"}
  $rootScope.youtubePro = {icon:"fa-youtube",iconsq:"fa-youtube-square",url:"https://www.youtube.com/user/alectronic0"}
  $rootScope.foursquare = {icon:"fa-foursquare",iconsq:"",url:"https://foursquare.com/alectronic0"}
  $rootScope.skype = {icon:"fa-skype",iconsq:"",url:"AlecDoranTwyford"}


//
//fa-steam   fa-steam-square
//fa-stack-exchange
//fa-stack-overflow
//
//
});





app.controller('aboutController', function($scope){
    $scope.about = [
      {logo:"fa-university", title:"Graduate Computer Scienest", desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"},
      {logo:"fa-product-hunt", title:"Junior Product Manager", desc:"Completed a Product Manager Course with General Assembly. Love Tickering and think of ways to imporve products"},
      {logo:"fa-code", title:"Junior Software Engineer", desc:"Polyglot programmer Expreince in Java, JavaScript(Angular.js, Node.Js), Visual Basic(VBA), MySQL, MongoDB. Who Can quickly learn and adapt to new language with a few days."}
    ]
});


app.controller('folioController', function($scope){
    $scope.folio = [
      {modid:"1", logo:"img/portfolio/roundicons.png", title:"Graduate Computer Scienest", desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"},
      {modid:"2", logo:"img/portfolio/startup-framework-preview.png", title:"Junior Product Manager", desc:"Completed a Product Manager Course with General Assembly. Love Tickering and think of ways to imporve products"},
      {modid:"3", logo:"img/portfolio/startup-framework.png", title:"Junior Software Engineer", desc:"Polyglot programmer Expreince in Java, JavaScript(Angular.js, Node.Js), Visual Basic(VBA), MySQL, MongoDB. Who Can quickly learn and adapt to new language with a few days."}
    ]
});

app.controller('timelineController', function($scope){
    $scope.timeline = [
      {modid:"4", logo:"", title:"Graduate Computer Scienest", desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"},
      {modid:"5", logo:"", title:"Junior Product Manager", desc:"Completed a Product Manager Course with General Assembly. Love Tickering and think of ways to imporve products"},
      {modid:"6", logo:"", title:"Junior Software Engineer", desc:"Polyglot programmer Expreince in Java, JavaScript(Angular.js, Node.Js), Visual Basic(VBA), MySQL, MongoDB. Who Can quickly learn and adapt to new language with a few days."}
    ]
});

app.controller('teamController', function($scope){
    $scope.team = [
      {modid:"4", logo:"fa-university", title:"Graduate Computer Scienest", desc:"Completed BSc (Hons) Computer Science with a First. With a background of the Core fundementals of Computer Networking, Programming, Computer Arcitecure"},
      {modid:"5", logo:"fa-product-hunt", title:"Junior Product Manager", desc:"Completed a Product Manager Course with General Assembly. Love Tickering and think of ways to imporve products"},
      {modid:"6", logo:"fa-code", title:"Junior Software Engineer", desc:"Polyglot programmer Expreince in Java, JavaScript(Angular.js, Node.Js), Visual Basic(VBA), MySQL, MongoDB. Who Can quickly learn and adapt to new language with a few days."}
    ]
});
