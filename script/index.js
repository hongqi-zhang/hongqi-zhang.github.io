(function(){
	var mySwiper = new Swiper('.swiper-container',{
		mousewheelControl : true,
		direction:'vertical',
		mousewheelForceToAxis : true,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} ,


	})
	var mySwiper = new Swiper('.swiper-container1',{
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		loop:true,
		autoplay: 3000,
	})
	$(".bx1 h2").click(function(){
		$(".bx1 ul").slideToggle(1000);
	})
	$(".bx2 h2").click(function(){
		$(".bx2 ul").slideToggle(1000);
	})
	$(".bx3 h2").click(function(){
		$(".bx3 ul").slideToggle(1000);
	})
	$(".bx4 h2").click(function(){
		$(".bx4 ul").slideToggle(1000);
	})


})()