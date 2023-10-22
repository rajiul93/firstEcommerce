import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/Firebase.init';
initializeAuthentication()

function UseFirebase() {
  // all authentication hear...
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState('');



  const createWithEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        // console.log(user)
        updateProfiles(name)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error)

      });
  }

  const updateProfiles = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let newUserData = user;
        const uref = ref(getDatabase());
        get(child(uref, `users/${user.uid}`))

        .then((snapshot) => {
          if (snapshot.exists()) {
              const userMeta = snapshot.val();
              newUserData.phone = userMeta.phone;
              newUserData.address = userMeta.address;
              newUserData.locationDetails = userMeta.locationDetails;
              newUserData.nid = userMeta.nid;
              setUser(newUserData)
          } else {
              console.log('No data available');
          }
      })
      .catch((error) => {
          console.error(error);
      });
} else setUser({});
});
  }, [auth])

  return {
    user,
    error,
    createWithEmail,
    logOut,
    logIn

  }
}

export default UseFirebase