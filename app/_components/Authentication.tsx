// "use client"
// import { auth } from '@/configs/firebaseConfig';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import React from 'react'

// function Authentication({ children }: any) {
//     const provider = new GoogleAuthProvider();

//     const onButtonPress = () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 // This gives you a Google Access Token. You can use it to access the Google API.
//                 const credential: any = GoogleAuthProvider.credentialFromResult(result);
//                 const token = credential.accessToken;
//                 // The signed-in user info.
//                 const user = result.user;
//                 console.log(user);
//                 // IdP data available using getAdditionalUserInfo(result)
//                 // ...
//             }).catch((error) => {
//                 // Handle Errors here.
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // The email of the user's account used.
//                 const email = error.customData.email;
//                 // The AuthCredential type that was used.
//                 const credential = GoogleAuthProvider.credentialFromError(error);
//                 // ...
//             });
//     }
//     return (
//         <div>
//             <div onClick={onButtonPress}>
//                 {children}
//             </div>
//         </div>
//     )
// }

// export default Authentication

"use client"
import { auth } from '@/configs/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';

function Authentication({ children }: any) {
    const provider = new GoogleAuthProvider();

    // const onButtonPress = async () => {
    //     try {
    //         const result = await signInWithPopup(auth, provider);
    //         const user = result.user;
    //         console.log("User Info:", user);
    //     } catch (error) {
    //         console.error("Authentication Error:", error);
    //     }
    // };

    // const onButtonPress = async () => {
    //     try {
    //         provider.addScope("email"); // Ensure email scope is requested
    //         const result = await signInWithPopup(auth, provider);
    //         const user = result.user;
    //         console.log("User Info:", user);
    //         console.log("User Email:", user.email); // Debugging: Check if email exists
    //     } catch (error) {
    //         console.error("Authentication Error:", error);
    //     }
    // };

    
    
    const onButtonPress = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
    
            console.log("Full User Object:", JSON.stringify(user, null, 2));
    
            // Try fetching email from provider data if not available directly
            const email = user.email || user.providerData?.[0]?.email || "No Email Found";
            console.log("User Email:", email);
        } catch (error) {
            console.error("Authentication Error:", error);
        }
    };
    
    

    return (
        <div onClick={onButtonPress}>
            {children}
        </div>
    );
}

export default Authentication;



