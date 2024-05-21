export const generalSite = {
  name: "OilBlog",
  url: "https://example.com",
  description: "Your blog for figuring out oil",
  author: "D'Bragas",
  links: {
    linkedin: "",
    github: "https://github.com/Knoka1",
  },
};
export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];
export type GeneralSite = typeof generalSite;
