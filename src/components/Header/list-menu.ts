export interface IListMenu {
  title: string,
  href: string,
  subMenu?: { title: string; href: string; }[] | null
}

const LIST_SUB_MENU_ANNOUNCEMENT: { title: string; href: string; }[] = [
  {
    title: "Announcement",
    href: "/news/announcement",
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
    href: "/education/tutorial",
  },
  {
    title: "Trading guides and Tutorial",
    href: "/education/trading-guide",
  },
  {
    title: "FAQ",
    href: "/education/faq",
  },
];

const LIST_SUB_MENU_PROFILE: { title: string; href: string; }[] = [
  {
    title: "Akun MT5",
    href: "akun",
  },
  {
    title: "Deposit",
    href: "deposit",
  },
  {
    title: "Withdrawal",
    href: "withdrawal",
  },
  {
    title: "Profile",
    href: "profile",
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

export const LIST_MENU_PROFILE: IListMenu[] = [
  {
    title: 'Home',
    href: '/',
    subMenu: null
  },
  {
    title: 'Web Trader',
    href: '/',
    subMenu: LIST_SUB_MENU_ANNOUNCEMENT
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
export const LIST_MENU_PROFILE_SIDE_MENU: IListMenu[] = [
  {
    title: 'Home',
    href: '/',
    subMenu: null
  },
  {
    title: 'Account Info',
    href: '/',
    subMenu: LIST_SUB_MENU_PROFILE
  },
  {
    title: 'Web Trader',
    href: '/',
    subMenu: LIST_SUB_MENU_ANNOUNCEMENT
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