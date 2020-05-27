/*
Navicat MySQL Data Transfer

Source Server         : Artur
Source Server Version : 100406
Source Host           : localhost:3306
Source Database       : artsocialnetwork

Target Server Type    : MYSQL
Target Server Version : 100406
File Encoding         : 65001

Date: 2020-05-27 18:43:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for friend
-- ----------------------------
DROP TABLE IF EXISTS `friend`;
CREATE TABLE `friend` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1_id` int(11) DEFAULT NULL,
  `user2_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user1_id` (`user1_id`) USING BTREE,
  KEY `user2_id` (`user2_id`) USING BTREE,
  CONSTRAINT `friend_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `friend_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of friend
-- ----------------------------
INSERT INTO `friend` VALUES ('2', '78', '75');
INSERT INTO `friend` VALUES ('3', '75', '80');

-- ----------------------------
-- Table structure for photos
-- ----------------------------
DROP TABLE IF EXISTS `photos`;
CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of photos
-- ----------------------------
INSERT INTO `photos` VALUES ('29', 'image/1590530109515Desert.jpg', '78');

-- ----------------------------
-- Table structure for request
-- ----------------------------
DROP TABLE IF EXISTS `request`;
CREATE TABLE `request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1_id` int(11) DEFAULT NULL,
  `user2_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user1_id` (`user1_id`) USING BTREE,
  KEY `user2_id` (`user2_id`) USING BTREE,
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `request_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of request
-- ----------------------------
INSERT INTO `request` VALUES ('2', '78', '79');
INSERT INTO `request` VALUES ('3', '79', '75');
INSERT INTO `request` VALUES ('4', '78', '82');
INSERT INTO `request` VALUES ('5', '79', '78');
INSERT INTO `request` VALUES ('6', '82', '80');
INSERT INTO `request` VALUES ('8', '80', '81');
INSERT INTO `request` VALUES ('9', '80', '79');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT 'image/avatar.png',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('75', 'Artur', 'Sahakyan', '19', 'artursahakyan262@gmail.com', '$2b$10$z7zL/fbl7mouEc4vIE/7E.TA7UrVITK3Hc0gulTATc8z82p8LR7Oi', 'image/1590543663244Chrysanthemum.jpg');
INSERT INTO `user` VALUES ('78', 'Aram', 'Hovhannisyan', '40', 'aram@gmail.com', '$2b$10$.Sz59ffLlJWiwNqxMqgBwenu70Vpscr40EkisBlDDzPFYg05JJb0K', 'image/1590530109515Desert.jpg');
INSERT INTO `user` VALUES ('79', 'Nare', 'Vardanyan', '25', 'nare@gmail.com', '$2b$10$U44gAr2/DNimUDZe22x88OMd4OQ6e71zFfsq6/b6aW3bDEbavsmfO', 'image/avatar.png');
INSERT INTO `user` VALUES ('80', 'Armine', 'Ghazaryan', '78', 'armine@mail.ru', '$2b$10$bnWg80Kfpj.2.T1bnPXyAuEiucl9omUV57KHPvLNaGpDXUaebUIGe', 'image/avatar.png');
INSERT INTO `user` VALUES ('81', 'Seda', 'Amirbekyan', '35', 'seda@gmail.com', '$2b$10$oRwPwSWj8F/f/0OEPJxX9etGz/E6bmGRPX2JXrKXqt0G9URcE/aqa', 'image/avatar.png');
INSERT INTO `user` VALUES ('82', 'Valod', 'Varosyan', '15', 'valod@gmail.com', '$2b$10$5hfovgeAnvmW4uIOoIwfmOEEypeF.TjxT0iPo8ZasKM9b9wkNXIn6', 'image/avatar.png');
INSERT INTO `user` VALUES ('83', 'Asatur', 'Vahanyam', '45', 'asatur@gmail.com', '$2b$10$tdeVlMXJhdbVZA4zrWkvvu9WyDzP/fhEXb7LZqxqHSSOUOgXWq8P.', 'image/avatar.png');
SET FOREIGN_KEY_CHECKS=1;
