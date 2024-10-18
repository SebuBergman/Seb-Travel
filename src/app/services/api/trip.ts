import { doc, setDoc } from "firebase/firestore";

import { Trip } from "@features/trip/types";
import { auth, firestore } from "../firebase";

export async function addTrip(trip: Trip) {
  if (!auth.currentUser) {
    throw Error("Looks like you are not-authorized to make this change!");
  }

  await setDoc(doc(firestore, "trips", trip.id), {
    ...trip,
    useUid: auth.currentUser.uid,
  });
}
