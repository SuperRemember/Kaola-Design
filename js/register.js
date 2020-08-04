$(function() {
		//选择邮箱地址功能
		$('#select').click(function() {					//邮箱后缀点击触发函数
			$('.select_main').toggle();					//出现下拉列表
			$('.select_main li').hover(function() {		//鼠标悬浮在下拉列表触发函数
				$(this).css({							//该li颜色改变
					background: '#70a8e4'
				})
				$(this).click(function() {				//鼠标点击下拉列表其中的li
					var txt = $(this).text();			//获取当前li中的内容
					console.log(txt);					//控制台打印被选中的li内容
					$('#select>b').text(txt);			//设置id为select下的b标签的内容变为txt的内容
					$('.select_main').hide();			//下拉列表隐藏
				})
			}, function() {
				$(this).css({
					background: '#fff'					//重置被选择的li的颜色
				})
			})
		})
		
		$('#email').focus(function() {					//邮箱文本框获得鼠标焦点时触发函数，相应模块隐藏，部分模块显示
			$('.tip').hide();
			$('#errorEmail').hide();
			$('#rightEmail').hide();
			$('.advise').hide();
			$('#tipEmail').show();
		})
		$('#passWord').focus(function() {				//密码输入框获得鼠标焦点时触发函数，相应模块隐藏，部分模块显示
			$('.tip').hide();
			$('#errorPass').hide();
			$('#rightPass').hide();
			$('#tipPass').show();
			$('.advise').show();
		})
		$('#confirm').focus(function() {				//密码确认框获得鼠标焦点时触发函数，相应模块隐藏，部分模块显示
			$('.tip').hide();
			$('#errorConfirm').hide();
			$('#rightConfirm').hide();
			$('.advise').hide();
			$('#tipConfirm').show();
		})
		$('#check').focus(function() {					//验证码输入框获得鼠标焦点时触发函数，相应模块隐藏，部分模块显示
			$('.tip').hide();
			$('#errorCheck').hide();
			$('#rightCheck').hide();
			$('.advise').hide();
			$('#tipCheck').show();
		})
			
		$('#email').blur(function() {										//邮箱文本框失去鼠标焦点时触发函数
			$('#tipEmail').hide();											//隐藏该模块
			var user = $(this).val();										//获取邮箱的值
			var userReg = /^[a-zA-Z][a-zA-Z0-9_]{5,18}$/;					//设置书写的规则，6到18个字符，包括字母、数字和下划线，以字母开头，字母或数字结尾
			if (user == '') {												//若获取的邮箱文本框的值为空
				$('#errorEmail span').html('请输入或选择你的新邮件地址。');	//提示消息写入
				$('#errorEmail').show();									//提示消息显示
			} else if (!userReg.test(user)) {								//将获取的值和userReg进行对比
				$('#errorEmail span').html('只允许6到18个字符。');			//提示信息写入
				$('#errorEmail').show();									//提示信息显示
			} else {														
				$('#rightEmail').show();									//提示输入正确
			}
		})
		$('#passWord').blur(function() {									//密码输入框失去鼠标焦点时触发函数								
			$('#tipPass').hide();											//隐藏该模块
			var pass = $(this).val();										//获取密码框的值
			var passReg = /^[a-zA-Z0-9$._/@#%<>]{6,16}$/;					//设置书写的规则，6到16个字符，区分大小写
			//实现密码强度验证
			var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g"); //从一行开头到一行结束匹配字符串必须要有大写字母、小写字母、数字0-9、大于8位  "g"为全局搜索
			var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
			var enoughRegex = new RegExp("(?=.{6,}).*", "g"); //至少6位
			if (pass == '') {												//若密码框为空
				$('#errorPass span').html('请设置你的登录密码。');			//提示信息写入
				$('#errorPass').show();										//提示信息显示
			} else if (!passReg.test(pass)) {								//输入不合规
				$('#errorPass span').html('请输入6到16个字符的密码。');		//提示信息写入
				$('#errorPass').show();										//提示信息显示
			} else if(strongRegex.test(pass)){								
				$('#rightPass span').html('强：请牢记您的密码');
				$('#rightPass b').css({background:"url(img/icon.png) 1px -110px no-repeat"});
				$('#rightPass').show();
			}else if(mediumRegex.test(pass)){
				$('#rightPass span').html('中强：试试字母、数字、符号混搭');
				$('#rightPass b').css({background:"url(img/icon.png) 1px -100px no-repeat"});
				$('#rightPass').show();
			}else if(enoughRegex.test(pass)){
				$('#rightPass span').html('弱：试试字母、数字、符号混搭');
				$('#rightPass b').css({background:"url(img/icon.png) 1px -90px no-repeat"});
				$('#rightPass').show();
			}
		})
		$('#confirm').blur(function() {										//密码确认框失去鼠标焦点时触发函数			
				$('#tipConfirm').hide();									//隐藏该模块
				var pass = $('#passWord').val();							//获取密码框的值
				var pass2 = $(this).val();									//获取确认密码框的值
				if (pass2 == '') {											//若为空值
					$('#tipConfirm').show();								//该模块显示
				} else if (pass != pass2) {									//两次密码不同
					$('#errorConfirm span').html('两次输入的密码不一致。');	
					$('#errorConfirm').show();
				} else {
					$('#rightConfirm').show();								//提示输入正确
				}
			})
		//验证码相关
		var yzmI = 0;
		$('#refresh,#yzm').click(function() {								//当验证图片获取刷新按钮被点击时触发
			yzmI = parseInt(Math.random() * 10);							//生成一个0~9的数
			$('#yzm').attr('src', "img/yzm" + yzmI + ".jpg")				//更换对应验证图片
		})
		var checkArr = ["ukn5st", "4tbpx5", "sn5ddg", "yqmdmd", '4tbpx5', "u66xnf", "bnwkw7", "merdqd", "obvccd", "d4782e"];		//验证码数组
		$('#check').blur(function() {										//验证码输入框失去鼠标焦点时触发
			var val = $(this).val().toLowerCase();							//获取验证码输入框的值并全部转换为小写
			$('#tipCheck').hide();											//该模块隐藏
			if (val.length == 6) {											//若验证码长度为6
				if (val == checkArr[yzmI]) {								//当验证码的值与checkArr中对应的值相同时触发
					$('#rightCheck').show();								//该模块显示
				} else {		
					$('#errorCheck span').html('请输入正确的验证码');			
					$('#errorCheck').show();
					$('#rightCheck').hide();
				}
			} else {
				$('#errorCheck span').html('请输入6位的验证码');				//若不够6位时触发
				$('#errorCheck').show()
			}
		})
		var c=1;
		var s=document.getElementsByClassName("trueE");						//获取所有的class名为trueE的元素标签
		$('#register').click(function(){
			$('#email,#passWord,#confirm,#check').trigger('blur');			//触发所有的blur事件
			if($('.trueE').is(':hidden')){									//如果其中一个trueE是未被显示的则点击按钮不会跳转页面
				return false;
			}else if(c==0){
				return false;
			}else{
				window.location='login.html';								//全部trueE显示才能跳转到login.html页面
			}
		})
		$('#checked').click(function(e) {									//复选框被点击时触发函数
			if ($('#checked').is(':checked')) {								//若是已被选中
				c=1;
				$('#register').css({										//注册按钮变为蓝色
					background: '#69b3f2',
					color: '#fff',
				})
			} else {														//若是未被选中
				c=0;
				$('#register').css({										//注册按钮变为灰色
					background: '#eeeeee',
					color: '#717171',
				})
				$('#register').attr('type', 'button');
				}
		})
})