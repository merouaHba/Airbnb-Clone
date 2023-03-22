import React from 'react'
import styles from '../styles/signin.module.css'
import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";


const signin = ({ getProviders }: any) => {
  console.log(getProviders)
  return (
    <div className="pt-28 flex flex-col justify-center items-center">
      {Object.values(getProviders).map((provider: any) => {
        return (
          <div key={provider.name}>
            <button
              className={styles.button}
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default signin

export async function getServerSideProps(context:any) {
 const { req } = context;
 const session = await getSession({ req });

 if (session) {
   return {
     redirect: { destination: "/" },
   };
 }

 return {
   props: {
     getProviders: await getProviders(),
     csrfToken: await getCsrfToken(context),
   },
 };
}