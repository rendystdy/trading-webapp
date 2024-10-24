import React from 'react'
import Header from '@/components/Header';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"
import { useScrollToTop } from '@/app/hooks';
import { history } from '@/app/helpers';

function Layout() {
  useScrollToTop();
  history.location = useLocation(); 
  history.navigate = useNavigate();
  
  return (
    <div>
      <Header variant='DEFAULT' />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}

export default Layout