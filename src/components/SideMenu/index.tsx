import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LIST_MENU } from "../Header/list-menu";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger className="transition-opacity data-[state=open]:opacity-0">
        <div className="relative bg-mainBlue w-16 h-16 rounded-full hover:bg-mainBlue/80 md:hidden">
          <div className="absolute top-5 right-3 h-[2px] w-[27px] bg-white" />
          <div className="absolute top-8 right-2 h-[3px] w-[44px] bg-white" />
          <div className="absolute top-11 right-4 h-[2px] w-[29px] bg-white" />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full bg-bgHeader/80 md:hidden py-16 px-7">
        <Accordion type="single" collapsible className="mt-11">
          <ul>
            {LIST_MENU.map((item, index) => (
              <li
                key={index.toString()}
                className="w-full relative items-center font-poppins text-base font-normal text-[#101010]"
              >
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>
                    {item.title.toLowerCase() === 'home' ? <Link to={item.href}>{item.title}</Link> : item.title}
                    {item.subMenu && item.subMenu?.length > 0 ? (
                      <ChevronDown className="h-6 w-6 rotate-180 shrink-0 transition-transform duration-200" />
                    ) : null}
                  </AccordionTrigger>
                  {item.subMenu && item.subMenu?.length > 0 && (
                    <AccordionContent>
                      {item.subMenu && (
                        <ul className="bg-white py-3 px-2">
                          {item.subMenu.map((sub, indexSubmenu) => {
                            return (
                              <li
                                key={indexSubmenu.toString()}
                                className="font-poppins font-normal text-xs mb-3 hover:text-hover cursor-pointer"
                              >
                                <Link to={sub.href}>{sub.title}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </AccordionContent>
                  )}
                </AccordionItem>
              </li>
            ))}
          </ul>
        </Accordion>
        <SheetFooter className="absolute left-0 right-0 bottom-0 w-full">
          <div className="flex flex-row items-center justify-between px-5 py-6">
            <Switch id="dark-mode" className="shadow-lg" />
            <div className="flex items-center">
              <img
                src="/english_logo.png"
                alt="english-logo"
                className="shadow-lg"
              />
              <ChevronDown color="white" className="h-4 w-4" />
            </div>
          </div>
          <Separator orientation="horizontal" className="bg-separtaror" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SideMenu;
