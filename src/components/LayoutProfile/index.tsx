import React from 'react'
import Header from '@/components/Header';
import { Navigate, Outlet } from "react-router-dom";
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"
import { useAppDispatch, useAppSelector, useScrollToTop } from '@/app/hooks';
import SideMenuProfile from '@/features/Profile/SideMenuProfile';
import { logout, openModalLogout } from '@/features/Register/registerSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import Button from '../Button';

function LayoutProfile() {
  useScrollToTop();
  const currentUser = useAppSelector(state => state.register.token);

  const isModalLogout = useAppSelector(state => state.register.modalLogout)
  const dispatch = useAppDispatch();

  if (!currentUser) {
    return <Navigate to='/register' replace />
  }

  const onOpenChangeModal = () => {
    dispatch(openModalLogout(!isModalLogout));
  }

  return (
    <Dialog open={isModalLogout} onOpenChange={onOpenChangeModal}>

      <div>
        <Header />
        <div className="flex flex-col md:flex-row">
          <SideMenuProfile />
          <Outlet />
        </div>
        <Footer />
        <Toaster />
      </div>
      <DialogContent className="p-0 border-0 overflow-hidden rounded-3xl w-10/12 md:max-w-4xl dark:bg-veryDarkGreyMostlyBlack">
        <DialogHeader>
          <DialogTitle className="bg-darkBlue p-3 text-white font-poppins font-semibold text-lg text-center">
            {isModalLogout ? 'Logout' : 'Change Passowrd'}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-6 pt-3 px-6 md:px-12">
          <div className="flex flex-col justify-center items-center gap-y-8">
            <h1>Are you sure want to logout ?</h1>
            <div className="flex items-center gap-x-8">
              <Button
                onClick={() => dispatch(openModalLogout(false))}
                className="py-2 rounded-full font-poppins font-semibold text-lg text-center bg-veryLightGray text-veryDarkBlue"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  dispatch(logout());
                  dispatch(openModalLogout(false))
                }}
                className="py-2 rounded-full font-poppins font-semibold text-lg text-center bg-veryDarkBlue text-white"
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LayoutProfile