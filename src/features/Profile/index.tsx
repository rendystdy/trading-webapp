import Header from "@/components/Header";
import React from "react";
import {
  User2Icon,
  CreditCard,
  Banknote,
  UserPen,
  Plus,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Button from "@/components/Button";

import * as Models from "@/interfaces/account-live-response";
import * as ModelDemo from "@/interfaces/account-demo-response";
import accountLiveJson from "@/json/account-live.json";
import accountDemoJson from "@/json/account-demo.json";
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  function onLogin(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // return navigate('/profile')
  }
  const accountLiveResponse: Models.AccountLive.IAccountLiveResponse[] =
    accountLiveJson;
  const accountDemoResponse: ModelDemo.AccountDemo.IAccountDemoResponse[] =
    accountDemoJson;
  const [open, setOpen] = React.useState(true);
  return (
    <Dialog open={ open } onOpenChange={ setOpen }>
      <div className="bg-lightGrayishBlueSecondary">
        <div className="flex flex-col md:flex-row">
          <div className="hidden w-1/3 flex-col md:items-stretch bg-veryDarkBlue px-6 py-7 md:flex">
            <h1 className="font-poppins font-extrabold text-2xl text-white mb-12">
              Account Info
            </h1>
            <ul className="flex flex-col gap-y-7 px-2">
              <li>
                <button className="flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400">
                  <User2Icon className="mr-3" /> Akun MT5
                </button>
              </li>
              <li>
                <button className="flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400">
                  <CreditCard className="mr-3" /> Deposit
                </button>
              </li>
              <li>
                <button className="flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400">
                  <Banknote className="mr-3" /> WithDrawal
                </button>
              </li>
              <li>
                <button className="flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400">
                  <UserPen className="mr-3" /> Profile
                </button>
              </li>
            </ul>
          </div>
          <div className="flex w-full gap-y-4 flex-col px-7 py-3">
            <div className="flex w-full flex-col rounded-xl px-3 py-4 bg-white md:py-6 md:px-7">
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-poppins font-semibold text-base text-veryDarkBlue">
                  Live Accounts
                </h1>
                <Button className="flex bg-veryDarkBlue items-center font-poppins font-bold text-sm text-center text-white">
                  <Plus className="text-white" /> ADD
                </Button>
              </div>
              <div className="flex flex-col gap-y-4">
                { accountLiveResponse.map((item) => (
                  <CardAccount { ...item } />
                )) }
              </div>
            </div>
            <div className="flex w-full flex-col rounded-xl px-3 py-4 bg-white md:py-6 md:px-7">
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-poppins font-semibold text-base text-veryDarkBlue">
                  Demo Account
                </h1>
              </div>
              <div className="flex flex-col gap-y-4">
                { accountDemoResponse.map((item) => (
                  <CardAccount { ...item } />
                )) }
              </div>
            </div>
          </div>
        </div>
        <DialogContent className="p-0 border-0 overflow-hidden rounded-3xl w-11/12 md:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="bg-darkBlue p-3 text-white font-poppins font-semibold text-lg text-center">
              Change Passowrd
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-6 pt-3 px-12">
            <Form { ...form }>
              <form onSubmit={ form.handleSubmit(onLogin) } className="space-y-4">
                <FormField
                  control={ form.control }
                  name="currentPassword"
                  render={ ({ field }) => (
                    <FormItem className="flex flex-col">
                      <div className="flex items-center gap-x-4">
                        <FormLabel
                          htmlFor={ "currentPassword" }
                          className="flex h-10 items-center justify-between font-poppins font-semibold text-lg text-black px-3 py-1 text-nowrap w-1/2"
                        >
                          Current Password{ " " }
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            variant="DEFAULT"
                            type={ "password" }
                            className="bg-veryLightGrayWhite border border-borderInput rounded-xl"
                            placeholder={ "Current Password" }
                            { ...field }
                          />
                        </FormControl>
                      </div>
                      <div className="flex gap-x-8">
                        <div className="w-1/2 bg-transparent" />
                        <div className="w-full">
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  ) }
                />
                <FormField
                  control={ form.control }
                  name="newPassword"
                  render={ ({ field }) => (
                    <>
                      <FormItem className="flex flex-col">
                        <div className="flex items-center gap-x-4">
                          <FormLabel
                            htmlFor={ "newPassword" }
                            className="flex h-10 items-center justify-between font-poppins font-semibold text-lg text-black px-3 py-1 text-nowrap w-1/2"
                          >
                            New Password <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              variant="DEFAULT"
                              type={ "password" }
                              className="bg-veryLightGrayWhite border border-borderInput rounded-xl"
                              placeholder={ "New Password" }
                              { ...field }
                            />
                          </FormControl>
                        </div>
                        <div className="flex gap-x-8">
                          <div className="w-1/2 bg-transparent" />
                          <div className="w-full">
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                      <div className="flex gap-x-10">
                        <div className="w-1/2 bg-transparent"></div>
                        <div className="flexr border border-borderInput w-full px-7 py-5">
                          <h1 className="font-poppins font-medium text-lg text-black mb-2">
                            Password Requirements:
                          </h1>
                          <ul className="flex flex-col gap-y-1">
                            <li className="flex items-center font-poppins font-medium text-lg gap-x-4 text-darkGrey">
                              <CheckCircle2 className="h-6 w-6 text-green-600" />{ " " }
                              Lowercase & Uppercase
                            </li>
                            <li className="flex items-center font-poppins font-medium text-lg gap-x-4 text-darkGrey">
                              <CheckCircle2 className="h-6 w-6 text-green-600" />{ " " }
                              Number (0-9)
                            </li>
                            <li className="flex items-center font-poppins font-medium text-lg gap-x-4 text-darkGrey">
                              <CheckCircle2 className="h-6 w-6 text-green-600" />{ " " }
                              Special Characters (!@#$%^&*)
                            </li>
                            <li className="flex items-center font-poppins font-medium text-lg gap-x-4 text-darkGrey">
                              <XCircle className="h-6 w-6 text-red-600" /> At
                              least 8 characters
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                  ) }
                />
                <FormField
                  control={ form.control }
                  name="confirmNewPassword"
                  render={ ({ field }) => (
                    <FormItem className="flex flex-col">
                      <div className="flex items-center gap-x-4">
                        <FormLabel
                          htmlFor={ "confirmNewPassword" }
                          className="flex h-10 items-center justify-between font-poppins font-semibold text-lg text-black px-3 py-1 text-nowrap w-1/2"
                        >
                          Confirm New Password{ " " }
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            variant="DEFAULT"
                            type={ "password" }
                            className="bg-veryLightGrayWhite border border-borderInput rounded-xl"
                            placeholder={ "Confirm New Password" }
                            { ...field }
                          />
                        </FormControl>
                      </div>
                      <div className="flex gap-x-8">
                        <div className="w-1/2 bg-transparent" />
                        <div className="w-full">
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  ) }
                />
                <div className="flex flex-col py-6">
                  <div className="flex md:justify-center">
                    <Button
                      className="w-full md:w-[367px] self-end py-2 rounded-full font-poppins font-semibold text-lg text-center bg-veryDarkBlue text-white"
                      type="submit"
                      onClick={ () => { setOpen(prev => !prev); } }
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
