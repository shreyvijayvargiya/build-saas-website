import {
	collection,
	doc,
	getDoc,
	addDoc,
	updateDoc,
	query,
	where,
	getDocs,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "../../utils/firebase";

const VISITORS_COLLECTION = "build-saas-visitors";

/**
 * Check if a visitor with the given fingerprint exists
 * @param {string} fingerprint - Browser fingerprint
 * @returns {Promise<Object|null>} Visitor document if exists, null otherwise
 */
export const getVisitorByFingerprint = async (fingerprint) => {
	try {
		const q = query(
			collection(db, VISITORS_COLLECTION),
			where("fingerprint", "==", fingerprint)
		);

		const querySnapshot = await getDocs(q);
		if (!querySnapshot.empty) {
			const doc = querySnapshot.docs[0];
			return {
				id: doc.id,
				...doc.data(),
			};
		}
		return null;
	} catch (error) {
		console.error("Error getting visitor by fingerprint:", error);
		throw error;
	}
};

/**
 * Create a new visitor record
 * @param {Object} visitorData - Visitor data object
 * @returns {Promise<string>} Document ID of created visitor
 */
export const createVisitor = async (visitorData) => {
	try {
		const docRef = await addDoc(collection(db, VISITORS_COLLECTION), {
			...visitorData,
			firstVisit: serverTimestamp(),
			lastVisit: serverTimestamp(),
			visitCount: 1,
		});

		return docRef.id;
	} catch (error) {
		console.error("Error creating visitor:", error);
		throw error;
	}
};

/**
 * Update visitor's last visit timestamp and increment visit count
 * @param {string} visitorId - Visitor document ID
 * @returns {Promise<void>}
 */
export const updateVisitorVisit = async (visitorId) => {
	try {
		const visitorRef = doc(db, VISITORS_COLLECTION, visitorId);
		const visitorDoc = await getDoc(visitorRef);

		if (visitorDoc.exists()) {
			const currentData = visitorDoc.data();
			await updateDoc(visitorRef, {
				lastVisit: serverTimestamp(),
				visitCount: (currentData.visitCount || 1) + 1,
			});
		}
	} catch (error) {
		console.error("Error updating visitor visit:", error);
		throw error;
	}
};

