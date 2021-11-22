import React, { createContext, useState, useEffect, ReactNode, SetStateAction } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from "firebase/auth";

type User = {
  id?: string;
  name?: string;
  uemail?: string | null;
  uphoneNumber?: string | null;
  avatar?: string;
};

type AuthContextType = {
  user: User | undefined;
  currentUser: SetStateAction<null> | string;
  signInWithGoogle: () => Promise<void>;
  login: (email: string, password:string) => Promise<UserCredential>;
  register: (email: string, password:string) => Promise<UserCredential>;
  logout: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();
  const [currentUser, setCurrentUser] = useState(null);
  
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, phoneNumber, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          uemail: email,
          uphoneNumber: phoneNumber,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      console.log(result);
      const { displayName, email, phoneNumber, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        uemail: email,
        uphoneNumber: phoneNumber,
        avatar: photoURL,
      });
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    setCurrentUser(user as any)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  async function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  async function logout() {
    return signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, currentUser, signInWithGoogle, register, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
