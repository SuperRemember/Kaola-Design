var money=["￥4729.00","￥3669.00","￥3209.00","￥3089.00","￥2889.00","￥3069.00","￥3089.00","￥2889.00","￥3829.00"],   //用于点击尺码更换价格的数组
	discountlist=["9.5折","7.4折","6.5折","6.2折","5.8折","6.2折","6.2折","5.8折","7.7折"], 								//用于点击尺码更换折扣的数组
	detailprice=document.getElementById("detailprice"),
	discount=document.getElementById("discount"),
	sizelist=document.querySelector(".sizelist"),
	d=sizelist.getElementsByTagName("li");

//点击码数改变价格与折扣，显示预售提醒与剩余数量
for(var i=0; i<d.length; i++){
	d[i].index = i; 										// 第i个li元素添加一个index属性，赋值为i
    d[i].addEventListener("mousedown",function() {			//当d即某个尺码被点击时设置监听事件
    detailprice.textContent=money[this.index],       		//价格就为money数组中的第index个值
   	discount.textContent=discountlist[this.index],			//折扣就为discountlist数组中的第index个值
    $(".sizelistinside").eq($(this).index()).css("border-color","#d41c44").siblings(".sizelistinside").css("border-color","#ccc")
    //尺码被点击时，相应的边框会变成红色，其他同class名的元素的边框则变为灰色
    $(".skupresale").show()									//class名为skupresale的元素显示				
    $(".remain").show()										//class名为remain的元素显示	 							
    })														// 为第i个li元素添加一个click事件，当元素被点击时触发相应效果
}
	
$(function(){
	/*颜色板块点击选择与提示*/
	var a=1;
	$(".imgbox img").click(function(){
		if(a){
			$('.imgbox img').css("border-color","#d41c44");
			$(".selectedImgDesc").show();
			a=0;
		}else {
			$('.imgbox img').css("border-color","white");
			$(".selectedImgDesc").hide();
			a=1;
		}
	})
		
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
	})
})





//商品放大镜的效果
var list=document.querySelector(".list"),
	imgs=list.querySelectorAll("img"),
	img=document.querySelector(".pic img")
	pic=document.querySelector(".itemarea .pic"),
	cover=document.querySelector(".cover"),
	details=document.querySelector(".details");
			
list.addEventListener("mousemove",function(e){
	console.log(e)
	if(e.target.tagName == "IMG"){
		img.src=e.target.src;
		details.style.backgroundImage="url("+e.target.src+")";
		imgs.forEach(function(item){
			item.className="";
		})
		e.target.className="current"; 
	}
})
	
pic.addEventListener("mousemove",function(e){
	var x=e.clientX, 								//鼠标到左边屏幕距离
		y=e.clientY,								//鼠标到上边屏幕距离
		cx=pic.getBoundingClientRect().left,		//图片左边到左边屏幕的距离
		cy=pic.getBoundingClientRect().top,			//图片顶部到上边屏幕的距离
		tx=x-cx-100,
		ty=y-cy-100;
		/*console.log(e.clientX,e.clientY);*/
		console.log(tx)
		if(tx<0){
			tx=0;
		}
		if(ty<0){
			ty=0;
		}
		if(tx>200){
			tx=200;
		}
		if(ty>200){
			ty=200;
		}
	details.style.backgroundPosition=tx/200*100+'%'+ty/200*100+'%';  //放大倍数
	cover.style.left=tx+'px';						//设置名为cover的标签元素左边距
	cover.style.top=ty+'px';						//设置名为cover的标签元素上边距
})
	
	
	
	
//判断地址内容确定是否改变登录名
var str=window.location.href;					//获取网页地址
console.log(window.location.href);				//控制台打印地址
var q=str.indexOf("?")							//获取str中的"?",如果没有q为-1
var c=str.indexOf("_")							//获取str中的"_",如果没有c为-1
var tran=document.getElementById("tran")		//获取id为tran标签

if(q==-1){										//判断q的值是否为-1
	$("#name").html("登录");						//q==-1,id为name的值为"登录"
	$("#logout").hide();						//使id为logout的标签元素隐藏
}else if(c!=-1){								//判断c的值是否为-1
	$("#name").html("登录");						//c==58,id为name的值为"登录"
	$("#logout").hide();						//使id为logout的标签元素隐藏
}else {											//当q!=-1
	let list=str.split("?");					//以"?"为边界,将地址分开
	console.log(list);							//控制台打印list数组
	var b=list[1];								//获取list数组的第一个元素
	let d=b.split("#");							//以"#"为边界,将b分开
	var a=decodeURI(d[0]);						//创建变量a使其等于d[0]
	$("#name").html(a);							//jquery改变id为name的值为a的值,如果地址里用中文直接用list[1],会出现乱码
	tran.removeAttribute("href")				//id为tran删除里面的href元素
	$("#logout").show();						//使id为logout的标签元素显示
}


//设置跳转页面地址
function indexgo(){
	var str=window.location.href;				//获取网页地址
	var q=str.indexOf("?")						//获取str中的"?",如果没有q为-1
	let list=str.split("?");				    //以"?"为边界,将地址分开
	var a=decodeURI(list[1]);					//创建变量a使其等于e[0]
	if(q==-1){									//当q等于-1
		window.open("index.html")				//即没有用户登录的情况下不携带用户名跳转到index.html页面
	}else{										//当q不等于-1
		window.open("index.html"+"?"+a)			//携带当前地址中的用户名跳转到index.html
	}
}

//设置跳转购物车页面函数
function goshop(){
	var str=window.location.href;				//获取网页地址
	var q=str.indexOf("?")						//获取str中的"?",如果没有q为-1
	let list=str.split("?");					//以"?"为边界,将地址分开
	var a=decodeURI(list[1]);					//创建变量a使其等于list[1]		
	if(q==-1){									//当q为-1
		window.open("shop.html")				//不携带用户名跳转到shop.html页面
	}else{										//当q不等于-1
		window.open("shop.html"+"?"+a+"%"+g)	//携带用户名跳转到shop.html页面
	}
}

var g=0;
function toshopcar(){
	g=document.getElementsByClassName("numberbox2")[0].value;
	alert("已加入购物车")
}

