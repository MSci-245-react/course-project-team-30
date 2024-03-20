
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCX-qV4Rx5Ohpsuz8FWoHuyvmAUHQDsVcA",
  authDomain: "term-project-9c5ce.firebaseapp.com",
  projectId: "term-project-9c5ce",
  storageBucket: "term-project-9c5ce.appspot.com",
  messagingSenderId: "238054691528",
  appId: "1:238054691528:web:cc1ca86a8aa1877afa8bfd",
  measurementId: "G-FKM9QRRS10"
};

const app = initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.auth = getAuth(app);
  }
  
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(email, password);

  doSignOut = () => signOut();

  doPasswordReset = email => sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    updatePassword(this.auth.currentUser, password);

  doGetIdToken = () => {
    return new Promise((resolve, reject) => {
      const user = this.auth.currentUser;
      if(user){
        user
          .doGetIdToken()
          .then(token => {
            resolve(token);
          })
          .catch(error => {
            reject(error);
          });
      } else {
        reject(new Error('No user is signed in.'));
      }
    });
  };

  doGetUserByEmail = email => this.auth.getUserByEmail(email);

}

export default Firebase;