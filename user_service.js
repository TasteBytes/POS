const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyBrJDvsp_4dcQ8J5YJrFfQwI3-xHQnKGjs",
    authDomain: "tastebytes-e421e.firebaseapp.com",
    databaseURL: "https://tastebytes-e421e.firebaseio.com",
    projectId: "tastebytes-e421e",
    storageBucket: "tastebytes-e421e.appspot.com",
    messagingSenderId: "240649605064"
};

firebase.initializeApp(config);
const auth = firebase.auth();
const rootRef = firebase.database().ref();

function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
        fullname: name,
        email: email,
    });
    firebase.database().ref('users/' + userId + '/menus').set( {
        "Breakfast": {
            "Appetizers": [{
                "Name": "AppetizerName",
                "Description": "Description",
                "Price": 1.50
            }, {
                "Name": "Appetizer2Name",
                "Description": "Description2",
                "Price": 1.50
            }],
        },
        "Lunch": {
            "Appetizers": [{
                "Name": "AppetizerName",
                "Description": "Description",
                "Price": 1.50
            }, {
                "Name": "Appetizer2Name",
                "Description": "Description2",
                "Price": 1.50
            }, {
                "Name": "Appetizer3Name",
                "Description": "Description3",
                "Price": 1.50
            }],
            "Sides": [{
                "Name": "SidesName",
                "Description": "Description",
                "Price": 1.50
            }, {
                "Name": "SidesName",
                "Description": "Description",
                "Price": 1.50
            }, {
                "Name": "SidesName",
                "Description": "Description",
                "Price": 1.50
            }],
            "Sandwiches": [{
                "Name": "SidesName",
                "Description": "Description",
                "Price": 1.50
            }, {
                "Name": "SidesName",
                "Description": "Description",
                "Price": 1.50
            }],
            "Pasta": [{
                "Name": "SidesName",
                "Description": "Description",
                "Price": 1.50
            }]
        },
        "Dinner": {
            "Appetizers": [{
                "Name": "AppetizerName",
                "Description": "Description",
                "Price": 1.50
            }, {
                "Name": "Appetizer2Name",
                "Description": "Description2",
                "Price": 1.50
            }]
        }
    });
    }

    function createUser(name, email, password, callback) {
        auth.createUserWithEmailAndPassword(email, password).then(function(success) {
            writeUserData(auth.currentUser.uid, name, email)
            callback(success.code)
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            callback(error);
        });
    }

    function signInUser(email, password, callback) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(success) {
            callback(success.code);
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            callback(error);
        });
    }

    function signOutUser(callback) {
        firebase.auth().signOut().then(function(success) { 
            // Sign-out successful.
            callback(success);
        }).catch(function(error) {
            // An error happened.
            callback(error); 
        });
    }

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('user is signed in');
        } else {
            console.log('user is not signed in');
        }
    });

    module.exports = {
        addUser: createUser,
        authenticate: signInUser,
        firebase: firebase,
        signOut: signOutUser
    }
