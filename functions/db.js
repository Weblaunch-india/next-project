import { deleteDoc, getDocs } from "firebase/firestore";
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import {
	doc,
	getFirestore,
	collection,
	addDoc,
	updateDoc,
} from "firebase/firestore";

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

const db = getFirestore(app);
// Create a root reference

export function uploadImage(file, title, setURL) {
	const storageRef = ref(storage, `events/${title}`);

	const uploadTask = uploadBytesResumable(storageRef, file);
	// Register three observers:
	// 1. 'state_changed' observer, called any time the state changes
	// 2. Error observer, called on failure
	// 3. Completion observer, called on successful completion
	uploadTask.on(
		"state_changed",
		(snapshot) => {
			// Observe state change events such as progress, pause, and resume
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			const progress =
				(snapshot.bytesTransferred /
					snapshot.totalBytes) *
				100;
			console.log("Upload is " + progress + "% done");
			switch (snapshot.state) {
				case "paused":
					console.log("Upload is paused");
					break;
				case "running":
					console.log("Upload is running");
					break;
			}
		},
		(error) => {
			// Handle unsuccessful uploads
			console.log(error);
		},
		() => {
			// Handle successful uploads on complete
			// For instance, get the download URL: https://firebasestorage.googleapis.com/...
			getDownloadURL(uploadTask.snapshot.ref).then(
				(downloadURL) => {
					console.log(
						"File available at",
						downloadURL
					);

					setURL(downloadURL);
				}
			);
		}
	);
}

// Important

const storage = getStorage(app);

export async function createEvent(e, title, subtitle, description, url) {
	// Create a root reference

	const docRef = await addDoc(collection(db, "events"), {
		title: "asdadas",
		subtitle: "asdads",
		description: "Swqwdasq",
		image: url,
	});

	console.log("Document written with ID: ", docRef.id);
}

export async function updateEvent(id, fields) {
	const docRef = doc(db, "events", id);

	await updateDoc(docRef, fields);
}

export async function deleteEvent(id) {
	// import { doc, deleteDoc } from "firebase/firestore";

	await deleteDoc(doc(db, "events", id));
	console.log("deleted bro");
}

export async function getEvents(setEvents) {
	const querySnapshot = await getDocs(collection(db, "events"));

	const result = querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.data());
		setEvents((prev) => [...prev, { id: doc.id, ...doc.data() }]);
	});
	return result;
}

//


export async function createImage(e, title, subtitle, description, url) {
	// Create a root reference

	const docRef = await addDoc(collection(db, "events"), {
		title: "asdadas",
		subtitle: "asdads",
		description: "Swqwdasq",
		image: url,
	});

	console.log("Document written with ID: ", docRef.id);
}

export async function updateImage(id, fields) {
	const docRef = doc(db, "events", id);

	await updateDoc(docRef, fields);
}

export async function deleteImage(id) {
	// import { doc, deleteDoc } from "firebase/firestore";

	await deleteDoc(doc(db, "gallery", id));
	console.log("deleted bro");
}

export async function getImages(setEvents) {
	const querySnapshot = await getDocs(collection(db, "gallery"));

	const result = querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.data());
		setEvents((prev) => [...prev, { id: doc.id, ...doc.data() }]);
	});
	return result;
}
