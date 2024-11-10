-- DROP TABLE
DROP TABLE sale;
DROP TABLE history;
DROP TABLE menu;
DROP TABLE inventory;
DROP TABLE material;
DROP TABLE product;
DROP TABLE category;
DROP TABLE loginhistory;
DROP TABLE users;

-- CREATE TABLE

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(225) NOT NULL,
  `firstname` varchar(225) NOT NULL,
  `lastname` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `phone` varchar(225) NOT NULL,
  `address` varchar(225) NOT NULL,
  `age` varchar(225) NOT NULL,
  `birthday` date NOT NULL,
  `start_date` date NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` varchar(225) NOT NULL COMMENT 'Admin, Cashier, Employee, Supplier',
  `about` varchar(225) NOT NULL,
  `image` varchar(225) NOT NULL,
  `signature` varchar(225) NOT NULL,
  `session_attempt` int(11) NOT NULL,
  `code` varchar(225) NOT NULL,
  `time` varchar(225) NOT NULL,
  `status` varchar(225) NOT NULL,
  `date_created_at` datetime NOT NULL,
  `date_updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE `loginhistory` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `date_created_at` datetime NOT NULL,
  PRIMARY KEY (`log_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


-- CREATE TABLE `category` (
--   -- `ca_id` int(222) NOT NULL AUTO_INCREMENT,
--   `ca_id` CHAR(10) NOT NULL,
--   `category_name` varchar(222) NOT NULL,
--   `date_created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `date_updated_at` datetime NOT NULL,
--   PRIMARY KEY (`ca_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE `category` (
  `ca_id` CHAR(10) NOT NULL,
  `category_name` VARCHAR(222) NOT NULL,
  `date_created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ca_id`)
);



CREATE TABLE `product` (
  `pr_id` int(222) NOT NULL AUTO_INCREMENT,
  -- `ca_id` int(11) NOT NULL,
  `ca_id` CHAR(10) NOT NULL,
  `product_name` varchar(222) NOT NULL,
  `category` varchar(222) NOT NULL,
  `material_cost` decimal(10,2) DEFAULT NULL,
  `selling_price` decimal(10,2) DEFAULT NULL,
  `image` varchar(222) NOT NULL,
  `date_created_at` datetime NOT NULL,
  `date_updated_at` datetime NOT NULL,
  PRIMARY KEY (`pr_id`),
  FOREIGN KEY (`ca_id`) REFERENCES `category`(`ca_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


CREATE TABLE `material` (
  -- `ma_id` int(222) NOT NULL AUTO_INCREMENT,
  `ma_id` CHAR(10) NOT NULL,
  `material_name` varchar(222) NOT NULL,
  `type` varchar(222) NOT NULL,
  `stock` int(222) NOT NULL,
  `enter_stock` int(222) NOT NULL,
  `unit` varchar(222) NOT NULL,
  `remarks` varchar(222) NOT NULL,
  `comment` varchar(222) NOT NULL,
  `image` varchar(222) NOT NULL,
  `date_created_at` datetime NOT NULL,
  `date_updated_at` datetime NOT NULL,
  PRIMARY KEY (`ma_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE `inventory` (
  `in_id` int(222) NOT NULL AUTO_INCREMENT,
  `ma_id` int(11) NOT NULL,
  `date_created_at` datetime NOT NULL,
  `date_updated_at` datetime NOT NULL,
  PRIMARY KEY (`in_id`),
  FOREIGN KEY (`ma_id`) REFERENCES `material`(`ma_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


CREATE TABLE `menu` (
  `me_id` int(222) NOT NULL AUTO_INCREMENT,
  -- `ca_id` int(11) NOT NULL,
  `pr_id` int(11) NOT NULL,
  `ma_id` int(11) NOT NULL,
  `date_created_at` datetime NOT NULL,
  `date_updated_at` datetime NOT NULL,
  PRIMARY KEY (`me_id`),
  -- FOREIGN KEY (`ca_id`) REFERENCES `category`(`ca_id`),
  FOREIGN KEY (`pr_id`) REFERENCES `product`(`pr_id`),
  FOREIGN KEY (`ma_id`) REFERENCES `material`(`ma_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


CREATE TABLE `history` (
  `ar_id` int(222) NOT NULL AUTO_INCREMENT,
  `material_name` varchar(222) NOT NULL,
  `type` varchar(222) NOT NULL,
  `stock` int(222) NOT NULL,
  `enter_stock` int(222) NOT NULL,
  `unit` varchar(222) NOT NULL,
  `remarks` varchar(222) NOT NULL,
  `date_created_at` datetime NOT NULL,
  `date_updated_at` datetime NOT NULL,
  PRIMARY KEY (`ar_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;



CREATE TABLE `sale` (
  `sa_id` int(222) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `pr_id` int(222) NOT NULL,
  `sales_code` varchar(222) NOT NULL,
  `sell_price` decimal(10,2) DEFAULT NULL,
  `quantity` int(222) NOT NULL,
  `total` int(222) NOT NULL,
  `full_name` varchar(222) NOT NULL,
  `id_number` varchar(222) NOT NULL,
  `address` varchar(222) NOT NULL,
  `created_by` int(222) NOT NULL,
  `updated_by` int(222) NOT NULL,
  `date_created_at` datetime NOT NULL,
  `date_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;



CREATE TABLE `supplier` (
  `su_id` int(222) NOT NULL AUTO_INCREMENT,
  `ma_id` int(11) NOT NULL,
  `date_created_at` datetime NOT NULL,
  `date_updated_at` datetime NOT NULL,
  PRIMARY KEY (`su_id`),
  FOREIGN KEY (`ma_id`) REFERENCES `material`(`ma_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


-- INSERT INTO TABLE

INSERT INTO `users` (`user_id`, `username`, `firstname`, `lastname`, `email`, `phone`, `address`, `birthday`, `password`, `role`, `image`, `signature`, `session_attempt`, `code`, `time`, `status`,  `date_created_at`, `date_updated_at`) VALUES
(1, 'Admin', 'Admin', 'Admin', '@gmail.com', '+639123456789', '9581 Narra Street', '1995-12-23', 'e64b78fc3bc91bcbc7dc232ba8ec59e0', 'Admin', '', '', 1, '', '', 'ACTIVE', '2024-10-10 15:47:26', ''),
(2, 'Cashier', 'Cashier', 'Cashier', 'cashier@gmail.com', '+639876543210', '4212 Pulo Street', '1994-03-16', '5725dbcc7254ee8422d1cb60db29625c', 'Cashier', '', '', 1, '0', '', 'ACTIVE', '2024-10-10 15:47:26', ''),
(3, 'Employee', 'Employee', 'Employee', 'employee@gmail.com', '+63924681012', '5245 Narra Street', '2004-04-12', '5725dbcc7254ee8422d1cb60db29625c', 'Employee', '', '', 1, '0', '2024-10-10 15:47:26', 'ACTIVE', '2024-10-10 15:47:26', ''),
(4, 'Supplier', 'Supplier', 'Supplier', 'supplier@gmail.com', '+639123456789', 'Supplier', '2001-06-03', '5725dbcc7254ee8422d1cb60db29625c', 'Admin', '', '', 1, '', '', 'ACTIVE', '2024-10-10 15:47:26', '');
 
-- **2018-2024** -- 
INSERT INTO sale (sales_code, pr_id, sell_price, quantity, total,   date_created_at) 
 VALUES ('2024A700', '" . $product['pr_id'] . "', '$selling_price', '$stock', '$total_amount', '$date_created_at');




-- ** 14 CATEGORIES ** --
INSERT INTO `category` (`ca_id`,`category_name`, `date_created_at`, `date_updated_at`) 
VALUES
('C0001','MILKTEA (CLASSIC)', '2024-11-09 00:00:02', '2024-11-09 00:00:00'),
('C0002','MILKTEA (PREMIUM)', '2024-11-09 00:00:02', '2024-11-09 00:00:00'),
('C0003','MILKTEA (DELUXE)', '2024-11-09 00:00:02', '2024-11-09 00:00:00'),
('C0004','MILKTEA (CHEESECAKE)', '2024-11-09 00:00:02', '2024-11-09 00:00:00'),
('C0005','FRAPPE', '2024-11-09 00:00:10', '2024-11-09 00:00:00'),
('C0006','ICE CRAMBLE', '2024-11-09 00:00:12', '2024-11-09 00:00:00'),
('C0007','MILKSHAKE', '2024-11-09 00:00:14', '2024-11-09 00:00:00'),
('C0008','UNLIMITED CHICKEN WINGS', '2024-11-09 00:00:16', '2024-11-09 00:00:00'),
('C0009','ALA CARTE', '2024-11-09 00:00:18', '2024-11-09 00:00:00'),
('C0010','BILAO', '2024-11-09 00:00:20', '2024-11-09 00:00:00'),
('C0011','SNACKS', '2024-11-09 00:00:22', '2024-11-09 00:00:00'),
('C0012','RICE MEAL', '2024-11-09 00:00:24', '2024-11-09 00:00:00'),
('C0013','PIZZA', '2024-11-09 00:00:26', '2024-11-09 00:00:00'),
('C0014','SANDWICH', '2024-11-09 00:00:28', '2024-11-09 00:00:00');


-- ** ALL PRODUCTS
INSERT INTO `product` (`pr_id`,`ca_id`,`product_name`, `category`, `selling_price`, `image`, `date_created_at`, `date_updated_at`)
VALUES
-- MILKTEA MEDIUM
('PR001', 'C0001', 'BLACK PEARL M', 'MILKTEA (CLASSIC)', 39, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR002', 'C0001', 'YEOCHA BUBBLE TEA M', 'MILKTEA (CLASSIC)', 49, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR003', 'C0002', 'WINTERMELON M', 'MILKTEA (PREMIUM)', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR004', 'C0002', 'COOKIES & CREAM M', 'MILKTEA (PREMIUM)', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR005', 'C0002', 'SIGNATURE CHOCO M', 'MILKTEA (PREMIUM)', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR006', 'C0002', 'MATCHA M', 'MILKTEA (PREMIUM)', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR007', 'C0002', 'OKINAWA M', 'MILKTEA (PREMIUM)', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR008', 'C0002', 'BANANA MILK M', 'MILKTEA (PREMIUM)', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR009', 'C0003', 'CHOCO HAZELNUT M', 'MILKTEA (DELUXE)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR010', 'C0003', 'OREO MATCHA M', 'MILKTEA (DELUXE)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR011', 'C0003', 'OREO OKINAWA M', 'MILKTEA (DELUXE)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR012', 'C0003', 'OREO CHOCO M', 'MILKTEA (DELUXE)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR013', 'C0003', 'BANANA OREO M', 'MILKTEA (DELUXE)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR014', 'C0003', 'BANANA NUTELLA M', 'MILKTEA (DELUXE)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR015', 'C0003', 'STRAWBERRY NUTELLA M', 'MILKTEA (DELUXE)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR016', 'C0003', 'STRAWBERRY OREO M', 'MILKTEA (DELUXE)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR017', 'C0004', 'LAVAH CHEESECAKE M', 'MILKTEA (CHEESECAKE)', 99, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR018', 'C0004', 'DIRTY LAVAH CC M', 'MILKTEA (CHEESECAKE)', 119, '', '2024-11-09', '0000-00-00 00:00:00')
-- MILKTEA LARGE
('PR019', 'C0001', 'BLACK PEARL L', 'MILKTEA (CLASSIC)', 49, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR020', 'C0001', 'YEOCHA BUBBLE TEA L', 'MILKTEA (CLASSIC)', 59, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR021', 'C0002', 'WINTERMELON L', 'MILKTEA (PREMIUM)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR022', 'C0002', 'COOKIES & CREAM L', 'MILKTEA (PREMIUM)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR023', 'C0002', 'SIGNATURE CHOCO L', 'MILKTEA (PREMIUM)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR024', 'C0002', 'MATCHA L', 'MILKTEA (PREMIUM)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR025', 'C0002', 'OKINAWA L', 'MILKTEA (PREMIUM)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR026', 'C0002', 'BANANA MILK L', 'MILKTEA (PREMIUM)', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR027', 'C0003', 'CHOCO HAZELNUT L', 'MILKTEA (DELUXE)', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR028', 'C0003', 'OREO MATCHA L', 'MILKTEA (DELUXE)', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR029', 'C0003', 'OREO OKINAWA L', 'MILKTEA (DELUXE)', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR030', 'C0003', 'OREO CHOCO L', 'MILKTEA (DELUXE)', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR031', 'C0003', 'BANANA OREO L', 'MILKTEA (DELUXE)', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR032', 'C0003', 'BANANA NUTELLA L', 'MILKTEA (DELUXE)', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR033', 'C0003', 'STRAWBERRY NUTELLA L', 'MILKTEA (DELUXE)', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR034', 'C0003', 'STRAWBERRY OREO L', 'MILKTEA (DELUXE)', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR035', 'C0004', 'LAVAH CHEESECAKE L', 'MILKTEA (CHEESECAKE)', 119, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR036', 'C0004', 'DIRTY LAVAH CC L', 'MILKTEA (CHEESECAKE)', 129, '', '2024-11-09', '0000-00-00 00:00:00')
-- FRAPPE MEDIUM
('PR037', 'C0005', 'OREO COOKIES & CREAM M', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR038', 'C0005', 'STRAWBERRY CREAM M', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR039', 'C0005', 'BANANA CREAM M', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR040', 'C0005', 'MATCHA CREAM M', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR041', 'C0005', 'CHOCOLATE CHIPS M', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR042', 'C0005', 'DARK MOCHA CREAM M', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
-- FRAPPE LARGE
('PR043', 'C0005', 'OREO COOKIES & CREAM L', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR044', 'C0005', 'STRAWBERRY CREAM L', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR045', 'C0005', 'BANANA CREAM L', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR046', 'C0005', 'MATCHA CREAM L', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR047', 'C0005', 'CHOCOLATE CHIPS L', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR048', 'C0005', 'DARK MOCHA CREAM L', 'FRAPPE', 139, '', '2024-11-09', '0000-00-00 00:00:00')
-- MILKSHAKE MEDIUM
('PR049', 'C0006', 'MANGO PLAIN M', 'MILK SHAKE', 65, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR050', 'C0006', 'MANGO GRAHAM M', 'MILK SHAKE', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR051', 'C0006', 'MANGO OREO M', 'MILK SHAKE', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR052', 'C0006', 'MANGO SUPREME M', 'MILK SHAKE', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR053', 'C0006', 'AVOCADO PLAIN M', 'MILK SHAKE', 65, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR054', 'C0006', 'AVOCADO GRAHAM M', 'MILK SHAKE', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR055', 'C0006', 'AVOCADO OREO M', 'MILK SHAKE', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR056', 'C0006', 'AVOCADO SUPREME M', 'MILK SHAKE', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
-- MILKSHAKE LARGE
('PR057', 'C0006', 'MANGO PLAIN L', 'MILK SHAKE', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR058', 'C0006', 'MANGO GRAHAM L', 'MILK SHAKE', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR059', 'C0006', 'MANGO OREO L', 'MILK SHAKE', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR060', 'C0006', 'MANGO SUPREME L', 'MILK SHAKE', 105, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR061', 'C0006', 'AVOCADO PLAIN L', 'MILK SHAKE', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR062', 'C0006', 'AVOCADO GRAHAM L', 'MILK SHAKE', 85, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR063', 'C0006', 'AVOCADO OREO L', 'MILK SHAKE', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR064', 'C0006', 'AVOCADO SUPREME L', 'MILK SHAKE', 105, '', '2024-11-09', '0000-00-00 00:00:00')
-- UNLIMITED CHICKEN WINGS
('PR065', 'C0007', '6 PCS CHICKEN WINGS + UNLI RICE', 'UNLIMITED CHICKEN WINGS', 199, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR066', 'C0007', 'UNLI CHICKEN WINGS + UNLI RICE', 'UNLIMITED CHICKEN WINGS', 249, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR067', 'C0007', 'UNLI CHICKEN WINGS + UNLI RICE + UNLI DRINKS', 'UNLIMITED CHICKEN WINGS', 269, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR068', 'C0007', 'UNLI CHICKEN WINGS + UNLI RICE + UNLI DRINKS + UNLI FRIES', 'UNLIMITED CHICKEN WINGS', 299, '', '2024-11-09', '0000-00-00 00:00:00'),
-- ALA CARTE
('PR069', 'C0008', '6 PCS CHICKEN WINGS', 'ALA CARTE', 189, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR070', 'C0008', '12 PCS CHICKEN WINGS', 'ALA CARTE', 379, '', '2024-11-09', '0000-00-00 00:00:00'),
-- BILAO
('PR071', 'C0009', '20 PCS CHICKEN WINGS', 'BILAO', 599, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR072', 'C0009', '24 PCS CHICKEN WINGS', 'BILAO', 719, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR073', 'C0009', '40 PCS CHICKEN WINGS', 'BILAO', 1199, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR074', 'C0009', '50 PCS CHICKEN WINGS', 'BILAO', 1499, '', '2024-11-09', '0000-00-00 00:00:00'),
-- SNACKS
('PR075', 'C0010', 'S1 FRIES (125g)', 'SNACKS', 75, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR076', 'C0010', 'S2 BEEF NACHOS', 'SNACKS', 120, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR077', 'C0010', 'S3 BACON CHEESE FRIES', 'SNACKS', 130, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR078', 'C0010', 'S4 4PCS WINGS & FRIES', 'SNACKS', 179, '', '2024-11-09', '0000-00-00 00:00:00')
-- PIZZA
('PR079', 'C0011', 'P1 HAM & CHEESE', 'PIZZA', 250, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR080', 'C0011', 'P2 HAWAIIAN', 'PIZZA', 250, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR081', 'C0011', 'P3 HAM & BACON', 'PIZZA', 290, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR082', 'C0011', 'P4 CHEESE PIZZA', 'PIZZA', 290, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR083', 'C0011', 'P5 SHAWARMA PIZZA', 'PIZZA', 290, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR084', 'C0011', 'P6 OVERLOAD PIZZA', 'PIZZA', 320, '', '2024-11-09', '0000-00-00 00:00:00'),
-- RICE MEAL
('PR085', 'C0012', 'RM1 SHAWARMA RICE', 'RICE MEAL', 95, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR086', 'C0012', 'RM2 4PCS WINGS AND RICE', 'RICE MEAL', 159, '', '2024-11-09', '0000-00-00 00:00:00'),
-- SANDWICH
('PR087', 'C0013', 'B1 BUY 1 TAKE 1 BURGER', 'SANDWICH', 59, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR088', 'C0013', 'B2 DOUBLE PATTY BURGER', 'SANDWICH', 59, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR089', 'C0013', 'H1 BUY 1 TAKE 1 GIANT HOTDOG', 'SANDWICH', 69, '', '2024-11-09', '0000-00-00 00:00:00'),
('PR090', 'C0013', 'H2 CHEESY GIANT HOTDOG', 'SANDWICH', 69, '', '2024-11-09', '0000-00-00 00:00:00');

-- **MATERIALS: RAW AND DISPOSABLE**
INSERT INTO `material` (`ma_id`, `material_name`, `type`, `stock`, `enter_stock`, `unit`, `remarks`, `comment`, `image`, `date_created_at`, `date_updated_at`) 
VALUES 
    ('MA001', 'SUGAR SYRUP', 'RAW', 500, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA002', 'BROWN SUGAR', 'RAW', 300, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA003', 'OREO POWDER', 'RAW', 150, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA004', 'ICE SCRAMBLE POWDER', 'RAW', 120, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA005', 'ICE SCRAMBLE MILK', 'RAW', 800, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA006', 'CHOCO SAUCE', 'RAW', 250, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA007', 'MANGO POWDER', 'RAW', 100, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA008', 'AVOCADO POWDER', 'RAW', 75, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA009', 'CRUSHED GRAHAM', 'RAW', 200, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA010', 'WHIP CREAM', 'RAW', 300, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA011', 'HONEY SRIRACHA', 'RAW', 100, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA012', 'SWEET CHILI', 'RAW', 120, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA013', 'MANGO HABANERO', 'RAW', 50, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA014', 'TERIYAKI', 'RAW', 300, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA015', 'SOY GARLIC', 'RAW', 150, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA016', 'BBQ SAUCE', 'RAW', 250, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA017', 'SALTED EGG', 'RAW', 500, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA018', 'GARLIC PARMESAN', 'RAW', 400, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA019', 'BBQ POWDER', 'RAW', 100, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA020', 'CHEESE POWDER', 'RAW', 350, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA021', 'SOUR CREAM POWDER', 'RAW', 90, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA022', 'OKINAWA POWDER', 'RAW', 120, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA023', 'MATCHA POWDER', 'RAW', 200, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA024', 'BANANA POWDER', 'RAW', 150, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA025', 'STRAWBERRY POWDER', 'RAW', 180, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA026', 'SIGNATURE CHOCOLATE POWDER', 'RAW', 600, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA027', 'COOKIES & CREAM POWDER', 'RAW', 100, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA028', 'WINTERMELON POWDER', 'RAW', 300, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA029', 'VANILLA', 'RAW', 200, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA030', 'CARAMEL', 'RAW', 250, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA031', 'HAZELNUT', 'RAW', 400, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA032', 'CARAMEL SAUCE', 'RAW', 180, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA033', 'DARK CHOCOLATE SAUCE', 'RAW', 220, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA034', 'STRAWBERRY SAUCE', 'RAW', 200, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00')
    ('MA035', 'CHICKEN WINGS', 'RAW', 50, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA036', 'FRESH MILK', 'RAW', 2000, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA037', 'CONDENSED MILK', 'RAW', 800, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA038', 'COFFEE BEAN', 'RAW', 100, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA039', 'FRIES', 'RAW', 3000, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA040', 'HASH BROWN', 'RAW', 100, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA041', 'NACHOS', 'RAW', 500, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA042', 'BACON', 'RAW', 200, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA043', 'PIZZA DOUGH', 'RAW', 50, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA044', 'HAM', 'RAW', 150, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA045', 'PIZZA SAUCE', 'RAW', 500, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA046', 'CHIZ BOY/MOZZARELLA', 'RAW', 200, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA047', 'PINEAPPLE', 'RAW', 300, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA048', 'PEARL', 'RAW', 1000, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA049', 'PATTY', 'RAW', 50, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA050', 'BUNS', 'RAW', 50, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA051', 'SLICED CHEESE', 'RAW', 200, '', 'G', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA052', 'SPECIAL SAUCE', 'RAW', 300, '', 'ML', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00')
    ('MA053', 'FLAT LIDS', 'DISPOSABLE', 500, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA054', 'DOME LIDS', 'DISPOSABLE', 500, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA055', 'STRAW (MILKTEA)', 'DISPOSABLE', 1000, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA056', 'STRAW (COFFEE)', 'DISPOSABLE', 1000, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA057', 'TISSUE', 'DISPOSABLE', 200, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA058', 'GLOVES', 'DISPOSABLE', 200, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA059', 'CUPS', 'DISPOSABLE', 500, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA060', 'RICE MEAL BOX', 'DISPOSABLE', 100, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00'),
    ('MA061', 'BILAO', 'DISPOSABLE', 50, '', 'PCS', 'AVAILABLE', '', '', '2024-11-09', '0000-00-00 00:00:00');

-- **SALES**




