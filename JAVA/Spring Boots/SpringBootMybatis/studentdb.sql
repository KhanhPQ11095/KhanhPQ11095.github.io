-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 22, 2018 lúc 10:12 AM
-- Phiên bản máy phục vụ: 10.1.35-MariaDB
-- Phiên bản PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `studentdb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `student_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `student`
--

INSERT INTO `student` (`student_id`, `student_name`, `student_code`) VALUES
(1, 'Pham Quoc Khanh', 'PS0001'),
(2, 'Pham Quoc Khai', 'PS0002'),
(3, 'Pham Ngoc Thuy Tram', 'PS0003'),
(4, 'phuongpnt', 'PS0004'),
(24, 'khoidq', 'PS0005'),
(25, 'duynta', 'PS0006'),
(42, 'phuonghm', 'PS0007'),
(43, 'kienphv', 'PS0008'),
(44, 'hoanv', 'PS0009'),
(46, 'anhlhm', 'PS0010'),
(47, 'chienhq', 'PS0011'),
(48, 'datnt', 'PS0012'),
(53, 'hiepth', 'PS0013'),
(54, 'hiepth', 'PS0014'),
(57, 'tiendtm', 'PS0015'),
(58, 'binhtt', 'PS0016'),
(60, 'khanhpq', 'PS0017'),
(61, 'khanhpq', 'PS0018'),
(65, 'Le Hong Minh Anh', 'PS0020'),
(67, 'Nguyen Trong Tin', 'PS0021'),
(68, 'Do Quang Khoi', 'PS0022');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `student_info`
--

CREATE TABLE `student_info` (
  `info_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `address` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `average_score` double NOT NULL,
  `date_of_birth` varchar(11) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `student_info`
--

INSERT INTO `student_info` (`info_id`, `student_id`, `address`, `average_score`, `date_of_birth`) VALUES
(1, 1, 'GMO-Z.com RUNSYSTEM', 8, '1995-10-01'),
(2, 2, 'Au Co', 8, '2002-02-22'),
(3, 3, 'Tran Tan', 7, '1994-03-30'),
(4, 4, 'TanPhu', 8, '1995-12-31'),
(14, 24, 'TanPhu', 8, '1995-12-31'),
(15, 25, 'Q12', 7, '1995-12-31'),
(16, 42, 'BinhTan', 7, '1995-12-31'),
(17, 43, 'GoVap', 9, '1995-12-31'),
(18, 44, 'AuCo', 7, '1995-12-31'),
(20, 46, 'Chicago', 8, '1995-12-31'),
(21, 47, 'PhuNhuan', 6, '1995-12-31'),
(22, 48, 'PhuTho', 9, '1995-12-31'),
(23, 53, 'BaVan', 8, '1995-12-31'),
(24, 54, 'LacLongQuan', 8, '1995-12-31'),
(25, 57, 'LongAn', 8, '1995-12-31'),
(26, 58, 'Q11', 8, '1995-12-31'),
(29, 60, 'TranTan', 9, '1995-12-31'),
(30, 61, 'TanKyTanQuy', 9, '1995-12-31'),
(35, 65, 'Quan 2', 10, '1996-09-08'),
(37, 67, 'Go Vap', 7, '1995-12-31'),
(39, 68, 'ASD', 9, '1999-10-10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `password`) VALUES
(1, 'admin', 'admin'),
(2, 'khanhpq', '123'),
(3, 'khaipq', '123'),
(4, 'khoidq', '123');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Chỉ mục cho bảng `student_info`
--
ALTER TABLE `student_info`
  ADD PRIMARY KEY (`info_id`),
  ADD KEY `FOREIGN KEY` (`student_id`) USING BTREE;

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT cho bảng `student_info`
--
ALTER TABLE `student_info`
  MODIFY `info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `student_info`
--
ALTER TABLE `student_info`
  ADD CONSTRAINT `student_info_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
