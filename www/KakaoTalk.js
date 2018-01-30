
var KakaoTalk = function(){};

KakaoTalk.prototype.login = function (successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "KakaoTalk", "login", []);
};
	
KakaoTalk.prototype.logout = function (successCallback, errorCallback) {
	cordova.exec(successCallback, errorCallback, 'KakaoTalk', 'logout', []);
};

KakaoTalk.prototype.getAccessToken = function (successCallback, errorCallback) {
	cordova.exec(successCallback, errorCallback, 'KakaoTalk', 'getAccessToken', []);
};

KakaoTalk.prototype.share = function(options, successCallback, errorCallback) {

	for(var options_key in options){
		if(typeof options[options_key] === 'object'){
			for(var key in options[options_key]){
				options[options_key][key] = options[options_key][key] || '';
			};
		}else{
			options[options_key] = options[options_key] || '';
		}
	};
	cordova.exec(successCallback, errorCallback, "KakaoTalk", "share", [options]);
};


KakaoTalk.install = function () {
  
	window.KakaoTalk = new KakaoTalk();
	return window.KakaoTalk;
};

cordova.addConstructor(KakaoTalk.install);
  
