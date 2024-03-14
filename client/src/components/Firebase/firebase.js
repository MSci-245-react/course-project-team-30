import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCX-qV4Rx5Ohpsuz8FWoHuyvmAUHQDsVcA",
  authDomain: "term-project-9c5ce.firebaseapp.com",
  projectId: "term-project-9c5ce",
  storageBucket: "term-project-9c5ce.appspot.com",
  messagingSenderId: "238054691528",
  appId: "1:238054691528:web:cc1ca86a8aa1877afa8bfd",
  measurementId: "G-FKM9QRRS10"
  };
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }
  
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doGetIdToken = (bool) => {
    return this.auth.currentUser.getIdToken(/* forceRefresh */ bool);
  }

  doGetUserByEmail = email => this.auth.getUserByEmail(email);

}

export default Firebase;