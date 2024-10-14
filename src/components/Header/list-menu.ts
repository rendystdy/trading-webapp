export interface IListMenu {
  title: string,
  href: string,
  subMenu?: { title: string; href: string; }[] | null
}

const LIST_SUB_MENU_ANNOUNCEMENT: { title: string; href: string; }[] = [
  {
    title: "Announcement",
    href: "news/announcement",
  },
  {
    title: "Calendar",
    href: "/",
  },
  {
    title: "Currency",
    href: "/",
  },
];

const LIST_SUB_MENU_EDUCATION: { title: string; href: string; }[] = [
  {
    title: "Video Tutorial",
    href: "education/tutorial",
  },
  {
    title: "Trading guides and Tutorial",
    href: "education/trading-guide",
  },
  {
    title: "FAQ",
    href: "education/faq",
  },
];

export const LIST_MENU: IListMenu[] = [
  {
    title: 'Home',
    href: '/',
    subMenu: null
  },
  {
    title: 'Product',
    href: '/',
    subMenu: LIST_SUB_MENU_ANNOUNCEMENT
  },
  {
    title: 'Education',
    href: '/',
    subMenu: LIST_SUB_MENU_EDUCATION
  },
  {
    title: 'News',
    href: '/',
    subMenu: LIST_SUB_MENU_ANNOUNCEMENT
  },
  {
    title: 'About',
    href: '/',
    subMenu: LIST_SUB_MENU_ANNOUNCEMENT
  }
]