//判断地址内容确定是否改变登录名
var str=window.location.href;					//获取网页地址
console.log(window.location.href);				//控制台打印地址
var q=str.indexOf("?")							//获取str中的"?",如果没有q为-1
var c=str.indexOf("_")							//获取str中的"_",如果没有c为-1
var h=str.indexOf("#")
var w=str.indexOf("%")
var tran=document.getElementById("tran")		//获取id为tran标签
if(q==-1){										//判断q的值是否为-1
	$("#name").html("登录");						//q=-1,id为name的值为"登录"
	$("#logout").hide();						//使id为logout的标签元素隐藏
	$(".mygoods").hide();
	$(".m-total").hide();
	$(".nogoods1").show();
}else if(c!=-1){								//判断c的值是否为-1
	$("#name").html("登录");						//c不为-1,id为name的值为"登录"
	$("#logout").hide();						//使id为logout的标签元素隐藏
	$(".mygoods").hide();
	$(".m-total").hide();
	$(".nogoods1").show();
}else if(h!=-1){											//当q!=-1
	let list=str.split("?");					//以"?"为边界,将地址分开
	var b=list[1];								//获取list数组的第一个元素
	let d=b.split("#");							//以"#"为边界,将b分开
	var a=decodeURI(d[0]);						//创建变量a使其等于d[0]
	$("#name").html(a);							//jquery改变id为name的值为a的值,如果地址里用中文直接用list[1],会出现乱码
	tran.removeAttribute("href")				//id为tran删除里面的href元素
	$("#logout").show();						//使id为logout的标签元素显示
}else{
	let list=str.split("?");					//以"?"为边界,将地址分开
	var b=list[1];								//获取list数组的第一个元素
	let d=b.split("%");							//以"%"为边界,将b分开
	var a=decodeURI(d[0]);						//创建变量a使其等于d[0]
	$("#name").html(a);							//jquery改变id为name的值为a的值,如果地址里用中文直接用list[1],会出现乱码
	tran.removeAttribute("href")				//id为tran删除里面的href元素
	$("#logout").show();						//使id为logout的标签元素显示
}


//设置跳转页面地址
function indexgo(){
	var str=window.location.href;				//获取网页地址
	var q=str.indexOf("?")						//获取str中的"?",如果没有q为-1
	let list=str.split("?");				    //以"?"为边界,将地址分为两部分
	console.log(list[1])
	var a=decodeURI(list[0]);					//创建变量a使其等于list[1]
	if(q==-1){									//当q等于-1
		window.open("index.html")				//即没有用户登录的情况下不携带用户名跳转到index.html页面
	}else if(h!=-1){
		let h1=list[1].split("#")
		var h2=h1[0];
		console.log(h2)
		var a=decodeURI(h2);	
		window.open("index.html"+"?"+a)
	}else if(w!=-1){
		let h1=list[1].split("%")
		var h2=h1[0];
		console.log(h2)
		var a=decodeURI(h2);	
		window.open("index.html"+"?"+a)
	}
	else{										//当q不等于-1
		window.open("index.html"+"?"+a)			//携带当前地址中的用户名跳转到index.html
	}
	
}


var x=str.split("%");
console.log(x);
var u=parseInt(x[2])
console.log(u);
if(u==0){
	$(".mygoods").hide()
	$(".nogoods").show();
}else{
	$(".numberbox2").val(u)
	x1=$(".danjia a").text()
	x2=$(".numberbox2").val()
	x3=x1*x2
	console.log(x1,x2,x3)
	$(".price a").text(x3)
}

$(function(){
	/*减少按钮函数*/
	var numberbox2=document.getElementsByClassName("numberbox2")[0].value;
	$(".reduce").click(function(){
		numberbox2=parseInt(numberbox2)
		if(numberbox2==1){
			$(".numberbox2").val(numberbox2)
		}else{
			numberbox2--;
			$(".numberbox2").val(numberbox2)
		}
		x1=$(".danjia a").text()
		x2=$(".numberbox2").val()
		x3=x1*x2
		$(".price a").text(x3)
	})
	/*增加按钮函数*/
	$(".add").click(function(){
		numberbox2=parseInt(numberbox2)
		if(numberbox2==2){
			$(".numberbox2").val(numberbox2)
		}else{
			numberbox2++;
			$(".numberbox2").val(numberbox2)
		}
		x1=$(".danjia a").text()
		x2=$(".numberbox2").val()
		x3=x1*x2
		$(".price a").text(x3)
	})
})

function deletegoods(){
	$(".mygoods").hide();
	$(".nogoods").show();
}


$('.u-chk').click(function(e) {									//复选框被点击时触发函数
			if ($('#selectAll').is(':checked')) {					//若是已被选中
				x1=$(".numberbox2").val();
				x2=$(".price a").text();
				$("#mallCount").text(x1)
				$("#allPrice").text(x3)
				$(".itm1").text(20.00)
				$(".itm2").text(x3+36.89-20.00)
				$(".itm3").text("36.89")
			} else {												//若是未被选中
				$("#mallCount").text("0")
				$("#allPrice").text("0.00")
				$(".itm1").text("0.00")
				$(".itm2").text("0.00")
				$(".itm3").text("0.00")
			}
})

$('.opt').click(function(e) {	
		$(".mygoods").hide();
		$(".nogoods").show();
})