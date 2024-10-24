import React from 'react'
import Header from '@/components/Header';
import { Navigate, Outlet } from "react-router-dom";
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"
import { useAppSelector, useScrollToTop } from '@/app/hooks';
import SideMenuProfile from '@/features/Profile/SideMenuProfile';

function LayoutProfile() {
  useScrollToTop();
  const currentUser = useAppSelector(state => state.register.token);

  if (!currentUser) {
    return <Navigate to='/register' replace />
  }
  
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <SideMenuProfile />
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  )
}

export default LayoutProfile