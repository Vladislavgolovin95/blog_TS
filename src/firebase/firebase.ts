import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore"; 
import { IPost } from "../types/data";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDQMb_tE1pWXjI4C3CPHKdpeSuvWz4pZDg",
  authDomain: "blog-app-3a4e1.firebaseapp.com",
  projectId: "blog-app-3a4e1",
  storageBucket: "blog-app-3a4e1.appspot.com",
  messagingSenderId: "31693581500",
  appId: "1:31693581500:web:12be2541465fda6d2b34b9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const key = "Posts";

export const addDataToFirestore = async(id: string, title:  string, description: string) => {
  try {
    const docRef = await addDoc(collection(db, key), {
      id: id,
      title: title,
      description: description,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getDataToFirestore = async() => {
  const querySnapshot = await getDocs(collection(db, key));
  const posts = <IPost[]>[];
  querySnapshot.forEach((doc) => {
    posts.push({
      id: doc.data().id,
      title: doc.data().title,
      description: doc.data().description,
    })
  });
  return posts;
}

export const removeDataToFirestore = async(id: string) => {
  await deleteDoc(doc(db, key, id));
}