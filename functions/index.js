// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import Router from "next/router";

const firebaseConfig = {
	apiKey: "AIzaSyAHR67C4H_51mUc1QdAztY1uLBzRlh4Pcs",
	authDomain: "spoorthy-6b2ed.firebaseapp.com",
	databaseURL:
		"https://spoorthy-6b2ed-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "spoorthy-6b2ed",
	storageBucket: "spoorthy-6b2ed.appspot.com",
	messagingSenderId: "979856160395",
	appId: "1:979856160395:web:15adf3ca62249740d6868e",
	measurementId: "G-06RM8H1B7S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function InitiateLogin(e, email, password, setAuth , setError) {
	e.preventDefault();
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			alert("welcome admin");
			setAuth(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
            setError(errorMessage);
        });
}

// onAuthStateChanged(auth, (user) => {
// 	if (user) {
// 		const uid = user.uid;
// 		console.log(uid);
// 		window.location.href = "/adminupload.html";
// 		// ...
// 	} else {
// 		// User is signed out
// 		// ...
// 		window.location.href = "/admin.html";
// 	}
// });

// signOut(auth)
// 	.then(() => {
// 		// Sign-out successful.
// 		window.location.href = "/admin.html";
// 	})
// 	.catch((error) => {
// 		// An error happened.
// 		alert("Some error occured, please refresh");
// 	});
