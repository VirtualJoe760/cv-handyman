// src/utils/navigation.ts

export interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

// STATIC NAVIGATION

export const staticNav = {
  title: "Coachella Valley Handyman",
  logo: "/palm-tree-svgrepo-com.svg", // Logo path
};

// NAVIGATION LINKS

export const navigation: NavItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "Tips", href: "/tips", current: false },
  { name: "Our Services", href: "/our-services", current: false },
  { name: "Service Area", href: "/cities", current: false },
  { name: "Contact", href: "/#contact", current: false },
];

