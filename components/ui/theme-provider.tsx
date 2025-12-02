"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useEffect } from "react"
import { UserDetailContext } from "@/context/userDetailContext"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const {user} = useUser();
  const createNewUser = async () =>{
    const result = await axios.post("/api/user");
    console.log(result);
    setUserDetail(result?.data);
  }

  const [userDetail, setUserDetail] = React.useState<any>(undefined);

  useEffect(()=>{
    user&&createNewUser();
  },[user])



  return <NextThemesProvider {...props}>
    
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
        {children}
    </UserDetailContext.Provider>
    
    </NextThemesProvider>
}