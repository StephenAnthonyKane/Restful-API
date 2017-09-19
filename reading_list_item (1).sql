-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2017 at 05:48 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment5`
--

-- --------------------------------------------------------

--
-- Table structure for table `reading_list_item`
--

CREATE TABLE `reading_list_item` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `theDate` date NOT NULL,
  `name` text NOT NULL,
  `URL` text NOT NULL,
  `theDesc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reading_list_item`
--

INSERT INTO `reading_list_item` (`ID`, `theDate`, `name`, `URL`, `theDesc`) VALUES
(14, '2017-04-24', 'stephen', 'www.gmail.com', 'email'),
(15, '2017-04-24', 'evan', 'www.work.com', 'working'),
(16, '2017-04-24', 'zoe', 'www.shoes.com', 'shoes'),
(17, '2017-04-24', 'test', 'test', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reading_list_item`
--
ALTER TABLE `reading_list_item`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reading_list_item`
--
ALTER TABLE `reading_list_item`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
