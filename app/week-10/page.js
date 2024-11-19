"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignIn() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.dir(user);

    return (
        <main className="bg-gray-800 p-5 text-white min-h-screen">
            <header className="mb-4">
                <h1 className="text-3xl text-center font-bold">Shopping List App</h1>
            </header>
            <div className="flex justify-center">
            {user ? (
                <div className="text-center">
                    <p>Welcome {user.displayName}!</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} className="w-10 h-10" />
                    <div className="mb-4 mt-4" >
                        <Link href="/week-10/shopping-list">
                        <p className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800">
                            Click here for Shopping List
                        </p>
                        </Link>
                    </div>
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800"
                    >Sign Out</button>
                </div>
            ) : (
                <div>
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800"
                    >Sign In with GitHub</button>
                </div>
            )}
            </div>
        </main>
    );

}