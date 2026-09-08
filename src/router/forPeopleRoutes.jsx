import SeptikFor2Users from "../pages/SeptikForUsers/SeptikFor2Users/SeptikFor2Users.jsx";
import SeptikFor3Users from "../pages/SeptikForUsers/SeptikFor3Users/SeptikFor3Users.jsx";
import SeptikFor4Users from "../pages/SeptikForUsers/SeptikFor4Users/SeptikFor4Users.jsx";
import SeptikFor5Users from "../pages/SeptikForUsers/SeptikFor5Users/SeptikFor5Users.jsx";
import SeptikFor6Users from "../pages/SeptikForUsers/SeptikFor6Users/SeptikFor6Users.jsx";

export const forPeopleRoutes = [
  { path: "/septik-na-2-cheloveka", element: <SeptikFor2Users /> },
  { path: "/septik-na-3-cheloveka", element: <SeptikFor3Users /> },
  { path: "/septik-na-4-cheloveka", element: <SeptikFor4Users /> },
  { path: "/septik-na-5-chelovek", element: <SeptikFor5Users /> },
  { path: "/septik-na-6-chelovek", element: <SeptikFor6Users /> },
];

export const forPeopleValidPaths = [
  '/septik-na-2-cheloveka',
  '/septik-na-3-cheloveka',
  '/septik-na-4-cheloveka',
  '/septik-na-5-chelovek',
  '/septik-na-6-chelovek',
];