import React, { useState } from "react";
import {
  Plus,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Button from "@/components/Button";

import * as Models from "@/interfaces/account-live-response";
import * as ModelDemo from "@/interfaces/account-demo-response";
import CardAccount from "./CardAccount";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppSelector, useFetch } from "@/app/hooks";
import { fetchAccountDemoAsync, fetchAccountLiveAsync } from "./profileSlice";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    currentPassword: z.string().min(6).max(50),
    newPassword: z.string().min(6).max(50),
    confirmNewPassword: z.string().min(6).max(50),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords, don't match",
    path: ["confirmNewPassword"],
  });

function Profile() {
  const accountDemo = useAppSelector(state => state.profile.accountDemo)
  const isModalLogout = useAppSelector(state => state.register.modalLogout)
  const [isModalChangePassword, setIsModalChangePassword] = useState(false);
  const accountLive = useAppSelector(state => state.profile.accountLive)
  const statusDemo = useAppSelector(state => state.profile.statusDemo)
  const statusLive = useAppSelector(state => state.profile.statusLive)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  useFetch(fetchAccountDemoAsync);
  useFetch(fetchAccountLiveAsync);

  function onChangePassword(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // setOpen(prevOpen => !prevOpen);
    // return navigate('/profile')
  }
  const accountLiveResponse: Models.AccountLive.IAccountLiveResponse[] =
    accountLive?.data || [];
  const accountDemoResponse: ModelDemo.AccountDemo.IAccountDemoResponse[] =
    accountDemo?.data || [];
  const onOpenChangeModal = () => {
      setIsModalChangePassword(prev => !prev);
  }

  return (
    <Dialog open={isModalChangePassword} onOpenChange={onOpenChangeModal}>
      <div className="bg-lightGrayishBlueSecondary w-full dark:bg-veryDarkBlueTertiary">
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full gap-y-4 flex-col px-7 py-3">
            <div className="flex w-full flex-col rounded-xl px-3 py-4 bg-white dark:bg-veryDarkBlue md:py-6 md:px-7">
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-poppins font-semibold text-base text-veryDarkBlue dark:text-white">
                  Live Accounts
                </h1>
                <Button disabled={statusLive === 'loading'} className="flex bg-veryDarkBlue dark:bg-mainBlue items-center font-poppins font-bold text-sm text-center text-white">
                  <Plus className="text-white" /> ADD
                </Button>
              </div>
              <div className="flex flex-col gap-y-4">
                {statusLive === 'loading' ?
                  (
                    <div className={cn('flex flex-row items-center rounded-xl px-4 py-16 md:py-6 animate-pulse bg-gray')} />
                  ) :
                  accountLiveResponse?.map((item, index) => (
                    <CardAccount onModalChangePassword={() => setIsModalChangePassword(true)} key={index} {...item} />
                  ))}
              </div>
            </div>
            <div className="flex w-full flex-col rounded-xl px-3 py-4 bg-white dark:bg-veryDarkBlue md:py-6 md:px-7">
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-poppins font-semibold text-base text-veryDarkBlue dark:text-white">
                  Demo Account
                </h1>
              </div>
              <div className="flex flex-col gap-y-4">
                {statusDemo === 'loading' ?
                  (
                    <div className={cn('flex flex-row items-center rounded-xl px-4 py-16 md:py-6 animate-pulse bg-gray')} />
                  ) :
                  accountDemoResponse?.map((item, index) => (
                    <CardAccount onModalChangePassword={() => setIsModalChangePassword(true)} key={index} {...item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <DialogContent className="p-0 border-0 overflow-hidden rounded-3xl w-10/12 md:max-w-4xl dark:bg-veryDarkGreyMostlyBlack">
          <DialogHeader>
            <DialogTitle className="bg-darkBlue p-3 text-white font-poppins font-semibold text-lg text-center">
              {isModalLogout ? 'Logout' : 'Change Passowrd'}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-6 pt-3 px-6 md:px-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onChangePassword)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-x-4">
                          <FormLabel
                            htmlFor={"currentPassword"}
                            className="flex h-10 items-center justify-between font-poppins font-semibold text-lg text-black md:px-3 py-1 text-nowrap w-4/5 dark:text-white"
                          >
                            Current Password{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              variant="DEFAULT"
                              type={"password"}
                              className="bg-veryLightGrayWhite border border-borderInput rounded-xl dark:bg-veryDarkGreyTertiary dark:text-white dark:border-0"
                              placeholder={"Current Password"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="md:hidden" />
                        </div>
                        <div className="gap-x-8 hidden md:flex">
                          <div className="w-1/2 bg-transparent" />
                          <div className="w-full">
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <div>
                        <FormItem className="flex flex-col">
                          <div className="flex flex-col md:flex-row md:items-center md:gap-x-4">
                            <FormLabel
                              htmlFor={"newPassword"}
                              className="flex h-10 items-center justify-between font-poppins font-semibold text-lg text-black md:px-3 py-1 text-nowrap w-4/5 dark:text-white"
                            >
                              New Password{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                variant="DEFAULT"
                                type={"password"}
                                className="bg-veryLightGrayWhite border border-borderInput rounded-xl dark:bg-veryDarkGreyTertiary dark:text-white dark:border-0"
                                placeholder={"New Password"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="md:hidden" />
                          </div>
                          <div className="gap-x-8 hidden md:flex">
                            <div className="w-1/2 bg-transparent" />
                            <div className="w-full">
                              <FormMessage />
                            </div>
                          </div>
                        </FormItem>
                        <div className="gap-x-10 hidden md:flex">
                          <div className="w-4/5 bg-transparent"></div>
                          <div className="flexr border border-borderInput w-full px-7 py-5 dark:bg-lightGrayishBlueSecondary">
                            <h1 className="font-poppins font-medium text-lg text-black mb-2">
                              Password Requirements:
                            </h1>
                            <ul className="flex flex-col gap-y-1">
                              <li className="flex items-center font-poppins font-medium text-lg gap-x-4 text-darkGrey dark:text-black">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />{" "}
                                Lowercase & Uppercase
                              </li>
                              <li className="flex items-center font-poppins font-medium text-lg gap-x-4 text-darkGrey dark:text-black">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />{" "}
                                Number (0-9)
                              </li>
                              <li className="flex items-center font-poppins font-medium text-lg gap-x-4 text-darkGrey dark:text-black">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />{" "}
                                Special Characters (!@#$%^&*)
                              </li>
                              <li className="flex items-center font-poppins font-medium text-lg gap-x-4 text-darkGrey dark:text-black">
                                <XCircle className="h-6 w-6 text-red-600" /> At
                                least 8 characters
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmNewPassword"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-x-4">
                          <FormLabel
                            htmlFor={"confirmNewPassword"}
                            className="flex h-10 items-center justify-between font-poppins font-semibold text-lg text-black md:px-3 py-1 text-nowrap w-4/5 dark:text-white"
                          >
                            Confirm New Password{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              variant="DEFAULT"
                              type={"password"}
                              className="bg-veryLightGrayWhite border border-borderInput rounded-xl dark:bg-veryDarkGreyTertiary dark:text-white dark:border-0"
                              placeholder={"Confirm New Password"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="md:hidden" />
                        </div>
                        <div className="gap-x-8 hidden md:flex">
                          <div className="w-1/2 bg-transparent" />
                          <div className="w-full">
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col gap-y-4">
                    <div className="bg-lightGrayishBlueSecondary p-4 rounded block md:hidden">
                      <p className="font-poppins font-bold text-base text-hover">Note</p>
                      <ul>
                        <li className="font-poppins font-medium text-base text-black">*Password must be at least 8-15 characters</li>
                        <li className="font-poppins font-medium text-base text-black">*Password must contain at least one: Uppercase, Lowercase, Number, Special Character</li>
                        <li className="font-poppins font-medium text-base text-black">*Password can not contain username</li>
                      </ul>
                    </div>
                    <div className="flex md:justify-center">
                      <Button
                        className="w-full md:w-[367px] self-end py-2 rounded-full font-poppins font-semibold text-lg text-center bg-veryDarkBlue text-white"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default Profile;
