/*首页轮播图js代码*/
var items =document.getElementsByClassName("item");				//获取class为item的标签元素（数组）

var points = document.getElementsByClassName("point");			//获取class为point的标签元素（数组）

var goPreBtn =document.getElementById("goPre");					//获取id为goPre的标签元素

var goNextBtn =document.getElementById("goNext");				//获取id为goNext的标签元素

var index =0;

var time = 0;

var goNext = function(){
	if(index<4){
		index ++;
	}else{
		index = 0;
	}
	goIndex();
}

var goPre = function(){
	if(index == 0){
		index = 4;
	}else{
		index --;
	}
	goIndex();
}

var goIndex = function(){
    clearActive();
    points[index].className = "point active";					//选择当前第index个的point的class变为point active
	items[index].className = "item active";						//选择当前第index个的item的class变为item active
}


var clearActive = function(){									
	for(var i=0;i<items.length;i++){
		items[i].className = "item";							//使全部class为item的标签元素的class变为item
	}
	for(var i=0;i<points.length;i++){
		points[i].className = "point";							//使全部class为point的标签元素的class变为point
	}
}

goNextBtn.addEventListener("click",function(){					//设置下一张按钮的时间监听函数中实现goNext()函数
	goNext();
})

goPreBtn.addEventListener("click",function(){					//设置上一张按钮的时间监听函数中实现goPre()函数
	goPre();
})

for (var i = 0;i < points.length;i++){
	points[i].addEventListener("click",function(){ 				//设置该圆点的时间监听函数
		index = this.getAttribute("data-index"); 				//获取该HTML标签中data-index的值并将其赋值给index
		goIndex(); 
		time = 0;
	})
}

setInterval(function(){											//setinterval会不停被调用，每4秒就会执行goNext()函数，然后将time置零
	time++;
	if(time == 20){
		goNext();
		time = 0;
	}
},200)



//判断地址内容确定是否改变登录名

var str=window.location.href;					//获取网页地址
console.log(window.location.href);				//控制台打印地址
var q=str.indexOf("?")							//获取str中的"?",如果没有q为-1
var c=str.indexOf("_")							//获取str中的"_",如果没有c为-1
var tran=document.getElementById("tran")		//获取id为tran标签
if(q==-1){										//判断q的值是否为-1
	$("#name").html("登录");						//q=-1,id为name的值为"登录"
	$("#logout").hide();						//使id为logout的标签元素隐藏
}else if(c!=-1){								//判断c的值是否为-1
	$("#name").html("登录");						//c不为-1,id为name的值为"登录"
	$("#logout").hide();						//使id为logout的标签元素隐藏
}else{											//当q!=-1
	let list=str.split("?");					//以"?"为边界,将地址分开
	var b=list[1];								//获取list数组的第一个元素
	let d=b.split("#");							//以"#"为边界,将b分开
	var a=decodeURI(d[0]);						//创建变量a使其等于d[0]
	$("#name").html(a);							//jquery改变id为name的值为a的值,如果地址里用中文直接用list[1],会出现乱码
	tran.removeAttribute("href")				//id为tran删除里面的href元素
	$("#logout").show();						//使id为logout的标签元素显示
}


//设置跳转商品详情页面函数
function change(){
	var str=window.location.href;				//获取网页地址
	var q=str.indexOf("?")						//获取str中的"?",如果没有q为-1
	let list=str.split("?");					//以"?"为边界,将地址分开
	var a=decodeURI(list[1]);					//创建变量a使其等于list[1]
	if(q==-1){									//当q为-1
		window.open("goodsdetails.html")		//不携带用户名跳转到goodsdetails.html页面
	}else{										//当q不为-1
		window.open("goodsdetails.html"+"?"+a)	//携带用户名跳转到goodsdetails.html页面
	}
}

//设置跳转购物车页面函数
var g=0;
function goshop(){
	var str=window.location.href;				//获取网页地址
	var q=str.indexOf("?")						//获取str中的"?",如果没有q为-1
	let list=str.split("?");					//以"?"为边界,将地址分开
	var a=decodeURI(list[1]);					//创建变量a使其等于list[1]		
	if(q==-1){									//当q为-1
		window.open("shop.html")				//不携带用户名跳转到shop.html页面
	}else{										//当q不为-1
		window.open("shop.html"+"?"+a+"%"+g)			//携带用户名跳转到shop.html页面
	}
}
