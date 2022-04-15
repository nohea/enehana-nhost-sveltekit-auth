// nhost client

import { NhostClient, type NhostClientConstructorParams } from "@nhost/nhost-js";
import { writable } from "svelte/store";

export const VITE_NHOST_BACKEND_URL = import.meta.env.VITE_NHOST_BACKEND_URL as string;

export const config: NhostClientConstructorParams = {
    backendUrl: VITE_NHOST_BACKEND_URL,
};

export const nhost = new NhostClient(config);

// store
export const isSignedIn = writable(null);
export const user = writable(null);

nhost.auth.onAuthStateChanged(
    (event, session) => {
        console.log(`auth state changed. State is now ${event} with session: `, session);
        if (event === 'SIGNED_IN') {
            isSignedIn.set(true);
            user.set(session?.user);
        }
        else {
            isSignedIn.set(false);
            user.set(null);
        }
    }
);

export async function signIn(parameters) {
    // console.log("signIn(parameters): ", parameters);

    let params = {
        email: parameters.email,
        password: parameters.password,
    };

    if (parameters.email) {
        params.email = parameters.email;
    }
    if (parameters.password) {
        params.password = parameters.password;
    }

    // TODO: sanitize inputs

    const data = await nhost.auth.signIn(params);

    return {
        ...data,
    };
}


