import initializeAuthentication from "../Firebase/firebase.initialize";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    GithubAuthProvider,
    FacebookAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();

//Providers 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");

    //clear the error

    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 5000);
    }, [error]);

    //For google sign-in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }
    //For login with github
    function signInWithGithub() {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //for login with facebook 
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //sign in with email and password

    const signInWithEmailandPass = (event) => {
        event.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //set name  and profile image url
    function setNameAndImage() {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        }).then(() => {

        }).catch((error) => {
            // An error occurred
            // ...

            setError(error.message);
        });
    }


    //set email verification

    function emailVerify() {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert(`An Verification email has been sent to ${email}`);
            });

    }

    //password  reset 
    function resetPass(e) {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset has been sent');
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    //get the currently sign-inned user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return
    }, []);
    //this is for sign-out
    const logOut = () => {
        signOut(auth)
            .then((resutl) => {
                setUser({});
            }).catch((error) => {
                setError(error.message);
            });
    }

    //this is for sign-up
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setNameAndImage();
                emailVerify();
                alert("User has been created")
            }).catch((error) => {
                setError(error.message);
            })
    }


    //get name
    function getName(e) {
        setName(e?.target?.value);
    }


    //get email

    function getEmail(event) {
        setEmail(event?.target?.value)
    }
    //get password
    function getPassword(event) {
        setPassword(event?.target?.value)
    }

    //get photo
    function getPhoto(e) {
        setPhoto(e?.target?.value);
    }

    return {
        signInWithEmailandPass,
        signInWithFacebook,
        signInWithGithub,
        logOut,
        signInWithGoogle,
        user,
        setUser,
        error,
        setError,
        getEmail,
        getPassword,
        signUp,
        getPhoto,
        getName,
        resetPass,
    };
}



export default useFirebase;