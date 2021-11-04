var emojiColors = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#cd9c28', '#ca9626', '#c39127', 'false', '#bc9333', 'false', 'false', 'false', 'false', '#d39f28', 'false', '#c58f26', '#cf9a27', '#cca137', '#cf982d', 'false', 'false', 'false', 'false', 'false', '#cb8e28', '#d0942a', '#cd9329', '#d19e2b', 'false', '#bd8722', '#ca9928', '#cc9727', '#cf9c27', '#ca9829', 'false', 'false', 'false', '#c79528', 'false', 'false', '#bf8d27', 'false', 'false', 'false', 'false', '#7a9512', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#bd9132', '#ce9a28', '#bf8b24', '#c99527', '#d19e29', '#cb9926', '#c29026', '#be8c24', 'false', 'false', '#a68e2e', '#c69326', '#bd8b24', 'false', 'false', '#c89c30', 'false', 'false', 'false', '#bf9026', 'false', '#d4a028', 'false', 'false', 'false', '#bc8d28', 'false', '#cb641c', '#c18f25', 'false', '#722f81', 'false', '#8b8d8d', '#8f9091', '#6a4732', 'false', 'false', 'false', 'false', '#453759', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#bd1d1d', '#be8787', '#b43c7b', '#cc318b', '#bc2e25', '#d44d1f', '#ad0000', '#bc0101', 'false', '#c8a547', '#3fa3d0', '#9eafc2', '#1e1e1e', '#3e3f3e', '#c9c9c9', '#4e5052', '#3a3a3a', '#c8c9c9', '#cdcece', '#0051cc', '#c48c42', '#868372', '#d89e24', '#4a4a4a', '#554f50', '#c58f22', 'false', 'false', '#c35f5b', '#c9bead', '#a9aaab', '#a59b8e', 'false', '#904954', 'false', 'false', '#236678', 'false', '#474b41', '#52574d', '#45483f', '#5e84a6', '#5b7f9f', '#587d9f', '#444444', 'false', 'false', '#4c4b4b', '#7b3a1b', '#977d5f', '#936940', 'false', '#2b2320', '#969696', '#585858', '#ad5d13', '#574d3e', '#b28f27', 'false', '#363635', 'false', 'false', 'false', '#816337', 'false', 'false', '#a075ac', 'false', '#795436', '#50413a', '#998c81', '#7c553b', '#433a3a', 'false', '#af817a', '#b8937f', '#4c3c31', '#968f84', '#9b9991', '#796651', '#805732', 'false', '#b3a88b', 'false', '#70726f', '#644934', '#5c5955', '#666463', '#92898e', '#bdaead', '#6c645b', 'false', '#948a8b', '#aea8a8', 'false', '#694e3a', 'false', '#4d3a2d', '#634427', '#828385', '#695d59', '#8b8a8a', '#4d3d26', 'false', '#36342f', '#835e37', '#56524b', '#464646', '#5b3c37', '#c0886f', '#a98b82', 'false', '#bb9732', 'false', '#6a7c7e', '#5a5042', '#94968b', '#2d2622', 'false', '#a5a190', 'false', '#8e6644', '#4a3e2c', '#be5355', 'false', 'false', 'false', '#4b6e4d', 'false', 'false', 'false', 'false', 'false', '#2f6279', '#416713', '#3284a2', '#7b9cac', '#3f98ae', '#747371', 'false', 'false', 'false', '#6e7c7f', 'false', '#908685', 'false', '#2379a6', 'false', '#28201f', 'false', 'false', 'false', 'false', '#462724', '#1e1d1e', '#8c8c8c', '#734a15', '#3a2e27', 'false', '#b43d44', '#27720e', 'false', '#e58ca8', '#e59e9d', '#e89b77', 'false', '#991114', '#501a0d', '#a93040', 'false', '#c49c2a', 'false', '#5b9817', '#877031', 'false', '#47641b', '#5a7d23', '#497e24', '#8c852b', '#478121', '#4faf1d', '#59ad21', 'false', '#8c4509', '#5b8824', '#872249', '#a0a36c', '#ac5646', 'false', 'false', 'false', 'false', 'false', '#ad2d2c', '#679230', '#949633', 'false', '#953434', '#a13229', 'false', '#898c42', '#a6421b', 'false', '#877560', 'false', 'false', 'false', '#8a621e', 'false', '#a93633', '#4a6b20', 'false', '#297729', '#395a23', '#917365', 'false', 'false', 'false', '#852011', '#672a14', '#be955b', '#b0711d', 'false', '#b0a28c', '#a35c32', 'false', 'false', '#c0873c', '#d09215', 'false', 'false', '#b1362e', 'false', 'false', 'false', 'false', 'false', '#b7904f', '#957930', 'false', '#996e2a', '#706531', '#5d492f', '#c1bdb6', '#524d42', 'false', 'false', 'false', '#6182ab', 'false', 'false', '#ceb068', '#9c9c9b', 'false', 'false', '#655422', '#6f7063', '#adaba8', '#a58164', '#c8a487', 'false', 'false', 'false', 'false', '#ce7c49', '#c9b0ab', '#af5313', 'false', '#c29f72', '#97743b', '#ada2a4', '#af3e1d', '#b73c18', 'false', '#a74533', 'false', '#c0a3a3', '#b8a487', 'false', 'false', '#c1a5a1', '#c9a569', 'false', '#c07e2e', '#a3342f', '#9197ab', 'false', 'false', 'false', '#b9b191', '#b0aea9', 'false', '#9ea2a5', 'false', '#9d9fab', 'false', '#9a524f', '#998f71', 'false', 'false', 'false', 'false', 'false', '#978682', 'false', '#957048', '#498257', '#4f2614', '#4b7288', '#71403e', '#d3d6d9', '#737a81', '#5f646a', '#696a6a', 'false', 'false', 'false', 'false', '#4894b0', '#6d98bf', '#a8999b', 'false', 'false', 'false', '#4c5463', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#785b22', '#702b16', 'false', 'false', '#594936', 'false', 'false', '#866d59', 'false', '#66747b', '#a28b7e', 'false', '#807479', 'false', 'false', 'false', 'false', 'false', 'false', '#98604d', 'false', 'false', 'false', 'false', '#508681', '#9e9696', 'false', '#975737', 'false', '#8d331c', '#2c2923', 'false', 'false', 'false', 'false', '#746c36', 'false', 'false', 'false', 'false', '#6d747a', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#746c71', '#9a3b3c', 'false', 'false', 'false', 'false', 'false', 'false', 'false', '#304e52', 'false', '#266529', 'false', 'false', 'false', 'false', 'false', '#312c2c', 'false', 'false', '#12181e', '#505036', '#709a9d', 'false', 'false', 'false', '#863535', 'false', 'false', '#403c2a', '#403d2d', '#62551a', 'false', '#cd654c', 'false', '#3c6327', '#917634', '#7e7b83', 'false', 'false', '#905955', 'false', '#818a96', 'false', 'false', 'false', 'false', 'false', 'false', '#7e443e', 'false', 'false', 'false', 'false', 'false', '#402c1e', 'false', 'false', '#292a2a', '#b88586', '#a5a3a5', '#ababaa', '#8a6a56', '#b5b5b6', '#263449', '#353a3e', '#8a813e', '#e0bf25', '#484d5e', '#c3a63f', '#b3787e', '#c69b26', '#e0c056', '#d89d33', 'false', '#d0b460', '#c9cccf', '#d0c9b2', '#c5d7db', '#d7c579', '#dadace', '#cac397', '#b4c8d2', '#d0d5d9', '#dfdfd8', '#b3b5be', '#c7c7cd', '#b0b4ba', '#0042a1', 'false', '#503574', '#7d3ac4', 'false', '#bf6849', '#b19448', '#5a99bb', '#7f8487', '#7a7f82', '#c45214', 'false', '#3799c6', 'false', '#b86e0a', 'false', 'false', '#98160c', '#c2a831', '#9f2629', '#b98e55', '#bd7448', 'false', 'false', 'false', 'false', '#a8b4c5', 'false', '#b22622', '#c15b7e', 'false', '#c4960d', '#bb5762', '#98924b', 'false', 'false', 'false', '#d29324', '#928791', '#8d4418', '#8a8a8a', '#b79591', '#bfad29', '#975228', '#a1a1a1', '#9f5f40', '#af7c39', '#a8bb22', '#3c80b9', 'false', '#ba6a35', '#83714a', 'false', '#5a6a75', '#d6483b', 'false', 'false', '#92908e', '#995655', '#5f6e29', '#838282', 'false', '#3c332a', '#1387b9', 'false', '#871e1e', '#614545', 'false', '#3b8d1d', 'false', '#444444', 'false', 'false', '#253da0', '#383732', '#533e42', 'false', '#989898', '#74a960', '#936b35', 'false', '#9d9fa7', 'false', '#a09892', '#a87f71', '#5c4341', 'false', 'false', '#aa833d', 'false', 'false', '#8f380e', 'false', '#5d6864', '#2a2c2b', '#5f6363', '#bec1c2', 'false', 'false', '#5a8bb9', '#323f76', '#922420', '#2a9765', '#a17a3b', '#7a6957', '#2ba094', '#b5741e', 'false', '#18787d', '#1c7419', '#cf7c0f', 'false', '#ca82b2', '#bf698c', '#875a3d', 'false', '#c7646b', '#a92621', '#548a85', '#6d3828', '#868381', 'false', '#142f54', 'false', '#a08065', '#c08b77', '#93754f', 'false', 'false', '#393326', '#2e2b26', '#2a65c0', '#465138', 'false', '#804340', 'false', 'false', '#59a6de', '#673234', 'false', 'false', 'false', '#8b8d8e', 'false', 'false', '#96792a', 'false', '#1f1f1f', '#221f21', '#282a2d', 'false', '#6c6f71', 'false', '#474747', '#212223', '#867348', 'false', '#6b3d46', 'false', '#727373', 'false', 'false', '#8a836c', 'false', 'false', '#2a2f2c', '#283134', '#b83437', '#464849', '#2e6542', '#8f8c82', '#5c8d40', '#c48c96', '#272727', '#363636', '#363636', 'false', '#a2a3a4', '#eff1f3', '#40495a', 'false', '#8d9195', '#bbb9bc', 'false', '#872711', '#38393c', '#73654d', '#5c6061', '#353434', 'false', '#414141', 'false', '#5a5c5e', '#4a4949', 'false', 'false', '#a59990', '#c8bfa2', 'false', '#883413', '#803c2a', '#c3a25c', '#8b2826', '#8494a0', '#5b792e', '#28587e', '#915c13', 'false', 'false', '#cbb126', '#bababa', '#917557', '#aaaaaa', '#989898', '#737271', '#b5b7b9', '#e1c8c0', '#edc899', 'false', '#6b6d6f', 'false', 'false', 'false', '#8a727a', '#a39b7d', '#9f9a7d', '#bfbfbf', '#c5c5c5', '#acb5bf', '#8896a3', '#cebebd', 'false', 'false', '#8c6845', '#526074', '#546c7e', 'false', 'false', 'false', '#719694', 'false', '#494b4d', 'false', '#494c50', 'false', '#942b2b', '#bcae8d', '#5e4638', '#7f8890', '#7e8992', '#d0a17f', '#b29696', '#846e6e', '#bbbec2', '#b2a2a2', '#817e78', '#7f8171', '#aca396', '#821f21', '#883f40', '#626c7a', 'false', '#8c9db0', '#94a4b7', 'false', '#45433d', '#5e6365', 'false', '#938d5b', '#96915e', 'false', 'false', '#ae8818', '#383537', '#47494d', 'false', '#3c3e42', '#444547', 'false', 'false', 'false', 'false', '#8b5a45', 'false', 'false', '#918476', 'false', 'false', '#747478', 'false', '#4a575e', '#575e66', '#4e4e4e', 'false', 'false', '#87703b', '#c04a46', '#c83838', '#6a5034', '#869fa2', 'false', 'false', 'false', '#67747b', '#737471', '#87898e', 'false', '#970705', 'false', '#9d9d9d', '#d99735', '#3c3b3c', '#824d31', '#aa6b46', 'false', '#6287b0', '#784b33', '#c8c8c7', '#955343', '#727675', '#a8a8a8', '#bd9568', 'false', '#d7c6b9', 'false', '#846f40', 'false', '#a9a8a0', '#2b6170', '#57b28b', '#cfdce5', 'false', '#b9ab21', 'false', '#505255', 'false', 'false', '#737370', '#a57d1a', '#4b4b46', '#c8c2b9'];
