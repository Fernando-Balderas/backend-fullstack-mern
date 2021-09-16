import { Router } from "express";
import books from "./books.route";

const router = Router();

const defaultRoutes = [
  {
    path: '/books',
    route: books,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router; 
