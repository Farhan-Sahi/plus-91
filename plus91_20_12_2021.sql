-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.23 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for plus91
CREATE DATABASE IF NOT EXISTS `plus91` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `plus91`;

-- Dumping structure for table plus91.patients
CREATE TABLE IF NOT EXISTS `patients` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `age` int DEFAULT NULL,
  `blood_group` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `state` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `country` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table plus91.patients: ~5 rows (approximately)
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` (`patient_id`, `name`, `age`, `blood_group`, `dob`, `city`, `state`, `country`, `created_at`, `modified_at`) VALUES
	(8, 'Farhan Sahibole', 31, 'A+', '1993-01-06', 'AMRUTNAGAR', 'Kerala', 'India', '2021-12-19 08:23:25', '2021-12-20 07:52:44'),
	(13, 'Farhan Sahibole 2', 21, 'O+', '2021-12-16', 'AMRUTNAGAR', 'Maharashtra', 'India', '2021-12-20 07:51:52', '2021-12-20 07:52:22'),
	(14, 'Farhan Sahibole 3', 30, 'B+', '2021-12-01', 'AMRUTNAGAR', 'Maharashtra', 'India', '2021-12-20 07:52:05', '2021-12-20 07:57:41'),
	(16, 'Farhan Sahibole 5', 34, 'O+', '2021-12-10', 'Pune', 'Maharashtra', 'India', '2021-12-20 07:57:26', '2021-12-20 07:57:26'),
	(17, 'Farhan Sahibole 10', 2, 'O+', '2021-12-03', 'AMRUTNAGAR', 'Maharashtra', 'India', '2021-12-20 08:44:54', '2021-12-20 08:44:54');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
