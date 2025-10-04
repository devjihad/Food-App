import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../../assets/assets';
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import appe from "../../../Firebase/Firebase.config"
export const StoreContext =createContext(null)

const Context = (props) => {
    // const Auth = getAuth(appe)

    const [count, setcount]=useState({})

    const AddTocard=(itemid)=>{
        if(!count[itemid]){
            setcount((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setcount((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const Remove=(itemid)=>{
        setcount((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    useEffect(()=>{
        console.log(count)
    },[count])

    // const Login=(email,password)=>{
    //     return signInWithEmailAndPassword(email,password ,Auth)
    // }
    // const Signe =(email,password)=>{
        
    //     return createUserWithEmailAndPassword(email,password,Auth)
    // }

    const Storevalue ={
        food_list,
        count,
        setcount,
        AddTocard,
        Remove,
        // Login,
        // Signe
    }
    return (
        <StoreContext.Provider value={Storevalue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default Context;