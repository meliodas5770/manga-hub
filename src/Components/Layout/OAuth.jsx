import { useNavigate } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

import GoogleIcon from "@mui/icons-material/Google";
import { toast } from "react-toastify";

export const GoogleOAuth = () => {
    const nav = useNavigate();
    const googleLogin = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            const result = await signInWithPopup(auth, provider);
            const { uid, displayName, email } = result.user;

            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: displayName,
                    email,
                    timestamp: serverTimestamp(),
                });
            }

            toast.success("Nice and clean, now you can enjoy your reading", {
                theme: "dark",
            });
            nav("/");
        } catch (error) {
            toast.error("Couldn't authenticate using Google, try again later", {
                theme: "dark",
            });
        }
    };
    return (
        <div
            className="btn btn-ghost btn-outline  h-20 w-20 rounded-full"
            onClick={googleLogin}
        >
            <GoogleIcon
                className="hover:fill-primary mx-auto"
                sx={{ fill: "#fff", width: 23, height: 23 }}
            />
        </div>
    );
};
