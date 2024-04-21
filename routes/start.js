// const express = require("express");
// const UsersController = require("../controllers/UsersController");

import express from "express";
import UsersController from "../controllers/UsersController.js";
import AuthentificationController from "../controllers/AuthentificationController.js";
import AuthentificationMiddleware from "../middlewares/AuthentificationMiddleware.js";

const router = express.Router();

router.get("/users", UsersController.index); // LISTE DES UTILISATEURS
router.post("/users", UsersController.store); // AJOUTER UN UTILISATEUR
router.get("/users/:id", UsersController.show); // AFFICHER UN UTILISATEUR
router.put("/users/:id", UsersController.update); // MODIFIER UN UTILISATEUR
router.delete("/users/:id", UsersController.destroy); // SUPPRIMER UN UTILISATEUR
router.get(
  "/getMyProfile",
  AuthentificationMiddleware.authentification,
  UsersController.getMyProfile
);

router.post("/login", AuthentificationController.login);

//* /users en GET = liste d'utilisateurS
//* /users en POST = ajouter un utilisateur
//* /users/:id en GET = afficher un utilisateur
//* /users/:id en PUT = modifier un utilisateur
//* /users/:id en DELETE = supprimer un utilisateur

// module.exports = router;
export default router;
