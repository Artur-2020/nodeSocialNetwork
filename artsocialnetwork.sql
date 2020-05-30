/*
 Navicat Premium Data Transfer

 Source Server         : mySqlConnection
 Source Server Type    : MySQL
 Source Server Version : 100138
 Source Host           : localhost:3306
 Source Schema         : artsocialnetwork

 Target Server Type    : MySQL
 Target Server Version : 100138
 File Encoding         : 65001

 Date: 31/05/2020 03:45:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `post_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `post_id`(`post_id`) USING BTREE,
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES (1, 'aksjakjskja', 7, 84);
INSERT INTO `comments` VALUES (2, 'aea ba vonc ara', 7, 84);
INSERT INTO `comments` VALUES (3, 'lav el nman a valodin', 8, 84);
INSERT INTO `comments` VALUES (4, 'kopya valodikna', 8, 84);
INSERT INTO `comments` VALUES (5, 'asasa', 8, 84);
INSERT INTO `comments` VALUES (6, 'lav texa', 2, 84);
INSERT INTO `comments` VALUES (7, 'lavel nkar a', 4, 84);
INSERT INTO `comments` VALUES (8, 'maladec', 3, 84);
INSERT INTO `comments` VALUES (9, 'asasa', 3, 84);
INSERT INTO `comments` VALUES (10, 'gazaan', 8, 84);
INSERT INTO `comments` VALUES (11, 'auffff', 7, 84);
INSERT INTO `comments` VALUES (12, 'ayo', 2, 84);
INSERT INTO `comments` VALUES (13, 'hooopar', 4, 84);
INSERT INTO `comments` VALUES (14, 'asasa', 8, 84);
INSERT INTO `comments` VALUES (15, 'eeee', 3, 84);
INSERT INTO `comments` VALUES (16, 'asa', 8, 84);
INSERT INTO `comments` VALUES (17, 'aaa', 8, 84);
INSERT INTO `comments` VALUES (18, 'ba yngers', 3, 78);
INSERT INTO `comments` VALUES (19, 'ara lav e kyanq', 8, 84);
INSERT INTO `comments` VALUES (20, 'aaa', 8, 84);

-- ----------------------------
-- Table structure for friend
-- ----------------------------
DROP TABLE IF EXISTS `friend`;
CREATE TABLE `friend`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1_id` int(11) NULL DEFAULT NULL,
  `user2_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user1_id`(`user1_id`) USING BTREE,
  INDEX `user2_id`(`user2_id`) USING BTREE,
  CONSTRAINT `friend_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `friend_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for photos
-- ----------------------------
DROP TABLE IF EXISTS `photos`;
CREATE TABLE `photos`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of photos
-- ----------------------------
INSERT INTO `photos` VALUES (29, 'image/1590530109515Desert.jpg', 78);
INSERT INTO `photos` VALUES (33, 'image/1590789737282Tulips.jpg', 78);
INSERT INTO `photos` VALUES (35, 'image/1590840315983Penguins.jpg', 85);
INSERT INTO `photos` VALUES (36, 'image/159085036228039502856_2190388384509784_1523720775893254144_n.jpg', 84);

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (2, 'Es Sirum em Ays vayry', 'image/1590789754604Lighthouse.jpg', 84);
INSERT INTO `posts` VALUES (3, 'akslaklskalkslahskajksakkjkdjsjhdjakdsjaklasjdlkdsajkjdskaj', 'image/1590789765163Koala.jpg', 78);
INSERT INTO `posts` VALUES (4, 'asals;laslljl;ll;l;l;lhaartyrbajshjahsjayh', 'image/1590789777351Chrysanthemum.jpg', 78);
INSERT INTO `posts` VALUES (6, 'sedullllllllllll', 'image/1590789924503Desert.jpg', 81);
INSERT INTO `posts` VALUES (7, 'Aramayis', 'image/1590841299732Penguins.jpg', 84);
INSERT INTO `posts` VALUES (8, 'Mer Ynger Valodna', 'image/1590852018387Koala.jpg', 84);

-- ----------------------------
-- Table structure for request
-- ----------------------------
DROP TABLE IF EXISTS `request`;
CREATE TABLE `request`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1_id` int(11) NULL DEFAULT NULL,
  `user2_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user1_id`(`user1_id`) USING BTREE,
  INDEX `user2_id`(`user2_id`) USING BTREE,
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `request_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of request
-- ----------------------------
INSERT INTO `request` VALUES (2, 78, 79);
INSERT INTO `request` VALUES (4, 78, 82);
INSERT INTO `request` VALUES (5, 79, 78);
INSERT INTO `request` VALUES (6, 82, 80);
INSERT INTO `request` VALUES (8, 80, 81);
INSERT INTO `request` VALUES (9, 80, 79);
INSERT INTO `request` VALUES (26, 81, 79);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `surname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'image/avatar.png',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 86 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (78, 'Aram', 'Hovhannisyan', 40, 'aram@gmail.com', '$2b$10$.Sz59ffLlJWiwNqxMqgBwenu70Vpscr40EkisBlDDzPFYg05JJb0K', 'image/1590789737282Tulips.jpg');
INSERT INTO `user` VALUES (79, 'Nare', 'Vardanyan', 25, 'nare@gmail.com', '$2b$10$U44gAr2/DNimUDZe22x88OMd4OQ6e71zFfsq6/b6aW3bDEbavsmfO', 'image/avatar.png');
INSERT INTO `user` VALUES (80, 'Armine', 'Ghazaryan', 78, 'armine@mail.ru', '$2b$10$bnWg80Kfpj.2.T1bnPXyAuEiucl9omUV57KHPvLNaGpDXUaebUIGe', 'image/avatar.png');
INSERT INTO `user` VALUES (81, 'Seda', 'Amirbekyan', 35, 'seda@gmail.com', '$2b$10$jD2cuPunbPNFT4.CctoicOIrI6TR0BX4E/fJdyO1sq5BqzNnJaM06', 'image/avatar.png');
INSERT INTO `user` VALUES (82, 'Valod', 'Varosyan', 15, 'valod@gmail.com', '$2b$10$5hfovgeAnvmW4uIOoIwfmOEEypeF.TjxT0iPo8ZasKM9b9wkNXIn6', 'image/avatar.png');
INSERT INTO `user` VALUES (83, 'Asatur', 'Vahanyam', 45, 'asatur@gmail.com', '$2b$10$tdeVlMXJhdbVZA4zrWkvvu9WyDzP/fhEXb7LZqxqHSSOUOgXWq8P.', 'image/avatar.png');
INSERT INTO `user` VALUES (84, 'Art', 'Sahakyan', 19, 'artursahakyan262@gmail.com', '$2b$10$myE1jVeLnEQ8jfVshXXxZet9FvQAn5VdRJnK3Z5umFM5bAY7bYxXm', 'image/159085036228039502856_2190388384509784_1523720775893254144_n.jpg');
INSERT INTO `user` VALUES (85, 'Artak', 'Davtyan', 22, 'artak@gmail.com', '$2b$10$qTg1G712zKMG.t6KV9Hjruq00Nts0YrBCag7ON4aTA.qNFGPYDlJu', 'image/1590840315983Penguins.jpg');

SET FOREIGN_KEY_CHECKS = 1;
