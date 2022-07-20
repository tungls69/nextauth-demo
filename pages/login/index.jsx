import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSession, getProviders, signOut, signIn } from 'next-auth/react';
import Router from "next/router";

Login.propTypes = {
    
};

function Login(props) {
    const [providers, setproviders] = useState();
    const { data: session, status } = useSession();

    useEffect(() => {
      const setTheProviders = async () => {
        const setupProviders = await getProviders();
        setproviders(setupProviders);
      };
      setTheProviders();
    }, []);
  
    // useEffect(() => {
    //   if (session){
    //     Router.push("/dashboard");
    // }
    // }, [session]);
  
    if (status === 'loading') {
      return <h1>Loading...</h1>;
    }

    if (session) {
        console.log(session)
      return (
        <>
          Signed in as {session.user?.email} <br />
          <button type="button" onClick={() => signOut()}>
            Sign out
          </button>
        </>
      );
    }

    return (
        <div>
            <button type="button" className="w-80 my-2 p-3 bg-red-500 text-white" onClick={() => {if(providers?.google){signIn(providers.google.id)}}}>
                Login by google
            </button>
        </div>
    );
}

export default Login;