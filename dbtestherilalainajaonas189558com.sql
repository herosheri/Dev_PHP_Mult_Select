-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  Dim 09 mai 2021 à 13:17
-- Version du serveur :  10.1.36-MariaDB
-- Version de PHP :  7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dbtestherilalainajaonas189558com`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_cat` int(15) NOT NULL,
  `libele_cat` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_cat`, `libele_cat`, `type`, `url`, `comment`) VALUES
(1, 'DEVELOPPEUR ', 'Seniore', 'http://Recrutement/DEVELOPPEUR.html\r\n', 'Le dÃ©veloppeur est chargÃ© de : DÃ©finir ...'),
(2, 'INTEGRATEUR', 'Junior', 'http://Recrutement/INTEGRATEUR.html', 'Apporter son expertise sur les maquettes ...'),
(3, 'STAGIAIRE DEVELOPPEUR WEB', 'Fin d\'Ã©tude', 'http://Recrutement/STAGIAIRE.html', 'Ã‰tudiant Ã  la recherche dâ€™un stage de fin d\'Ã©tude ...'),
(4, 'DESIGNER ', 'Seniore', 'http://Recrutement/DESIGNER.html', 'RÃ©aliser des travaux d\'intÃ©gration et de webdesign ...'),
(5, 'PROGRAMMEUR', 'ExperimentÃ©', 'http://Recrutement/PROGRAMMEUR.html', 'Apporter son expertise sur les projet complexe ...');

-- --------------------------------------------------------

--
-- Structure de la table `fiches`
--

CREATE TABLE `fiches` (
  `id_fiche` int(15) NOT NULL,
  `ref_cat` varchar(255) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `fiches`
--

INSERT INTO `fiches` (`id_fiche`, `ref_cat`, `libelle`, `description`, `image`) VALUES
(1, '1', 'BLUELINE ENTREPRISE', 'EntitÃ© Å“uvrant dans le domaine de la tÃ©lÃ©communication.', '1911423171.PNG'),
(2, '2', 'HaiRun Technology', ' ESN (Entreprise de Services du NumÃ©rique) basÃ©e Ã  Madagascar, spÃ©cialisÃ©e dans la conception et dÃ©veloppement.', '1891232171.PNG'),
(3, '5', 'ARIANE ETUDES', 'TELECOMMUNICATION : Exploitation des donnÃ©es du client et des utilisateurs internes de l\'entreprise,', '219898432.PNG'),
(4, '3', 'EQIMA ', 'SociÃ©tÃ© recherche pour Ã©toffer son Ã©quipe : Un Stagiaire DÃ©veloppeur Web.', '1898413947.PNG'),
(5, '4', 'SETEX ', 'ActivitÃ© de l\'entreprise SETEX regroupe des sociÃ©tÃ©s des plus dynamiques de Madagascar et de Maurice.', '818023599.PNG');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_cat`);

--
-- Index pour la table `fiches`
--
ALTER TABLE `fiches`
  ADD PRIMARY KEY (`id_fiche`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_cat` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `fiches`
--
ALTER TABLE `fiches`
  MODIFY `id_fiche` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
