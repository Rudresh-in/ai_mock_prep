import { initializeApp ,getApps, cert} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import {getAuth} from "firebase-admin/auth";


const initFirebaseAdmin = () => {
    const apps = getApps();

    if(!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.NEXT_FIREBASE_PROJECT_ID,
                clientEmail: process.env.NEXT_FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.NEXT_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
        });
    }
    return {
        auth: getAuth(),
        db: getFirestore(),
    };
}

export const { auth, db } = initFirebaseAdmin()