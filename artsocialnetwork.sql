/*
Navicat MySQL Data Transfer

Source Server         : Artur
Source Server Version : 100406
Source Host           : localhost:3306
Source Database       : artsocialnetwork

Target Server Type    : MYSQL
Target Server Version : 100406
File Encoding         : 65001

Date: 2020-06-12 12:30:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` longtext DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  KEY `post_id` (`post_id`) USING BTREE,
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES ('1', 'aksjakjskja', '7', '84');
INSERT INTO `comments` VALUES ('2', 'aea ba vonc ara', '7', '84');
INSERT INTO `comments` VALUES ('3', 'lav el nman a valodin', '8', '84');
INSERT INTO `comments` VALUES ('4', 'kopya valodikna', '8', '84');
INSERT INTO `comments` VALUES ('5', 'asasa', '8', '84');
INSERT INTO `comments` VALUES ('6', 'lav texa', '2', '84');
INSERT INTO `comments` VALUES ('7', 'lavel nkar a', '4', '84');
INSERT INTO `comments` VALUES ('8', 'maladec', '3', '84');
INSERT INTO `comments` VALUES ('9', 'asasa', '3', '84');
INSERT INTO `comments` VALUES ('10', 'gazaan', '8', '84');
INSERT INTO `comments` VALUES ('11', 'auffff', '7', '84');
INSERT INTO `comments` VALUES ('12', 'ayo', '2', '84');
INSERT INTO `comments` VALUES ('13', 'hooopar', '4', '84');
INSERT INTO `comments` VALUES ('14', 'asasa', '8', '84');
INSERT INTO `comments` VALUES ('15', 'eeee', '3', '84');
INSERT INTO `comments` VALUES ('16', 'asa', '8', '84');
INSERT INTO `comments` VALUES ('17', 'aaa', '8', '84');
INSERT INTO `comments` VALUES ('18', 'ba yngers', '3', '78');
INSERT INTO `comments` VALUES ('19', 'ara lav e kyanq', '8', '84');
INSERT INTO `comments` VALUES ('20', 'aaa', '8', '84');
INSERT INTO `comments` VALUES ('21', 'kajksajk', '3', '84');
INSERT INTO `comments` VALUES ('22', 'askl', '3', '84');
INSERT INTO `comments` VALUES ('23', 'Beautifull', '9', '84');
INSERT INTO `comments` VALUES ('24', 'asa', '9', '84');
INSERT INTO `comments` VALUES ('25', 'asa', '9', '84');
INSERT INTO `comments` VALUES ('26', 'aaa', '7', '84');
INSERT INTO `comments` VALUES ('27', 'wwklklwkelkwe', '7', '84');
INSERT INTO `comments` VALUES ('28', 'asas', '2', '84');
INSERT INTO `comments` VALUES ('29', 'hello', '9', '84');
INSERT INTO `comments` VALUES ('32', 'asasas', '9', '84');
INSERT INTO `comments` VALUES ('33', 'aaaaa', '9', '84');
INSERT INTO `comments` VALUES ('34', 'aa', '9', '84');
INSERT INTO `comments` VALUES ('35', 's', '9', '84');
INSERT INTO `comments` VALUES ('36', 'Art', '9', '84');
INSERT INTO `comments` VALUES ('37', 'Sahak', '9', '84');
INSERT INTO `comments` VALUES ('38', 'Sahakyan', '9', '84');
INSERT INTO `comments` VALUES ('39', 'Sahakyan', '9', '84');
INSERT INTO `comments` VALUES ('40', 'Margaryan', '9', '84');
INSERT INTO `comments` VALUES ('41', 'ss', '9', '84');
INSERT INTO `comments` VALUES ('42', 'Sahakyan Art', '9', '84');
INSERT INTO `comments` VALUES ('43', 'aaa', '9', '84');
INSERT INTO `comments` VALUES ('44', 'aaa', '2', '84');
INSERT INTO `comments` VALUES ('45', 'Art Sahak', '2', '84');
INSERT INTO `comments` VALUES ('46', 'a', '11', '84');
INSERT INTO `comments` VALUES ('47', 'akjs', '8', '85');
INSERT INTO `comments` VALUES ('48', 'aa', '4', '84');
INSERT INTO `comments` VALUES ('49', 'aa', '3', '84');
INSERT INTO `comments` VALUES ('50', 'aaa', '3', '84');
INSERT INTO `comments` VALUES ('51', 'aaa', '3', '84');
INSERT INTO `comments` VALUES ('52', 'a', '9', '84');
INSERT INTO `comments` VALUES ('53', 'sirun a', '4', '84');
INSERT INTO `comments` VALUES ('54', 'aa', '6', '84');
INSERT INTO `comments` VALUES ('55', 'wewe', '11', '84');
INSERT INTO `comments` VALUES ('56', 'aaa', '13', '87');
INSERT INTO `comments` VALUES ('57', 'asa', '12', '87');
INSERT INTO `comments` VALUES ('58', 'aaa', '14', '84');
INSERT INTO `comments` VALUES ('59', 'asaskkaslkl', '15', '95');
INSERT INTO `comments` VALUES ('60', 'Axpeeeeeeeers', '15', '84');
INSERT INTO `comments` VALUES ('61', 'Sahak', '2', '95');
INSERT INTO `comments` VALUES ('62', 'asasa', '16', '84');
INSERT INTO `comments` VALUES ('63', 'asa', '15', '84');
INSERT INTO `comments` VALUES ('65', 'asa', '11', '96');
INSERT INTO `comments` VALUES ('66', 'asa', '16', '84');
INSERT INTO `comments` VALUES ('67', 'asa', '4', '84');
INSERT INTO `comments` VALUES ('68', 'asa', '16', '84');
INSERT INTO `comments` VALUES ('69', 'asa', '14', '84');
INSERT INTO `comments` VALUES ('70', 'a', '14', '84');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of friend
-- ----------------------------
INSERT INTO `friend` VALUES ('1', '95', '84');
INSERT INTO `friend` VALUES ('2', '79', '84');
INSERT INTO `friend` VALUES ('3', '78', '84');
INSERT INTO `friend` VALUES ('4', '84', '81');

-- ----------------------------
-- Table structure for likes
-- ----------------------------
DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `post_id` (`post_id`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=184 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of likes
-- ----------------------------
INSERT INTO `likes` VALUES ('63', '4', '78');
INSERT INTO `likes` VALUES ('64', '3', '78');
INSERT INTO `likes` VALUES ('133', '8', '84');
INSERT INTO `likes` VALUES ('135', '3', '84');
INSERT INTO `likes` VALUES ('138', '7', '85');
INSERT INTO `likes` VALUES ('139', '9', '85');
INSERT INTO `likes` VALUES ('142', '8', '85');
INSERT INTO `likes` VALUES ('149', '6', '81');
INSERT INTO `likes` VALUES ('154', '2', '84');
INSERT INTO `likes` VALUES ('161', '13', '87');
INSERT INTO `likes` VALUES ('164', '11', '84');
INSERT INTO `likes` VALUES ('165', '15', '95');
INSERT INTO `likes` VALUES ('167', '9', '95');
INSERT INTO `likes` VALUES ('168', '8', '95');
INSERT INTO `likes` VALUES ('173', '4', '95');
INSERT INTO `likes` VALUES ('174', '3', '95');
INSERT INTO `likes` VALUES ('175', '14', '95');
INSERT INTO `likes` VALUES ('177', '15', '84');
INSERT INTO `likes` VALUES ('179', '4', '84');
INSERT INTO `likes` VALUES ('181', '9', '84');
INSERT INTO `likes` VALUES ('182', '16', '84');
INSERT INTO `likes` VALUES ('183', '14', '84');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1_id` int(11) DEFAULT NULL,
  `user2_id` int(11) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `time` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user1_id` (`user1_id`) USING BTREE,
  KEY `user2_id` (`user2_id`) USING BTREE,
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `message_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('1', '84', '78', 'Barev', '2020-06-10 11:28:33');
INSERT INTO `message` VALUES ('2', '78', '84', 'Barev))', '2020-06-10 11:28:42');
INSERT INTO `message` VALUES ('3', '79', '84', 'Barev Vonc es', '2020-06-10 11:28:54');
INSERT INTO `message` VALUES ('4', '79', '84', 'Qez het gorc unem', '2020-06-10 11:29:14');
INSERT INTO `message` VALUES ('5', '84', '79', 'Asa tesnem', '2020-06-10 11:29:42');
INSERT INTO `message` VALUES ('6', '95', '84', 'Barev', '2020-06-10 11:29:52');
INSERT INTO `message` VALUES ('7', '84', '95', 'Barev Vonc es?', '2020-06-10 11:30:05');
INSERT INTO `message` VALUES ('8', '84', '78', 'Gorcerd vonc en?', '2020-06-10 11:30:51');
INSERT INTO `message` VALUES ('9', '78', '84', 'Lav en mersi ashxatum em', '2020-06-10 11:31:03');
INSERT INTO `message` VALUES ('10', '84', '78', 'shat lav e gorcerid hajoxutyun', '2020-06-10 11:31:40');
INSERT INTO `message` VALUES ('11', '78', '84', 'shat mersi nmanapes', '2020-06-10 11:32:24');
INSERT INTO `message` VALUES ('12', '84', '78', 'Hajoxutyun de qez', '2020-06-10 11:32:45');
INSERT INTO `message` VALUES ('13', '78', '84', 'qez el', '2020-06-10 11:33:07');
INSERT INTO `message` VALUES ('14', '84', '78', 'Hajoxutyun', '2020-06-10 12:44:30');
INSERT INTO `message` VALUES ('15', '84', '78', 'a', '2020-06-11 18:53:41');
INSERT INTO `message` VALUES ('16', '84', '81', 'jjhh', '2020-06-11 19:40:56');
INSERT INTO `message` VALUES ('17', '84', '78', 'aaa', '2020-06-11 19:41:52');
INSERT INTO `message` VALUES ('18', '84', '78', 'a', '2020-06-11 19:56:09');
INSERT INTO `message` VALUES ('19', '84', '95', 'sddss', '2020-06-12 11:02:16');
INSERT INTO `message` VALUES ('20', '95', '84', 'jhjashjah', '2020-06-12 11:02:35');
INSERT INTO `message` VALUES ('21', '84', '78', 'asa', '2020-06-12 11:25:41');
INSERT INTO `message` VALUES ('22', '79', '84', 'asa', '2020-06-12 11:28:29');
INSERT INTO `message` VALUES ('23', '84', '78', 'asasa', '2020-06-12 11:32:44');
INSERT INTO `message` VALUES ('24', '79', '84', 'asa', '2020-06-12 11:33:06');
INSERT INTO `message` VALUES ('25', '84', '78', 'asas', '2020-06-12 11:34:30');
INSERT INTO `message` VALUES ('26', '78', '84', 'aqsas', '2020-06-12 11:34:45');
INSERT INTO `message` VALUES ('27', '79', '84', 'asa', '2020-06-12 11:40:14');
INSERT INTO `message` VALUES ('28', '79', '84', 'asa', '2020-06-12 11:40:15');
INSERT INTO `message` VALUES ('29', '84', '78', 'saas', '2020-06-12 11:46:25');
INSERT INTO `message` VALUES ('30', '78', '84', 'asa', '2020-06-12 11:46:43');
INSERT INTO `message` VALUES ('31', '78', '84', 'asasasasa', '2020-06-12 11:47:51');
INSERT INTO `message` VALUES ('32', '84', '78', 'alalallalall', '2020-06-12 11:48:42');
INSERT INTO `message` VALUES ('33', '78', '84', 'asasa', '2020-06-12 11:53:42');
INSERT INTO `message` VALUES ('34', '78', '84', 'SASA', '2020-06-12 11:55:49');
INSERT INTO `message` VALUES ('35', '78', '84', 'asaasasa', '2020-06-12 11:57:19');
INSERT INTO `message` VALUES ('36', '84', '78', 'aaa', '2020-06-12 11:58:16');
INSERT INTO `message` VALUES ('37', '78', '84', 'aaaaaa', '2020-06-12 12:00:36');
INSERT INTO `message` VALUES ('38', '84', '78', 'as', '2020-06-12 12:00:46');
INSERT INTO `message` VALUES ('39', '79', '84', 'a', '2020-06-12 12:01:32');
INSERT INTO `message` VALUES ('40', '84', '79', 'aa', '2020-06-12 12:01:49');
INSERT INTO `message` VALUES ('41', '79', '84', 'aaaa', '2020-06-12 12:02:04');
INSERT INTO `message` VALUES ('42', '78', '84', 'asa', '2020-06-12 12:07:56');
INSERT INTO `message` VALUES ('43', '78', '84', 'asa', '2020-06-12 12:08:07');
INSERT INTO `message` VALUES ('44', '78', '84', 'asa', '2020-06-12 12:08:18');
INSERT INTO `message` VALUES ('45', '78', '84', 'asa', '2020-06-12 12:08:45');
INSERT INTO `message` VALUES ('46', '78', '84', 'asa', '2020-06-12 12:11:04');
INSERT INTO `message` VALUES ('47', '78', '84', 'aa', '2020-06-12 12:11:22');
INSERT INTO `message` VALUES ('48', '78', '84', 'a', '2020-06-12 12:12:43');
INSERT INTO `message` VALUES ('49', '78', '84', 'aa', '2020-06-12 12:12:48');
INSERT INTO `message` VALUES ('50', '84', '78', 'artur', '2020-06-12 12:12:59');
INSERT INTO `message` VALUES ('51', '78', '84', 'a', '2020-06-12 12:13:40');
INSERT INTO `message` VALUES ('52', '84', '78', 'sds', '2020-06-12 12:14:46');
INSERT INTO `message` VALUES ('53', '78', '84', 'aaa', '2020-06-12 12:14:54');
INSERT INTO `message` VALUES ('54', '78', '84', 'aa', '2020-06-12 12:16:17');
INSERT INTO `message` VALUES ('55', '84', '78', 'aa', '2020-06-12 12:16:33');
INSERT INTO `message` VALUES ('56', '78', '84', 'a', '2020-06-12 12:18:42');
INSERT INTO `message` VALUES ('57', '78', '84', 'aa', '2020-06-12 12:19:20');
INSERT INTO `message` VALUES ('58', '78', '84', 'a', '2020-06-12 12:19:30');
INSERT INTO `message` VALUES ('59', '78', '84', 'a', '2020-06-12 12:20:17');
INSERT INTO `message` VALUES ('60', '78', '84', 'a', '2020-06-12 12:21:07');
INSERT INTO `message` VALUES ('61', '84', '78', 'as', '2020-06-12 12:21:30');
INSERT INTO `message` VALUES ('62', '84', '78', 'a', '2020-06-12 12:21:54');
INSERT INTO `message` VALUES ('63', '84', '78', 'a', '2020-06-12 12:24:10');
INSERT INTO `message` VALUES ('64', '78', '84', 'a', '2020-06-12 12:24:24');

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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of photos
-- ----------------------------
INSERT INTO `photos` VALUES ('33', 'image/1590789737282Tulips.jpg', '78');
INSERT INTO `photos` VALUES ('35', 'image/1590840315983Penguins.jpg', '85');
INSERT INTO `photos` VALUES ('39', 'image/159113104139239502856_2190388384509784_1523720775893254144_n.jpg', '84');
INSERT INTO `photos` VALUES ('40', 'image/1591135718625Tulips.jpg', '81');
INSERT INTO `photos` VALUES ('42', 'image/1591191408247151021643.jpg', '87');
INSERT INTO `photos` VALUES ('44', 'image/1591191638464Без названия (1).jpg', '87');
INSERT INTO `photos` VALUES ('46', 'image/1591461449488Lighthouse.jpg', '95');
INSERT INTO `photos` VALUES ('47', 'image/1591475736840U5o5rxGXWIo.jpg', '84');

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('2', 'Es Sirum em Ays vayry', 'image/1590789754604Lighthouse.jpg', '84');
INSERT INTO `posts` VALUES ('3', 'akslaklskalkslahskajksakkjkdjsjhdjakdsjaklasjdlkdsajkjdskaj', 'image/1590789765163Koala.jpg', '78');
INSERT INTO `posts` VALUES ('4', 'asals;laslljl;ll;l;l;lhaartyrbajshjahsjayh', 'image/1590789777351Chrysanthemum.jpg', '78');
INSERT INTO `posts` VALUES ('6', 'sedullllllllllll', 'image/1590789924503Desert.jpg', '81');
INSERT INTO `posts` VALUES ('7', 'Aramayis', 'image/1590841299732Penguins.jpg', '84');
INSERT INTO `posts` VALUES ('8', 'Mer Ynger Valodna', 'image/1590852018387Koala.jpg', '84');
INSERT INTO `posts` VALUES ('9', 'Girl', 'image/15909572456406Xf1DuBfX5g.jpg', '84');
INSERT INTO `posts` VALUES ('11', 'aaaa', null, '84');
INSERT INTO `posts` VALUES ('12', 'asaslklkal', 'image/1591191527816Без названия.jpg', '87');
INSERT INTO `posts` VALUES ('13', 'aaa', null, '87');
INSERT INTO `posts` VALUES ('14', null, 'image/1591194006677Без названия (1).jpg', '84');
INSERT INTO `posts` VALUES ('15', 'secaj', null, '95');
INSERT INTO `posts` VALUES ('16', 'asa', null, '84');

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of request
-- ----------------------------
INSERT INTO `request` VALUES ('4', '78', '82');
INSERT INTO `request` VALUES ('5', '79', '78');
INSERT INTO `request` VALUES ('6', '82', '80');
INSERT INTO `request` VALUES ('8', '84', '78');

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
  `active` int(11) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('78', 'Aram', 'Hovhannisyan', '40', 'aram@gmail.com', '$2b$10$2gDGA3E0d2NK8QzxclxqY.rUXdeNP/9oW9/Okh371MOGbo8dsQc.K', 'image/1590789737282Tulips.jpg', '1');
INSERT INTO `user` VALUES ('79', 'Nare', 'Vardanyan', '25', 'nare@gmail.com', '$2b$10$U44gAr2/DNimUDZe22x88OMd4OQ6e71zFfsq6/b6aW3bDEbavsmfO', 'image/avatar.png', '1');
INSERT INTO `user` VALUES ('80', 'Armine', 'Ghazaryan', '78', 'armine@mail.ru', '$2b$10$bnWg80Kfpj.2.T1bnPXyAuEiucl9omUV57KHPvLNaGpDXUaebUIGe', 'image/avatar.png', '0');
INSERT INTO `user` VALUES ('81', 'Seda', 'Amirbekyan', '35', 'seda@gmail.com', '$2b$10$jD2cuPunbPNFT4.CctoicOIrI6TR0BX4E/fJdyO1sq5BqzNnJaM06', 'image/avatar.png', '0');
INSERT INTO `user` VALUES ('82', 'Valod', 'Varosyan', '15', 'valod@gmail.com', '$2b$10$5hfovgeAnvmW4uIOoIwfmOEEypeF.TjxT0iPo8ZasKM9b9wkNXIn6', 'image/avatar.png', '0');
INSERT INTO `user` VALUES ('83', 'Asatur', 'Vahanyam', '45', 'asatur@gmail.com', '$2b$10$tdeVlMXJhdbVZA4zrWkvvu9WyDzP/fhEXb7LZqxqHSSOUOgXWq8P.', 'image/avatar.png', '0');
INSERT INTO `user` VALUES ('84', 'Art', 'Sahakyan', '19', 'artursahakyan262@gmail.com', '$2b$10$myE1jVeLnEQ8jfVshXXxZet9FvQAn5VdRJnK3Z5umFM5bAY7bYxXm', 'image/159113104139239502856_2190388384509784_1523720775893254144_n.jpg', '1');
INSERT INTO `user` VALUES ('85', 'Artak', 'Davtyan', '22', 'artak@gmail.com', '$2b$10$qTg1G712zKMG.t6KV9Hjruq00Nts0YrBCag7ON4aTA.qNFGPYDlJu', 'image/1590840315983Penguins.jpg', '0');
INSERT INTO `user` VALUES ('86', 'Vazgen', 'Hakobyan', '30', 'vazgen@gmail.com', '$2b$10$FBLMeFOjGAL51MODBNVtFu06PI5McGNTL9nD7.GkK1Xsd4jAfdJp.', 'image/avatar.png', '0');
INSERT INTO `user` VALUES ('87', 'Aram', 'Sargsyan', '15', 'aramm@gmail.com', '$2b$10$mFvC/mi.FTMbczS.H5pFD./rc32AWrDyp0q2eg2qA2/NEEFIKoBKi', 'image/1591191638464Без названия (1).jpg', '1');
INSERT INTO `user` VALUES ('94', 'aaa', 'aaa', '15', 'artsahakyan44@gmail.com', '$2b$10$0AAuJbgBVKGw2fsc1YJbx.LoCnN9x1BqoY9KuXxeral7tYSB2Hfa6', 'image/avatar.png', '0');
INSERT INTO `user` VALUES ('95', 'Sevak', 'Nazaretyan', '17', 'sevak@gmail.com', '$2b$10$Y.YPugjqdxN7qI5i7/REyeCD8M.wvd/mZe7WstUohJ2zsdy54R6HW', 'image/1591461449488Lighthouse.jpg', '0');
INSERT INTO `user` VALUES ('96', 'asa', 'asa', '19', 'asa@gmail.com', '$2b$10$I4kHZBfdJSw9UpCz0tvW.O.Aq3ZfIZooFHeT9XGIpa.y81uXLhrku', 'image/avatar.png', '1');
SET FOREIGN_KEY_CHECKS=1;
