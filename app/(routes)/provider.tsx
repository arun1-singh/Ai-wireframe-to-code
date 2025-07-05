"use client"
import React, { useEffect } from 'react'
import { useAuthContext } from '../provider';
import { useRouter } from 'next/navigation';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import axios from "axios";
import AppHeader from '../_components/AppHeader';
import { AppSidebar } from '../_components/AppSidebar';

function DashboardProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const user = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!user?.user && user.user) return router.replace('/')


        user?.user && checkUser()

    }, [user])


    const checkUser = async () => {
        const result = await axios.post('/api/user', {
            userName: user?.user?.displayName,
            userEmail: user?.user?.email
        });
        console.log(user);
    }


    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full'>
                <AppHeader />
                {/* <SidebarTrigger /> */}
                <div className='p-10'>{children}</div>
            </main>
        </SidebarProvider>

    )
}

export default DashboardProvider

// "use client";
// import React, { useEffect } from 'react';
// import { useAuthContext } from '../provider';
// import { useRouter } from 'next/navigation';
// import axios from "axios";
// import AppHeader from '../_components/AppHeader';
// import { AppSidebar } from '../_components/AppSidebar';
// import { SidebarProvider } from '@/components/ui/sidebar';

// function DashboardProvider({ children }: { children: React.ReactNode }) {
//     const user = useAuthContext();
//     const router = useRouter();

    // useEffect(() => {
    //     if (!user?.user) return router.replace('/');
    //     checkUser();
    // }, [user]);

    // const checkUser = async () => {
    //     try {
    //         await axios.post('/api/user', {
    //             userName: user?.user?.displayName,
    //             userEmail: user?.user?.email || "No Email"
    //         });
    //         console.log(user);
    //     } catch (error) {
    //         console.error("User check error:", error);
    //     }
    // };
    // const checkUser = async () => {
    //     console.log("User Object:", user?.user); // Debugging
    //     try {
    //         await axios.post('/api/user', {
    //             userName: user?.user?.displayName || "No Name",
    //             userEmail: user?.user?.email || "No Email"
    //         });
    //     } catch (error) {
    //         console.error("User check error:", error);
    //     }
    // };

    // useEffect(() => {
    //     if (user?.user === undefined) return; // Wait until user is properly loaded
    
    //     if (!user?.user) {
    //         console.log("No user found, redirecting to home...");
    //         return router.replace('/');
    //     }
    
    //     checkUser();
    // }, [user]);

    // const checkUser = async () => {
    //     try {
    //         const userEmail = user?.user?.email || user?.user?.providerData?.[0]?.email || "No Email";
    //         console.log("Sending user data to backend:", { userName: user?.user?.displayName, userEmail });
    
    //         await axios.post('/api/user', {
    //             userName: user?.user?.displayName,
    //             userEmail
    //         });
    
    //     } catch (error) {
    //         console.error("User check error:", error);
    //     }
    // };
    


    
    

//     return (
//         <SidebarProvider>
//             <AppSidebar />
//             <main className='w-full'>
//                 <AppHeader />
//                 <div className='p-10'>{children}</div>
//             </main>
//         </SidebarProvider>
//     );
// }

// export default DashboardProvider;

