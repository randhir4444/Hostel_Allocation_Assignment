
import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyDtys4rDwH_8Q5Lmb62ufeTZG589f_yE98",
    authDomain: "hostel-allocation-79bc6.firebaseapp.com",
    projectId: "hostel-allocation-79bc6",
    storageBucket: "hostel-allocation-79bc6.appspot.com",
    messagingSenderId: "134086359014",
    appId: "1:134086359014:web:fcfcbe290f27a4dc180827",
    measurementId: "G-7NHGD8966K"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase