import AdminLayout from "components/admin_layout/AdminLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter()

  
  async function logout(){
    const result = await fetch("/api/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });


    const res = await result.json()
    console.log(res)
    router.push('/admin')
  }

  
  
    return (
      <AdminLayout>
        <p>authenticated</p>
        <button onClick={logout}>logout</button>
      </AdminLayout>
    );
  
    
  
  
}
