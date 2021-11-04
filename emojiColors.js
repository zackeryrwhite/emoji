var emojiColors = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#ecb635', '#e6b033', '#e4ae33', '#e5ab30', '#c5a14c', '#e08e31', '#df8f32', 'false', '#e7a635', '#e5b034', '#e2a931', '#e6ab33', '#e9b235', '#d6af43', '#e5ad39', '#e4a63c', 'false', 'false', '#db9f3a', '#c9a82d', '#e4a330', '#e2a431', '#e9c239', '#d2a223', '#e9ac33', '#eab535', '#c9a223', '#d9ac40', '#e4ad2f', '#e5b034', '#e5b034', '#ebb536', '#5f3f1a', '#ccc371', '#e4b035', '#e4b035', 'false', 'false', '#d2a92d', '#e3ac34', '#e4af34', '#e4b135', '#d5b146', '#e0ae36', '#d4a439', 'false', '#dfa63a', '#d7aa4f', '#8aa619', 'false', 'false', '#da7738', 'false', '#dea52f', 'false', '#cea222', 'false', 'false', '#cf9a3e', '#b1862b', '#b68c32', '#cb9d35', '#e1ad3b', '#e8b335', '#e6b034', '#e8b134', '#e9b336', '#e5af33', '#e6b033', '#e1ab33', 'false', '#c59b3d', '#b79730', '#e6b134', '#e1ac32', 'false', 'false', '#dbb141', '#d6ae41', 'false', 'false', '#e3af34', '#e3ae34', '#e6b235', '#d2ad44', '#d8a32f', '#d6a02d', '#d6a231', '#dcb24d', '#e57423', '#e8b336', '#ba6f34', '#873997', '#883a98', '#b1b3b4', '#a4a5a6', '#7d563d', 'false', 'false', '#a5372c', 'false', '#7e8d8e', '#4c3c60', 'false', '#b38f3a', '#af8d38', 'false', '#be7b31', '#b99436', '#c49738', '#bd9a47', '#b69a44', '#bb9536', '#b39069', '#ad8e69', '#ac8b64', '#c22122', '#daadae', '#b04f9f', 'false', '#e14d8b', '#d95198', '#e33c9d', '#d83b97', '#dd3c99', '#b274c4', '#d33429', '#d8362b', '#d1591b', '#dd7b75', '#e43e33', '#e8841b', '#eebd4a', '#47c13c', '#2071ec', '#b24eeb', '#865430', '#353535', '#d8d8d8', '#cc0501', '#bf0606', 'false', '#e9be4f', '#44b0e2', '#b0c3d7', '#393939', '#51524e', '#dcdcdc', '#6c6f72', '#424242', '#cacbcc', '#d7d7d8', '#064eba', '#d8a635', '#f1b843', '#f3ba33', '#ebb12e', '#ebb22f', '#fabd23', '#f9bb1b', '#deaa34', '#e9b344', '#e1a62b', '#e7ad2e', '#e8ae2e', '#fbbe17', '#e7b335', '#e8ad2c', '#e9b334', '#ebb533', '#e5b031', '#dfa82e', '#e2ab2e', '#e8b231', '#e5aa29', '#e8b55c', '#ecb637', '#ecb231', '#e5aa2d', '#eaae2c', '#e2aa31', '#e8ae31', '#e2ac34', '#dba530', '#cda83f', '#daa229', '#efbb2d', '#e6b22d', '#a38b4f', '#b28226', '#cc9056', '#8f876f', '#e8ab29', '#5a5a5a', '#6e5f60', '#cf9b2d', '#d99c24', '#e0ae2c', '#d1a339', '#e3b22e', '#cf7b93', '#ac4a5c', '#d96e69', '#d6ccba', '#adadae', '#bdb3a7', 'false', '#ad5866', 'false', '#e3648e', '#d8a522', '#d8a936', '#dead32', '#e0af33', '#d4a535', '#cba540', '#dfac2e', '#d39f29', '#8d6a2f', '#836131', '#d99920', '#dca722', '#e3bd5a', '#e1b331', '#d5a22f', '#d58b20', '#c97b19', '#dda623', '#d8a322', '#d9bd71', '#d8b45a', '#e2b438', '#ddb037', '#d7a92c', '#dbab30', '#d8aa33', '#dba92a', '#daa831', '#d0a94f', '#bda14c', '#c48a40', '#d4ae52', '#b59b4c', '#ba813e', 'false', '#8c8c68', 'false', '#a99462', '#7e836a', '#90505b', '#c5a555', '#a3945c', '#b67b4a', '#bd9c4c', '#a49050', '#b97d49', '#b78f33', '#a58534', '#a47128', '#a98b42', 'false', '#b78346', '#cea945', '#b49848', '#bb803b', 'false', 'false', 'false', '#cfa94e', '#c9a647', '#cb9f45', '#7f662e', '#876e32', '#896b29', 'false', 'false', 'false', '#ab8536', '#a98230', '#b38932', '#8b6f27', '#8b7026', '#907225', '#cbaf74', '#ceb277', '#c3a86f', '#ae9355', '#b6984f', '#b09049', 'false', 'false', 'false', '#c5a24d', '#caa84f', '#ae8a3a', 'false', 'false', '#c7a857', '#ae9863', '#b6a068', '#ab935d', '#6b923a', 'false', 'false', 'false', 'false', 'false', '#75612b', '#745f2b', '#725e2c', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#443623', '#443722', '#453823', '#353530', '#c0993b', '#cba23d', '#c1993a', '#c69d2a', '#cc9823', '#caad67', 'false', '#ccb16b', '#a8761c', '#745763', '#816638', '#856b38', '#7c6238', 'false', '#b89a72', '#b1926d', '#a76d58', 'false', 'false', 'false', 'false', '#d3ab3f', 'false', 'false', '#bf9453', 'false', 'false', '#ae6b3e', 'false', 'false', 'false', '#706337', '#655d3e', '#6b5e30', '#9bb778', '#9eb57b', '#aca582', '#6d5128', 'false', '#614428', '#7f6a5f', 'false', 'false', 'false', 'false', '#bcb56a', '#52456d', 'false', '#8b2c69', '#596155', '#5f6558', '#545b50', '#716e60', '#d2a134', '#caa339', '#c58f29', '#c4a049', '#b19347', '#bf873b', 'false', 'false', 'false', 'false', 'false', '#b09549', 'false', 'false', 'false', 'false', 'false', 'false', '#5d4e43', '#5f453b', '#5b4541', '#534c3d', '#554233', 'false', 'false', '#965f48', '#9c8045', 'false', '#5f3251', '#302b22', 'false', '#826624', '#947225', '#dbd1a8', '#d8cfa8', '#dcd8b8', '#827256', '#877051', '#8a7555', '#8a847e', '#4d392b', 'false', 'false', '#877c5e', 'false', 'false', '#c78b3c', 'false', 'false', '#b94e32', '#bb5136', '#b24b33', '#b7b194', '#c2b074', '#a88f7a', 'false', 'false', 'false', 'false', 'false', 'false', '#645d46', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#be9135', 'false', 'false', 'false', 'false', 'false', '#907f44', 'false', '#d4a94a', '#d89427', '#ca8d35', '#b1b4a5', '#8c7e7b', '#92815d', '#b07b3c', '#9e713a', 'false', '#e49d55', '#e09a4b', '#e8a151', '#dd9748', '#d19153', '#d29151', '#d49856', '#cd8848', 'false', 'false', 'false', '#aa7a3a', '#a47a3a', '#b07b3a', 'false', '#8a7a60', '#9e844c', '#978249', '#a78548', 'false', 'false', '#c07e2e', '#bb7f2d', '#c57f2f', '#8f764f', '#ab904a', '#9c774e', '#ae8b44', '#bc8f45', '#b6712e', '#be8833', '#b66a2d', '#bb8232', '#c88633', '#56799c', '#5b80a1', '#5e84a5', '#5a80a1', '#464646', '#e7991f', '#e1a81e', '#f1d795', '#f9cf49', '#ac8d67', '#a48053', '#605e5e', '#914725', '#b59b7c', '#a17548', '#9d7c4a', '#342d29', '#9b9b9b', '#706f6f', '#b4651b', '#5b503f', '#cba42f', '#ba9f87', '#444343', '#b9771e', '#a88f2b', 'false', '#9f7d4b', '#84724d', '#504629', '#ad7cbb', '#524d4a', '#8a6647', '#614e45', '#b3a69a', '#8c6245', '#494040', '#827b78', '#c9978d', '#c89f89', '#604c40', '#ba7382', '#a29d91', '#aeaca3', '#87735c', '#9c6d40', '#a9734b', '#baae91', '#a2702e', '#787a77', '#74563e', '#716d6a', '#777675', '#b2a9b1', '#c1b3b3', '#786f65', 'false', '#bcb0b1', '#bcb9b9', '#805728', '#7a5c45', 'false', '#604a3c', '#7b5533', '#aeb0b2', '#867672', '#a2a2a2', '#59482d', '#5f4b38', '#4f4c45', '#8f6b44', '#615d56', '#464646', '#78544d', '#cc937a', '#b59488', 'false', '#d6b034', '#d9a22c', '#809698', '#6b5f4f', '#b1b4a6', '#493f38', 'false', '#b8b3a0', '#775f4e', '#9e734e', '#6e614c', '#ae5254', '#437d51', 'false', '#73994c', '#516f4d', '#5c7b41', '#427d3d', 'false', 'false', 'false', '#2f6d82', '#4c7216', '#409bb7', '#89afbf', '#51a4ba', '#8d8b8a', 'false', 'false', '#b99354', '#7e8e92', '#a54150', '#afa5a4', '#966e46', '#2a7499', 'false', '#483a37', 'false', '#527300', 'false', '#654d32', '#79433b', '#333133', '#838383', '#905a18', '#615246', '#7d5937', '#bf434b', '#49971d', 'false', '#ed96b7', '#f5b2b2', '#e59579', '#d59431', '#b3201d', '#693621', '#b83c48', '#9d7e04', '#d7af31', '#b2725e', '#66aa19', '#8d8432', '#316234', '#567920', '#597926', '#58902f', '#a29d37', '#589d27', '#5cc325', '#69c12d', '#b14c19', '#aa5c12', '#729e3e', '#963157', '#b3b67a', '#c46f5d', '#c57b2d', '#b6a738', '#dcbe68', 'false', 'false', '#c23e37', '#7aaa39', '#a8a93e', '#cd7245', '#a3453e', '#b24336', '#4b6aa0', '#a2a54f', '#bb4920', '#6d6e22', '#a29079', '#a29853', '#76546a', '#a67845', '#89681e', 'false', '#b54339', '#54752e', 'false', '#388b35', '#4e7630', '#b29282', 'false', '#d87b6c', '#a57b3b', '#992917', '#803b20', '#caa46a', '#c78120', '#d39b5a', '#c0b097', '#c4794b', '#cd9b68', '#d6ae71', '#d8a04a', '#efaf1e', 'false', '#9b643f', '#c04d43', '#bd603f', '#b97f3c', '#d16a3a', '#c26429', '#ca8743', '#c29b54', '#ad8d37', '#a59886', '#b38130', '#867741', '#746144', '#dad5ce', '#625c4e', '#856237', '#a4a792', '#904138', '#7ca1cf', '#8d9759', 'false', 'false', '#a9a9a7', '#bf796d', 'false', '#816629', '#908f83', '#c3c1be', '#bb9b81', '#cfae8d', 'false', '#b35e5d', 'false', 'false', '#de8853', '#d4c6bf', '#bc5d16', 'false', '#d7b483', '#bb9352', '#c5bdbf', '#b24323', '#b23317', '#c55128', '#a54a3a', '#8d806e', '#ceb584', '#b9a4a4', '#c3b39b', '#865e43', '#b07f46', '#cdbdb4', '#dbb97c', '#c5a96e', '#cc8f44', '#b64a41', '#a2a8b9', 'false', '#ce9d74', '#d8a53f', '#c7bf9c', '#bebdb9', '#99938a', '#b9c0c4', '#979381', '#bdbec3', 'false', 'false', '#9d9983', 'false', 'false', 'false', 'false', 'false', '#d3cecc', '#c17676', '#ae855a', '#55996a', '#653b28', '#80b9d9', 'false', '#bbbfc2', '#888f96', '#7a8189', '#7a7b7b', 'false', '#607983', '#4e6f90', '#5d788b', '#92c8dc', '#75a4aa', '#8cb5de', '#b6b1b5', 'false', 'false', 'false', '#677182', 'false', 'false', 'false', 'false', 'false', 'false', '#9b947c', '#c48c46', '#88361d', '#5d5d58', '#80624b', '#6f5d47', 'false', '#a08668', '#a78972', 'false', '#89949a', '#b6a28d', '#a99981', '#9a9393', '#a2a588', '#b69a88', '#b4899c', 'false', 'false', '#7f838a', '#a17764', 'false', '#837970', 'false', '#802720', '#578e8a', '#a79ba1', '#c2916a', '#b9704c', '#ac8b65', '#94351c', '#39362e', 'false', '#ca5a30', '#d6dde5', '#63869b', '#8aaac7', 'false', 'false', 'false', 'false', '#7b7677', '#c80807', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#767e85', 'false', '#647789', '#534948', 'false', '#565e61', 'false', '#626d7c', 'false', 'false', 'false', 'false', 'false', 'false', '#978387', '#aa4445', 'false', '#5c686e', 'false', 'false', 'false', 'false', 'false', '#3c6366', 'false', '#346835', '#6d682f', 'false', '#505253', 'false', '#3d3d3d', '#473838', 'false', '#334050', '#373f45', '#56553b', '#8c9fa2', 'false', 'false', 'false', '#954f4e', '#a7494d', '#cd5f53', '#56503d', '#605a47', '#e14e2c', '#8a742a', '#626366', '#bd6049', 'false', '#405520', '#9a7e41', '#959196', 'false', '#768793', '#a3716b', 'false', '#8f98a2', 'false', 'false', '#af5128', '#68718b', 'false', 'false', 'false', '#7a703f', 'false', 'false', 'false', 'false', '#4e3727', 'false', 'false', '#4a4a4a', '#c08a8b', '#aeacae', '#c0bfbe', '#9b7e69', '#c8c9cb', '#c7c8ca', '#c8c9cb', '#c6c7c9', '#c7c9ca', '#c7c9ca', '#c5c7c8', '#c8c9ca', '#c6c8c9', '#c7c8ca', '#c6c7c9', '#c7c8c9', '#c6c8c9', '#c7c8ca', '#c7c8ca', '#c8c9cb', '#c7c9ca', '#c7c8ca', '#c8cacb', '#c8c9ca', '#c8cacb', '#c7c8ca', '#c7c8c9', '#c7c8ca', '#28374e', '#515349', '#877e4d', '#baa943', '#f1d02c', '#baa63d', '#847847', '#4d4d43', '#e9c446', '#4c5163', '#dcbc47', '#d9ba48', '#cc9399', '#ecae2e', '#e5c960', '#e6aa37', '#8f8359', '#edce74', '#eccc67', 'false', '#46576d', '#dce1e5', '#e5dfca', '#c7d5cf', '#e4c77c', '#e4e1d2', '#d1ccac', '#c0d5e1', '#c6d6e3', '#e0e0d9', '#a4a7b1', '#d7d7dd', '#bfc4cc', '#0058da', 'false', '#593e80', '#7e41ba', 'false', 'false', '#e4aa2d', '#91cae9', '#8e9aa0', '#898f93', 'false', 'false', '#4ebced', '#739ab4', '#c97d0a', 'false', '#7c6584', 'false', '#b52516', '#e8b73d', '#d44046', 'false', 'false', '#7b6221', 'false', 'false', 'false', '#bac3ce', 'false', '#c72e29', '#d3698e', '#c15c20', '#dfaa0f', '#e26a77', '#bcb55e', '#c7763f', '#ad7716', 'false', '#d89f2e', '#988e95', '#9d522a', '#a1a1a1', '#bfb0ab', '#c6c62d', '#bc6633', '#b9b9b9', '#b37556', '#c68f45', '#bcd031', '#3b7bb3', '#84807e', '#b36b31', '#7e6f4b', 'false', 'false', '#e3604d', 'false', '#b23b3c', '#afacab', 'false', '#7e822d', '#9a9898', 'false', '#6d5f4e', '#1297c9', 'false', '#8c2423', '#7f5051', '#a25a5b', '#489725', '#465c9e', '#545454', 'false', 'false', '#2f4cba', '#4a4842', '#6f494d', '#9f847c', '#acaaaa', '#7bb164', '#9e7238', 'false', '#b9bbc4', 'false', '#2d2d2d', '#c72525', '#d22121', '#303030', '#282828', '#bfb6ad', '#bfa18e', 'false', 'false', 'false', '#ad863f', '#537074', '#3e657d', '#ac440e', '#602446', '#6a7571', '#303231', '#959898', '#d6d7d8', '#b3612d', 'false', '#679aca', '#435794', '#b42f2a', '#30aa72', '#c19549', '#9a8873', '#31b6a9', '#d28c25', '#d06616', '#1a8288', '#24841f', '#d98d1e', '#ac5464', '#e093c7', '#d47ea1', '#9a6f54', '#9a734a', '#e07b80', '#b13029', '#5c9591', '#7e4533', '#9c9a98', '#58483a', '#1a355b', 'false', '#bf9e7f', '#d19a83', '#b18e63', '#b09730', '#98ab61', '#433e2f', '#3d3529', '#387be2', '#505f45', 'false', 'false', '#974a45', '#8e99a1', '#69b5ec', 'false', '#6d7074', 'false', 'false', '#a3a5a7', '#957928', 'false', '#a1832f', '#a96123', '#525252', '#3c3f44', '#3d4248', 'false', '#868a8c', '#888d8f', '#5e5e5e', '#353637', '#918055', '#9f8537', '#874954', 'false', '#89898a', '#8f7c35', 'false', '#867b63', 'false', '#92714e', '#363a38', '#31404a', '#cd4144', '#4e5051', '#3d7955', '#9c978e', '#6a9e4f', '#d5a3ad', '#36342f', '#4e4e4e', '#535454', '#7a7d7f', '#b3b3b6', '#e7e8e9', '#424e64', 'false', '#9da0a3', '#c4c4c2', '#c3b58c', '#822c11', '#4c4f53', '#9d8c6e', '#656969', '#5f5f5f', '#706a62', '#686868', '#736753', '#6c6e71', '#595958', '#9a9da0', '#a4a5a8', '#b1a395', '#ddd2b0', 'false', '#a14019', '#954b36', '#d0b16f', '#a73b38', '#9ba8b1', '#759941', '#3a75a2', '#bf7e21', 'false', '#727272', '#d6bc2d', '#c7c7c7', '#b2926e', '#c7c7c7', '#a3a3a3', '#8b8a89', '#cbcdcf', '#dec6be', '#f4cc9c', '#9f8347', '#888c8e', '#9c9a88', '#bdb285', '#9bb5a1', '#aa9499', '#aea88e', '#b1ac8d', '#cecece', '#36bf3a', '#dbdbdb', '#c3ccd5', '#b5bec5', '#d9c6c6', '#99a3c0', '#98a3c1', '#9f7854', '#597790', '#5d8199', 'false', 'false', '#ca3c3c', '#7ca7ac', 'false', 'false', '#696c70', '#5c6064', 'false', '#ac3131', '#d7cdb9', '#755a4a', '#9aa2aa', '#9ba4ad', '#d9af87', '#bea3a3', '#a48d8d', '#ced2d6', '#ccbebf', '#928f89', '#d0c5cc', '#bccbdc', '#99adad', '#c5bcb1', '#af383b', '#bc4c49', '#717c89', '#80868c', '#a0b1c5', '#9fb1c4', 'false', '#5f5a52', '#656a6d', '#73787f', '#a7a474', '#a4a073', 'false', '#b6a159', '#d8aa1e', '#595556', '#525459', '#7e402f', '#494b4e', '#5a5b5d', 'false', '#717277', 'false', '#75d15a', '#936049', '#8f7b73', 'false', '#9c8f80', '#717076', '#589f46', '#86898f', '#8b9097', '#617078', '#656f7a', '#69595b', 'false', 'false', '#91783e', '#bd4c48', '#d03d3d', '#92724f', '#95aaae', 'false', 'false', 'false', '#69767c', '#91908f', '#9a9da2', 'false', '#ba0907', 'false', '#cccccc', '#bb9867', '#474748', '#975c3b', '#5797df', '#cbc8b8', '#93644e', '#877873', '#7fa1c5', '#8e583c', '#cdcccb', '#9b553e', '#6aa4aa', '#b7bcbf', '#caa371', 'false', '#dbc8bb', 'false', '#866e3e', '#725d48', '#c6c5bd', '#397182', '#7bd0ab', '#dbe5ee', '#6bb5d1', '#cfbf28', 'false', '#696667', '#9a8f82', '#834f2f', '#7c7b78', '#b38922', '#66655d', '#d4d1cd', 'false', '#819bb2', 'false', '#3c8add', '#257edc', '#a75cbc', '#8fa6ba', '#f5ac3f', '#3b89dd', '#3486de', '#388ade', '#4891de', '#3888dd', '#e8bc12', '#ad8f14', '#de755f', '#cf492d', '#9a4b3a', '#9b4b3b', '#a45343', '#a45343', 'false', '#964a3a', '#a65545', '#f3a134', '#f2a138', '#88a0b6', '#89a1b6', '#88a0b6', '#8aa2b7', '#89a1b7', '#8aa2b7', '#88a0b6', '#89a1b6', '#8ea5b9', '#8ea4b9', '#859eb4', '#869eb4', '#859eb4', '#859eb4', '#8ca3b8', '#8fa5b9', '#464646', '#454545', '#444444', '#484848', '#4b4b4b', '#a355ba', '#aa64be', '#aa62be', '#a860bd', '#b173c3', '#ad69c0', '#a14fb8', '#a354b9', '#a65abb', '#ab65bf', '#ac69bf', '#aa63bd', '#a75cbc', '#a75cbc', '#aa62be', '#a960bd', '#aa63be', '#ad68c0', '#ad69c0', '#aa62be', '#a962bd', '#aa62be', '#a75dbc', '#a85cbd', '#af6bc2', '#8ba2b7', '#8ca3b8', '#8da3b8', '#8aa1b7', '#8da4b8', '#8da4b8', '#91a6ba', '#88a0b6', '#89a1b7', '#8ca3b8', '#88a0b6', '#8aa1b7', '#89a0b6', '#8ba2b7', '#859eb4', '#97acbe', '#90a6ba', '#869eb4', '#9db0c1', '#e6aa1f', '#eba81e', '#8ba2b7', '#f5a833', '#f2a837', '#aa05d5', '#00aa93', '#839cb2', '#464646', '#464646', '#454545', '#454545', '#6a6a6a', '#e81602', '#d12b06', '#c70909', '#d4d3d3', '#e2e2e2', '#dc0505', '#434343', '#464646', '#4b4b4b', '#2f7dc7', '#14981d', '#9e8336', '#bb8e1a', '#e17b68', '#70963f', '#e10606', '#2cbd30', '#7a7a7a', '#434343', '#ea0606', '#35c038', '#3f3f3f', '#464646', '#e3a506', '#48c34c', '#f5aa39', '#34bf38', '#464646', '#474747', '#494949', '#869eb5', '#869eb5', '#849db3', '#7e98b0', '#829cb3', '#829cb3', '#829bb2', '#829cb3', '#859eb4', '#7d98b0', '#869eb4', '#859eb4', '#8da4b8', '#889fb5', '#839cb3', '#809ab1', '#839cb3', '#819bb2', '#e24b3c', '#e15749', '#e05143', '#e04f41', '#869fb5', '#879fb5', '#7b96af', '#b577c6', '#4b8be9', '#869eb5', '#8ca3b8', '#e0594b', '#8aa1b7', '#3989df', '#dd4e40', '#869eb5', '#f6aa38', '#88a0b6', '#2e83dd', '#f6aa38', '#f4ab3e', '#43c247', '#ef4742', '#df6256', '#f5ae41', '#e26659', '#f4a133', '#f4a93a', '#df5c4f', '#3889de', '#f23f3b', '#f04944', '#f3ad46', '#de675b', '#cd2928', '#df8714', '#f3cc15', '#10b110', '#1861c6', '#a636ed', '#7d4f2e', '#1c1c1b', '#dfdfdf', '#d33121', '#fb9016', '#f7c512', '#13b713', '#1869f3', '#ba3ff9', '#7f4e2e', '#1c1c1b', '#d9d9d9', '#050505', '#dadada', '#0a0a0a', '#dadada', '#242323', '#dadada', '#f3990f', '#106dc4', '#ea9510', '#0f69bc', '#d51a07', '#e93926', '#75b1d8', '#828282', '#848484', '#727272', '#707071', '#a02223', '#c3a3a4', '#313232', '#c1c1c2', 'false', '#b5acbe', '#494a4a', '#3e476e', 'false', 'false', '#44401b', '#7a3c40', '#553261', '#92272c', 'false', '#6a2422', '#6c90bb', '#93acc1', '#635272', '#cd6c69', '#434477', '#617a98', '#656061', 'false', '#564d68', '#474f5d', '#4a5d45', 'false', '#736340', 'false', '#bd5b65', 'false', '#78713d', '#c4bbb5', '#9d2f33', '#9c8840', 'false', '#707c95', '#3d9358', '#3d7768', 'false', '#a44951', '#5d7992', '#893d1e', '#41546e', '#d55151', '#307b23', '#5b757d', 'false', 'false', '#ce3e3e', 'false', '#4a285e', '#ac7077', 'false', '#b3272f', '#996b40', 'false', 'false', 'false', '#3f4f82', '#384f65', '#335e6f', '#d2cbc2', 'false', 'false', 'false', 'false', '#b85064', '#3d7144', 'false', '#7b9a7e', '#ad6220', '#93693c', 'false', '#8f6365', 'false', '#855159', 'false', '#1d4185', '#8393a8', '#557790', '#464e79', '#729fbc', '#9f97aa', 'false', '#8a506c', 'false', '#d18891', '#77982a', '#d2a39b', 'false', '#c07375', '#c57585', 'false', 'false', '#333930', 'false', '#66669d', '#3d436d', '#91b4c2', '#375483', 'false', '#737d4b', '#b53240', '#597bb5', 'false', '#622b68', 'false', 'false', '#cb7070', 'false', '#8b9abd', '#ae2f3f', 'false', 'false', 'false', '#535584', 'false', '#cfa4a7', '#727b1d', 'false', '#ccaeb5', 'false', '#c83233', 'false', '#a0666d', 'false', 'false', '#9c5368', '#afa4aa', 'false', '#48275a', '#2f9c9b', '#623e5e', '#bf8b7d', '#66a5b6', '#652d50', '#a56640', 'false', 'false', 'false', 'false', '#8c4850', '#4d3829', '#b71922', '#c2767e', 'false', '#ac2b1f', 'false', '#455a84', '#bc572e', 'false', 'false', '#8a4a4f', '#27705f', '#326f98', '#617298', '#4c744a', '#402f60', '#c1737d', 'false', '#744941', '#5f3b2b', 'false', 'false', 'false', 'false', 'false', '#9e9d6f', '#58906d', '#54997d', '#819bce', 'false', '#77374b', '#2b4574', '#b89137', '#3d2560', '#a7725f', '#97809c', '#c2656f', '#be767d', '#6a2e27', 'false', '#588b58', '#ce8e89', 'false', '#3d496d', '#88516c', 'false', '#864018', '#43a99d', 'false', '#945e6e', '#6d2f8f', 'false', 'false', 'false', '#53886a', '#216945', '#3b695f', 'false', 'false', '#547768', '#cf8589', 'false', 'false', 'false', '#6797af', 'false', '#4b80bf', '#93635c', 'false', '#6c842a', '#5564a1', '#7a3f67', 'false', 'false', '#533059', 'false', '#324287', '#6f6f3c', 'false', '#a78770', '#485465', '#9d4134', '#32614f', '#c72a36', '#b44242', '#ca3f48', '#8d2f39', '#726e7d', '#a93d63', 'false', '#889465', 'false', 'false', '#239ece', 'false', 'false', 'false', 'false', 'false', '#402b59', '#9fa084', '#b6312f', 'false', '#bf4656', '#a73a4c', '#44598b', 'false', '#c6bec0', 'false', '#3d6815', 'false', '#c68d8d', '#5f87b0', 'false'];
