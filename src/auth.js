
  const firebaseConfig = {
    apiKey: "AIzaSyCn72nCfxDkVwVWennvGxaMslJisRkDoYI",
    authDomain: "vams-db.firebaseapp.com",
    projectId: "vams-db",
    storageBucket: "vams-db.appspot.com",
    messagingSenderId: "57005957868",
    appId: "1:57005957868:web:1e16946017f631771e3bc9"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged in as:', user.email);

        // Optionally, fetch user data from Firestore
        db.collection('users').doc(user.uid).get()
          .then((doc) => {
            if (doc.exists) {
              console.log('User data:', doc.data());
            } else {
              console.log('No such document!');
            }

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
            // Redirect to dashboard even if fetching user data fails
            window.location.href = 'dashboard.html';
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error:', errorCode, errorMessage);
      });
  }