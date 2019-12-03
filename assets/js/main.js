var firebaseConfig = {
    apiKey: "AIzaSyDfOLY2GIPMrkeAs-6GPTRjIneIX7U3NLQ",
    authDomain: "ambassador-86c40.firebaseapp.com",
    databaseURL: "https://ambassador-86c40.firebaseio.com",
    projectId: "ambassador-86c40",
    storageBucket: "ambassador-86c40.appspot.com",
    messagingSenderId: "35169197020",
    appId: "1:35169197020:web:8647c0b34f58bd414e8d19",
    measurementId: "G-QZY2GC8JLE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  $('#submit').on('click', authenticateUser)

  function authenticateUser(e) {
    e.preventDefault();
    var $email = $('#email').val().trim();
    var $password = $('#password').val().trim();

    firebase.auth().signInWithEmailAndPassword($email,$password)
    .then(function(data){
      console.log(data);
      if(!data.user.email){
        console.log('invalid credentials')
      }
      if (data.user.email === $email){
        firebase.auth().onAuthStateChanged(function(user){
          if (user) {
            console.log(user)
            window.location.replace('shop.html')
          } 
        })
      } 
    }).catch(function(err){
        var $message = $('#message');
        $message.text(err)
    })   
  }

