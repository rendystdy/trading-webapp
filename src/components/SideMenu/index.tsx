import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LIST_MENU } from '../Header/list-menu'
import { ChevronDown } from "lucide-react"
import { ListItem } from '../Header'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



function SideMenu() {
    return (
        <Sheet>
            <SheetTrigger className='transition-opacity data-[state=open]:opacity-0'>
                <div className='relative bg-mainBlue w-16 h-16 rounded-full hover:bg-mainBlue/80 md:hidden'>
                    <div className='absolute top-5 right-3 h-[2px] w-[27px] bg-white' />
                    <div className='absolute top-8 right-2 h-[3px] w-[44px] bg-white' />
                    <div className='absolute top-11 right-4 h-[2px] w-[29px] bg-white' />
                </div>
            </SheetTrigger>
            <SheetContent className='w-full bg-[#D3E4F4E5]/40 md:hidden'>
                <div className='py-16'>
                    <ul>
                        {LIST_MENU.map((item, index) => (
                            <li className='w-full relative items-center font-poppins text-base font-normal text-[#101010]'>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value={`item-${index+1}`}>
                                        <AccordionTrigger>
                                            {item.title}
                                            {item.subMenu && item.subMenu?.length > 0 ? <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200" /> : null}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {item.subMenu && (
                                                <ul className='bg-white py-3 px-2'>
                                                    {item.subMenu.map(sub => {
                                                        return (
                                                            <li className='font-poppins font-normal text-xs mb-3 hover:text-[#246EA6] cursor-pointer'>{sub.title}</li>
                                                        )
                                                    })}
                                                </ul>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>

    )
}

export default SideMenu
