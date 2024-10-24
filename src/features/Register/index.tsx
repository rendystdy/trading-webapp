import Banner from '@/components/Banner'
import React, { useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Button from '@/components/Button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { CheckCircle2 } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { loginAsync, openModalLogin } from './registerSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/hooks/use-toast'


const formSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email().min(8).max(50),
    password: z.string()
        .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
        .regex(new RegExp(".*[a-z].*"), "One lowercase character")
        .regex(new RegExp(".*\\d.*"), "One number")
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "One special character")
        .min(8, "Must be at least 8 characters in length"),
    confirmPassord: z.string().min(8),
    codeReferral: z.string().min(2).max(50).optional(),
    phoneNumber: z.string().min(2).max(50),
    checkTerms: z.boolean().refine(val => val === true, {
        message: 'You must accept the terms and conditions'
    }),

})
    .refine(data => data.password === data.confirmPassord, {
        message: "Passwords, don't match",
        path: ["confirmPassord"]
    });

const formSchemaLogin = z.object({
    email: z.string().email().min(6).max(50),
    password: z.string().min(6).max(50),
})

interface IForms {
    label: string;
    value: 'name' | 'email' | 'password' | 'confirmPassord' | 'codeReferral' | 'phoneNumber';
    placeholder: string;
    isRequired: boolean;
    type: string;
}

const LIST_FORM: IForms[] = [
    {
        label: 'Nama',
        value: 'name',
        placeholder: 'Nama',
        type: 'text',
        isRequired: true,
    },
    {
        label: 'Email',
        value: 'email',
        placeholder: 'Email',
        type: 'email',
        isRequired: true,
    },
    {
        label: 'Password',
        value: 'password',
        placeholder: 'Password',
        type: 'password',
        isRequired: true,
    },
    {
        label: 'Ketik ulang password',
        value: 'confirmPassord',
        placeholder: 'Ketik ulang password',
        type: 'password',
        isRequired: true,
    },
    {
        label: 'Kode Referall',
        value: 'codeReferral',
        placeholder: 'Kode Sales / Referral (jika ada)',
        type: 'text',
        isRequired: false,
    },
    {
        label: 'No. Handphone',
        value: 'phoneNumber',
        placeholder: 'No. Handphone',
        isRequired: true,
        type: 'number',
    },
]

function Register() {
    const modalLogin = useAppSelector(state => state.register.modalLogin);
    const modalVerification = useAppSelector(state => state.register.modalVerification);
    const status = useAppSelector(state => state.register.status);
    const errorMessage = useAppSelector(state => state.register.errorMessage);
    const dispatch = useAppDispatch();
    const { toast } = useToast();

    useEffect(() => {
        if (status === 'failed' && errorMessage) {
            toast({
                title: "Error",
                description: errorMessage,
            })
        }
    }, [status]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: '',
            password: '',
            confirmPassord: '',
            codeReferral: '',
            phoneNumber: '',
            checkTerms: false,
        },
    })

    const formLogin = useForm<z.infer<typeof formSchemaLogin>>({
        resolver: zodResolver(formSchemaLogin),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // setIsLogin(false);
        // setOpen(true);
    }

    function onLogin(values: z.infer<typeof formSchemaLogin>) {
        const payload = {
            email: values.email,
            password: values.password,
        }
        dispatch(loginAsync(payload))
    }

    const handleLinkVerification = () => {
        dispatch(openModalLogin(!modalLogin))
    }

    return (
        <Dialog open={modalLogin || modalVerification} onOpenChange={() => dispatch(openModalLogin(!modalLogin))}>
            <div className='dark:bg-veryDarkBlueTertiary'>
                <Banner onHandleDemoAccount={() => { }} title='Registration' description='Create an account to get started on trading immediately' />
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-full px-8 py-10 md:px-16'>
                        <h1 className='font-poppins font-bold text-3xl text-veryDarkGrey text-center mb-6 dark:text-white'>Register an Account</h1>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                {LIST_FORM.map(item => (
                                    <FormField
                                        key={item.label}
                                        control={form.control}
                                        name={item.value}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor={item.value} className='font-poppins font-normal text-base'>{item.label} {item.isRequired ? <span className='text-red-500'>*</span> : null}</FormLabel>
                                                <FormControl>
                                                    <Input type={item.type} className='bg-veryLightGrayWhite border border-borderInput rounded-xl' placeholder={item.placeholder} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                ))}
                                <FormField
                                    control={form.control}
                                    name={'checkTerms'}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
                                                <Label htmlFor="terms" className='font-poppins font-normal text-sm block'>I have read and understood the <span className='font-bold text-darkBlueSecondary'>Terms and Conditions</span></Label>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='flex justify-end'>
                                    <Button disabled={!form.formState.isValid} className='w-full md:w-[367px] self-end py-4 rounded-full font-poppins font-semibold text-lg text-center bg-veryDarkBlue text-white' type="submit">Register</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                    <div className='w-full md:w-1/2 h-auto px-8 py-10 pb-20 bg-veryDarkBlue bg-register bg-center'>
                        <img src="/assets/images/Logo-white.png" alt="Logo-white" />
                        <h1 className='font-poppins font-bold text-2xl text-white mb-4'>Get started to enjoy these <span className='text-yellow-400'>benefits</span>!</h1>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex items-start text-white'><CheckCircle2 className='mr-4' /> Unlimited access to all member-only features</li>
                            <li className='flex items-start text-white'><CheckCircle2 className='mr-4' /> Exclusive trading tools to elevate your analysis</li>
                            <li className='flex items-start text-white'><CheckCircle2 className='mr-4' /> Get started with $10,000 for your demo account</li>
                        </ul>
                    </div>
                </div>
                <DialogContent className="p-0 border-0 overflow-hidden rounded-3xl w-11/12 md:w-max dark:bg-veryDarkGreyMostlyBlack">
                    {modalLogin ? (
                        <>
                            <DialogHeader className='bg-yellow-400'>
                                <DialogTitle className='bg-darkBlue p-3 text-white font-poppins font-semibold text-lg text-center'>Login</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-6 pt-3 px-12">
                                <Form {...formLogin}>
                                    <form onSubmit={formLogin.handleSubmit(onLogin)} className="space-y-8">
                                        <FormField
                                            control={formLogin.control}
                                            name='email'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel htmlFor={'email'} className='font-poppins font-normal text-base'></FormLabel>
                                                    <FormControl>
                                                        <Input variant='LOGIN' type={'email'} className='bg-veryLightGrayWhite border border-borderInput rounded-xl dark:bg-white/15 dark:text-white dark:placeholder:text-white dark:border-0' placeholder={'email'} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={formLogin.control}
                                            name='password'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel htmlFor={'password'} className='font-poppins font-normal text-base'></FormLabel>
                                                    <FormControl>
                                                        <Input variant='LOGIN' type={'password'} className='bg-veryLightGrayWhite border border-borderInput rounded-xl dark:bg-white/15 dark:text-white dark:placeholder:text-white dark:border-0' placeholder={'password'} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className='flex flex-col'>
                                            <div className='pb-6'>
                                                <p className='text-center text-vividRed font-poppins font-medium text-sm'>Forgot your password?</p>
                                            </div>
                                            <div className='flex md:justify-end'>
                                                <Button status={status} disabled={!formLogin.formState.isValid || status === 'loading'} className='w-full md:w-[367px] self-end py-2 rounded-full font-poppins font-semibold text-lg text-center bg-hover text-white' type="submit">Login</Button>
                                            </div>
                                            <div className='flex items-center justify-center pt-4'>
                                                <p className='font-poppins font-normal text-sm text-center'>Not a member ? <span className='text-yellow-400'>Register Now</span></p>
                                            </div>
                                        </div>
                                    </form>
                                </Form>
                            </div>
                        </>
                    ) : modalVerification && (
                        <div className={cn("flex flex-col items-center gap-4 py-9 px-6", modalLogin ? "hidden" : "flex")}>
                            <img src="/assets/images/icon_email_verification.png" className="w-12 h-12" alt="icon_verification" />
                            <h1 className='font-poppins font-bold text-xl text-veryDarkGrey text-center dark:text-white'>Verifikasi email anda sekarang</h1>
                            <p className='font-poppins font-semibold text-sm text-darkGrey text-center dark:text-white'>Kami akan mengirimkan link verifikasi ke email anda yang terdaftar di EsaFX.</p>
                            <p className='font-poppins font-bold text-base text-darkBlueSecondary text-center dark:text-mainBlue'>mymail@mail.com</p>
                            <div className='flex md:justify-end'>
                                <Button className='w-fit md:w-fit self-end py-2 rounded-full font-poppins font-semibold text-sm text-center bg-hover text-white dark:bg-mainBlue' onClick={handleLinkVerification}>Kirim Link Verifikasi</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </div>
        </Dialog>
    )
}

export default Register
