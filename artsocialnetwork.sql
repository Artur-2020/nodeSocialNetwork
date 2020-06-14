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

 Date: 14/06/2020 19:42:05
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
) ENGINE = InnoDB AUTO_INCREMENT = 83 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

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
INSERT INTO `comments` VALUES (21, 'kajksajk', 3, 84);
INSERT INTO `comments` VALUES (22, 'askl', 3, 84);
INSERT INTO `comments` VALUES (23, 'Beautifull', 9, 84);
INSERT INTO `comments` VALUES (24, 'asa', 9, 84);
INSERT INTO `comments` VALUES (25, 'asa', 9, 84);
INSERT INTO `comments` VALUES (26, 'aaa', 7, 84);
INSERT INTO `comments` VALUES (27, 'wwklklwkelkwe', 7, 84);
INSERT INTO `comments` VALUES (28, 'asas', 2, 84);
INSERT INTO `comments` VALUES (29, 'hello', 9, 84);
INSERT INTO `comments` VALUES (32, 'asasas', 9, 84);
INSERT INTO `comments` VALUES (33, 'aaaaa', 9, 84);
INSERT INTO `comments` VALUES (34, 'aa', 9, 84);
INSERT INTO `comments` VALUES (35, 's', 9, 84);
INSERT INTO `comments` VALUES (36, 'Art', 9, 84);
INSERT INTO `comments` VALUES (37, 'Sahak', 9, 84);
INSERT INTO `comments` VALUES (38, 'Sahakyan', 9, 84);
INSERT INTO `comments` VALUES (39, 'Sahakyan', 9, 84);
INSERT INTO `comments` VALUES (40, 'Margaryan', 9, 84);
INSERT INTO `comments` VALUES (41, 'ss', 9, 84);
INSERT INTO `comments` VALUES (42, 'Sahakyan Art', 9, 84);
INSERT INTO `comments` VALUES (43, 'aaa', 9, 84);
INSERT INTO `comments` VALUES (44, 'aaa', 2, 84);
INSERT INTO `comments` VALUES (45, 'Art Sahak', 2, 84);
INSERT INTO `comments` VALUES (46, 'a', 11, 84);
INSERT INTO `comments` VALUES (47, 'akjs', 8, 85);
INSERT INTO `comments` VALUES (48, 'aa', 4, 84);
INSERT INTO `comments` VALUES (49, 'aa', 3, 84);
INSERT INTO `comments` VALUES (50, 'aaa', 3, 84);
INSERT INTO `comments` VALUES (51, 'aaa', 3, 84);
INSERT INTO `comments` VALUES (52, 'a', 9, 84);
INSERT INTO `comments` VALUES (53, 'sirun a', 4, 84);
INSERT INTO `comments` VALUES (54, 'aa', 6, 84);
INSERT INTO `comments` VALUES (55, 'wewe', 11, 84);
INSERT INTO `comments` VALUES (56, 'aaa', 13, 87);
INSERT INTO `comments` VALUES (57, 'asa', 12, 87);
INSERT INTO `comments` VALUES (58, 'aaa', 14, 84);
INSERT INTO `comments` VALUES (59, 'asaskkaslkl', 15, 95);
INSERT INTO `comments` VALUES (60, 'Axpeeeeeeeers', 15, 84);
INSERT INTO `comments` VALUES (61, 'Sahak', 2, 95);
INSERT INTO `comments` VALUES (62, 'asasa', 16, 84);
INSERT INTO `comments` VALUES (63, 'asa', 15, 84);
INSERT INTO `comments` VALUES (65, 'asa', 11, 96);
INSERT INTO `comments` VALUES (66, 'asa', 16, 84);
INSERT INTO `comments` VALUES (67, 'asa', 4, 84);
INSERT INTO `comments` VALUES (68, 'asa', 16, 84);
INSERT INTO `comments` VALUES (69, 'asa', 14, 84);
INSERT INTO `comments` VALUES (70, 'a', 14, 84);
INSERT INTO `comments` VALUES (71, 'a', 19, 84);
INSERT INTO `comments` VALUES (72, 'a', 19, 84);
INSERT INTO `comments` VALUES (73, 'a', 9, 84);
INSERT INTO `comments` VALUES (74, 'a', 9, 84);
INSERT INTO `comments` VALUES (75, 'as', 19, 84);
INSERT INTO `comments` VALUES (76, 'a', 2, 84);
INSERT INTO `comments` VALUES (81, 'a', 20, 84);
INSERT INTO `comments` VALUES (82, 'hjhjh', 20, 98);

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
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of friend
-- ----------------------------
INSERT INTO `friend` VALUES (2, 79, 84);
INSERT INTO `friend` VALUES (3, 78, 84);
INSERT INTO `friend` VALUES (4, 84, 81);
INSERT INTO `friend` VALUES (5, 79, 78);

-- ----------------------------
-- Table structure for likes
-- ----------------------------
DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `post_id`(`post_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 196 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of likes
-- ----------------------------
INSERT INTO `likes` VALUES (63, 4, 78);
INSERT INTO `likes` VALUES (64, 3, 78);
INSERT INTO `likes` VALUES (133, 8, 84);
INSERT INTO `likes` VALUES (135, 3, 84);
INSERT INTO `likes` VALUES (138, 7, 85);
INSERT INTO `likes` VALUES (139, 9, 85);
INSERT INTO `likes` VALUES (142, 8, 85);
INSERT INTO `likes` VALUES (149, 6, 81);
INSERT INTO `likes` VALUES (154, 2, 84);
INSERT INTO `likes` VALUES (161, 13, 87);
INSERT INTO `likes` VALUES (164, 11, 84);
INSERT INTO `likes` VALUES (165, 15, 95);
INSERT INTO `likes` VALUES (167, 9, 95);
INSERT INTO `likes` VALUES (168, 8, 95);
INSERT INTO `likes` VALUES (173, 4, 95);
INSERT INTO `likes` VALUES (174, 3, 95);
INSERT INTO `likes` VALUES (175, 14, 95);
INSERT INTO `likes` VALUES (177, 15, 84);
INSERT INTO `likes` VALUES (179, 4, 84);
INSERT INTO `likes` VALUES (181, 9, 84);
INSERT INTO `likes` VALUES (182, 16, 84);
INSERT INTO `likes` VALUES (184, 14, 84);
INSERT INTO `likes` VALUES (186, 19, 84);
INSERT INTO `likes` VALUES (191, 20, 84);
INSERT INTO `likes` VALUES (192, 24, 98);
INSERT INTO `likes` VALUES (193, 20, 98);
INSERT INTO `likes` VALUES (194, 19, 98);
INSERT INTO `likes` VALUES (195, 14, 98);

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1_id` int(11) NULL DEFAULT NULL,
  `user2_id` int(11) NULL DEFAULT NULL,
  `message` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `read` int(11) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user1_id`(`user1_id`) USING BTREE,
  INDEX `user2_id`(`user2_id`) USING BTREE,
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `message_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 188 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (69, 78, 84, 'barev', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (70, 78, 84, 'arararsahjhasjh', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (71, 78, 84, 'aa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (72, 78, 84, 'aaa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (73, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (74, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (75, 84, 78, 'aa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (76, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (77, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (78, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (79, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (80, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (81, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (82, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (83, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (84, 84, 78, 'aaa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (85, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (86, 78, 84, 'aa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (87, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (88, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (89, 78, 84, 'ss', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (90, 84, 78, 'aaa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (91, 84, 78, 'aaa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (92, 84, 78, 'aaaa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (93, 78, 84, 'arts', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (94, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (95, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (96, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (97, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (98, 84, 78, 'aa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (99, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (100, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (101, 84, 78, 'aa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (102, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (103, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (104, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (105, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (106, 78, 84, 'as', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (107, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (108, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (109, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (110, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (111, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (112, 78, 84, 'aa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (113, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (114, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (115, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (116, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (117, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (118, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (119, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (120, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (121, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (122, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (123, 78, 84, 'Tsovak', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (124, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (125, 78, 84, 'aa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (126, 84, 78, 'asa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (127, 78, 84, 'Art', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (128, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (129, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (130, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (131, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (132, 84, 78, 'as', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (133, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (134, 84, 78, 'art', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (135, 84, 78, 'asas', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (136, 84, 78, 'asa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (137, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (138, 84, 78, 'asa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (139, 78, 84, 'aa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (140, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (141, 78, 84, 'arts', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (142, 78, 84, 'as', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (143, 84, 78, 'asasasasas', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (144, 78, 84, 'sakjk', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (145, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (146, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (147, 78, 84, 'asasasasa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (148, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (149, 78, 84, 'a', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (150, 84, 78, 'asa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (151, 84, 78, 'art', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (152, 84, 78, 'asas', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (153, 78, 84, 'aa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (154, 78, 84, 'askjaskjkasjkjakjsjhadjksjkdjksjdkj', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (155, 84, 78, 'asalkslaklskl', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (156, 84, 78, 'asa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (157, 78, 84, 'asas', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (158, 78, 84, 'asasa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (159, 84, 78, 'asa', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (160, 78, 84, 'asa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (161, 78, 84, 's', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (162, 78, 84, 'sasa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (163, 78, 84, 'askslkl', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (164, 78, 84, 'as', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (165, 78, 84, 'asakl', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (166, 84, 78, 'Ara jaan exav', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (167, 78, 84, 'jan', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (168, 84, 78, 'dzec im arev', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (169, 78, 84, 'ara ba vonc axpers', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (170, 84, 78, 'Mama', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (171, 78, 84, 'aaa', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (172, 78, 84, 'Art', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (173, 84, 78, 'a', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (174, 95, 84, 'Art', '2020-06-14 19:22:52', 1);
INSERT INTO `message` VALUES (175, 84, 95, 'Jan\n', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (176, 95, 84, 'inch ka axpers\n', '2020-06-14 19:22:52', 1);
INSERT INTO `message` VALUES (177, 95, 84, 'Gorts qef hal vonc a', '2020-06-14 19:22:52', 1);
INSERT INTO `message` VALUES (178, 79, 84, 'a', '2020-06-14 19:22:51', 1);
INSERT INTO `message` VALUES (179, 78, 84, 'Axper', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (180, 84, 78, 'ha jan', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (181, 78, 84, 'inch ka axper jan', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (182, 84, 78, 'du asa axpers', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (183, 78, 84, 'ara axpers', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (184, 84, 78, 'Aram', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (185, 78, 84, 'Ha Jan', '2020-06-14 18:52:56', 1);
INSERT INTO `message` VALUES (186, 84, 78, 'inch ka chka', '2020-06-14 18:54:29', 1);
INSERT INTO `message` VALUES (187, 84, 78, '123', '2020-06-14 18:55:50', 1);

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
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of photos
-- ----------------------------
INSERT INTO `photos` VALUES (33, 'image/1590789737282Tulips.jpg', 78);
INSERT INTO `photos` VALUES (35, 'image/1590840315983Penguins.jpg', 85);
INSERT INTO `photos` VALUES (40, 'image/1591135718625Tulips.jpg', 81);
INSERT INTO `photos` VALUES (42, 'image/1591191408247151021643.jpg', 87);
INSERT INTO `photos` VALUES (44, 'image/1591191638464Без названия (1).jpg', 87);
INSERT INTO `photos` VALUES (46, 'image/1591461449488Lighthouse.jpg', 95);
INSERT INTO `photos` VALUES (47, 'image/1591475736840U5o5rxGXWIo.jpg', 84);

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
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (2, 'Es Sirum em Ays vayry', 'image/1590789754604Lighthouse.jpg', 84);
INSERT INTO `posts` VALUES (3, 'akslaklskalkslahskajksakkjkdjsjhdjakdsjaklasjdlkdsajkjdskaj', 'image/1590789765163Koala.jpg', 78);
INSERT INTO `posts` VALUES (4, 'asals;laslljl;ll;l;l;lhaartyrbajshjahsjayh', 'image/1590789777351Chrysanthemum.jpg', 78);
INSERT INTO `posts` VALUES (6, 'sedullllllllllll', 'image/1590789924503Desert.jpg', 81);
INSERT INTO `posts` VALUES (7, 'Aramayis', 'image/1590841299732Penguins.jpg', 84);
INSERT INTO `posts` VALUES (8, 'Mer Ynger Valodna', 'image/1590852018387Koala.jpg', 84);
INSERT INTO `posts` VALUES (9, 'Girl', 'image/15909572456406Xf1DuBfX5g.jpg', 84);
INSERT INTO `posts` VALUES (11, 'aaaa', NULL, 84);
INSERT INTO `posts` VALUES (12, 'asaslklkal', 'image/1591191527816Без названия.jpg', 87);
INSERT INTO `posts` VALUES (13, 'aaa', NULL, 87);
INSERT INTO `posts` VALUES (14, NULL, 'image/1591194006677Без названия (1).jpg', 84);
INSERT INTO `posts` VALUES (15, 'secaj', NULL, 95);
INSERT INTO `posts` VALUES (16, 'asa', NULL, 84);
INSERT INTO `posts` VALUES (19, NULL, 'image/159204734040045.PNG', 84);
INSERT INTO `posts` VALUES (20, 'a', NULL, 84);
INSERT INTO `posts` VALUES (24, 'a', NULL, 98);

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
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of request
-- ----------------------------
INSERT INTO `request` VALUES (4, 78, 82);
INSERT INTO `request` VALUES (6, 82, 80);
INSERT INTO `request` VALUES (10, 81, 84);

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
  `active` int(11) NULL DEFAULT 0,
  `online` int(11) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 99 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (78, 'Aram', 'Hovhannisyan', 40, 'aram@gmail.com', '$2b$10$2gDGA3E0d2NK8QzxclxqY.rUXdeNP/9oW9/Okh371MOGbo8dsQc.K', 'image/1590789737282Tulips.jpg', 1, 1);
INSERT INTO `user` VALUES (79, 'Nare', 'Vardanyan', 25, 'nare@gmail.com', '$2b$10$U44gAr2/DNimUDZe22x88OMd4OQ6e71zFfsq6/b6aW3bDEbavsmfO', 'image/avatar.png', 1, 0);
INSERT INTO `user` VALUES (80, 'Armine', 'Ghazaryan', 78, 'armine@mail.ru', '$2b$10$bnWg80Kfpj.2.T1bnPXyAuEiucl9omUV57KHPvLNaGpDXUaebUIGe', 'image/avatar.png', 0, 0);
INSERT INTO `user` VALUES (81, 'Seda', 'Amirbekyan', 35, 'seda@gmail.com', '$2b$10$jD2cuPunbPNFT4.CctoicOIrI6TR0BX4E/fJdyO1sq5BqzNnJaM06', 'image/avatar.png', 1, 0);
INSERT INTO `user` VALUES (82, 'Valod', 'Varosyan', 15, 'valod@gmail.com', '$2b$10$5hfovgeAnvmW4uIOoIwfmOEEypeF.TjxT0iPo8ZasKM9b9wkNXIn6', 'image/avatar.png', 0, 0);
INSERT INTO `user` VALUES (83, 'Asatur', 'Vahanyam', 45, 'asatur@gmail.com', '$2b$10$tdeVlMXJhdbVZA4zrWkvvu9WyDzP/fhEXb7LZqxqHSSOUOgXWq8P.', 'image/avatar.png', 0, 0);
INSERT INTO `user` VALUES (84, 'Art', 'Sahakyan', 19, 'artursahakyan262@gmail.com', '$2b$10$myE1jVeLnEQ8jfVshXXxZet9FvQAn5VdRJnK3Z5umFM5bAY7bYxXm', 'image/avatar.png', 1, 1);
INSERT INTO `user` VALUES (85, 'Artak', 'Davtyan', 22, 'artak@gmail.com', '$2b$10$qTg1G712zKMG.t6KV9Hjruq00Nts0YrBCag7ON4aTA.qNFGPYDlJu', 'image/1590840315983Penguins.jpg', 0, 0);
INSERT INTO `user` VALUES (86, 'Vazgen', 'Hakobyan', 30, 'vazgen@gmail.com', '$2b$10$FBLMeFOjGAL51MODBNVtFu06PI5McGNTL9nD7.GkK1Xsd4jAfdJp.', 'image/avatar.png', 0, 0);
INSERT INTO `user` VALUES (87, 'Aram', 'Sargsyan', 15, 'aramm@gmail.com', '$2b$10$mFvC/mi.FTMbczS.H5pFD./rc32AWrDyp0q2eg2qA2/NEEFIKoBKi', 'image/1591191638464Без названия (1).jpg', 1, 0);
INSERT INTO `user` VALUES (94, 'aaa', 'aaa', 15, 'artsahakyan44@gmail.com', '$2b$10$0AAuJbgBVKGw2fsc1YJbx.LoCnN9x1BqoY9KuXxeral7tYSB2Hfa6', 'image/avatar.png', 0, 0);
INSERT INTO `user` VALUES (95, 'Sevak', 'Nazaretyan', 17, 'sevak@gmail.com', '$2b$10$Y.YPugjqdxN7qI5i7/REyeCD8M.wvd/mZe7WstUohJ2zsdy54R6HW', 'image/1591461449488Lighthouse.jpg', 1, 0);
INSERT INTO `user` VALUES (96, 'asa', 'asa', 19, 'asa@gmail.com', '$2b$10$I4kHZBfdJSw9UpCz0tvW.O.Aq3ZfIZooFHeT9XGIpa.y81uXLhrku', 'image/avatar.png', 1, 0);
INSERT INTO `user` VALUES (98, 'Artur', 'Sahakyan', 19, 'art@gmail.com', '$2b$10$vtPuXWYl3w0mS5SOVdk/TehgSht7F122e4k9JxaXUeI.Sa3MD7p7u', 'image/avatar.png', 1, 0);

SET FOREIGN_KEY_CHECKS = 1;
