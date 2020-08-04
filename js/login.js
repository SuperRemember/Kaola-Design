/*登录页面顶部轮播图广告JavaScript代码段*/
var items =document.getElementsByClassName("item");		//获取class为item的标签元素（数组）

var index =0;

var time = 0;

var goNext = function(){
	if(index<1){
		index ++;
	}else{
		index = 0;
	}
	goIndex();
}

var goIndex = function(){
    clearActive();
	items[index].className = "item active";				//选择当前第index个的item的class变为item active
}

var clearActive = function(){
	for(var i=0;i<items.length;i++){
		items[i].className = "item";					//使全部class为item的标签元素的class变为item
	}
}

setInterval(function(){									//setinterval会不停被调用，每4秒就会执行goNext()函数，然后将time置零
	time++;
	if(time == 20){
		goNext();
		time = 0;
	}
},100);

/*登录页面中部表单验证JavaScript代码段*/
$(function(){
	/*文本框和密码框获取和失去焦点时的样式改变*/
	$('#userName').focus(function(){
		$(this).parent().css({outline:'1px solid #4aafe9'});
		$('.user i').show();
	})
			
	$('#userName').blur(function(){
		$(this).parent().css({outline:'medium'}); 				//失去鼠标焦点时去除蓝色边框
		$('.user i').hide();
	})
	$('#password').focus(function(){
		$(this).parent().css({outline:'1px solid #4aafe9'});
				$('.password i').show();
	})
	
	$('#password').blur(function(){
		$(this).parent().css({outline:'medium'});				//失去鼠标焦点时去除蓝色边框
		$('.password i').hide();
	})
			
	/*点击图标使文本框和密码框内容重置*/
	$(".user i").click(function(){
		$("#userName").val(" ");		
	})
	$('.password i').click(function(){
		$('#password').val('');
	})	
			
	/*“两周内自动登录”选择打钩*/
	var a=1;
	$(".checkBox").click(function(){
		$(".checkBox:hidden")
		if(a){
			$('.checkBox img').show();
			a=0;
		}else {
			$('.checkBox img').hide();
			a=1;
		}
	})
	/*按钮点击验证用户和密码*/
	$('.btn').click(function(){
			var uname = $('#userName').val();					//获取用户名的值
			var pass=$('#password').val();						//获取密码框的值
			if(uname=='') {										//当用户名的值为空
				$('#error').text('用户名不能为空')				//提示消息
				$('#error').show();								//提示内容显示
				return;
			}
			else if(pass=='') {									//当用户名的值为空
				$('#error').text('密码不能为空')					//提示消息
				$('#error').show();								//提示内容显示
				return;
			}else{
				$('#error').hide();								//提示内容隐藏
				window.open("index.html"+"?"+uname)				//携带用户名跳转到index.html页面
			}
	})
})


