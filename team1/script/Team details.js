//加减
(function(){

		var y=1;
	
		$(".add1").click(function(){
			y++;
			$(".num1").text(y);
			
		})
		
			$(".sub1").click(function(){
				if(y>1){
					y--;
					$(".num1").text(y);
				}
				

			})
		})();
(function(){


			var p=0;
		$(".add2").click(function(){
			p++;
			$(".num2").text(p);
			
		})
		
			$(".sub2").click(function(){
				
				if(p>0){
					p--;
					$(".num2").text(p);
				}
				

			})
		})();
		//加减
		 // 图片轮播
(function(){


    	var m=0;
    	$(".btn-left").click(function(){
    		m++;
    		var mlf=m*-110;
    		$(".spicul").animate({marginLeft:mlf

    		},500);
    		m = m == 4 ? -1 : m;
    		
    	})
    	
	// if(m>0){

	
    	
    	$(".btn-right").click(function(){
    	
    		var mlr=(m*110)/m-110;
    		
    		$(".spicul").animate({marginLeft:mlr

    		},500);
    	})
	// }
})();
//图片轮播
//定时轮播

		var n = 0;
		function fun(){

			n++;
			var marLeft = n * -500;
			$(".picul").animate({
				marginLeft:marLeft
			},500);
			//三目运算符，条件运算符
			n = n == 5? -1 : n;
		};
//定时轮播	

//点击变色
(function(){


		$(".sc").click(function(){
			var src=$(".im").attr("src");
			var src1="../images/images-z/033.png";
			
				$(".im").attr("src",src1);
			
			
		})	

})();
//点击变色		
//以下日历
		$(document).ready(function() {

			$('#calendar').fullCalendar({
				// defaultDate: '2016-04-12',
				editable: true,
				eventLimit: true,
				header: {
					left: 'prev',
					center: 'title',
					right: 'next,',
				},
				events: [
				{
					title: 'Repea',
					start: '2016-04-16T16:00:00'
				},
				{
					title: 'Confe',
					start: '2016-04-11',
					// end: '2016-04-13'
				},
				{
					title: 'Birthday',
					start: '2016-04-20T07:00:00'
				},
				{
					title: '活动结束',
					start: '2016-04-28'
				}
			],
				dayClick: function() {
	        // alert('a day has been clicked!');
	        location.href="online-pay.html"
		    },
			// 	// buttonIcons:false,
			// 	//today,month,agendaWeek,agendaDay
			// 	// weekends: false,隐藏周末
			});
			var myEvent = ['2016-04-23','2016-04-26'];
			// console.log(myEvent[0]);
			for (var i = 0; i < myEvent.length; i++) {
				var mySelector = '.fc-widget-content.fc-future' + '[data-date="' + myEvent[i] + '"]';
				$(mySelector).css('position', 'relative').append('<img src="images/jian-logo.png" class="jian-logo">').append('<span class="time-atonce">实时</span>');
			}
		
			// console.log($('.fc-today'));这个显示today的问题解决了，在5188行，搜索‘自己修改’
			function setWeek() {    //修改week显示函数
				$('.fc-day-header.fc-sun').text('日');
				$('.fc-day-header.fc-mon').text('一');
				$('.fc-day-header.fc-tue').text('二');
				$('.fc-day-header.fc-wed').text('三');
				$('.fc-day-header.fc-thu').text('四');
				$('.fc-day-header.fc-fri').text('五');
				$('.fc-day-header.fc-sat').text('六');
			}
			setWeek();
			$('.fc-prev-button,.fc-next-button').click(function() {
				setWeek();
			});

			function setTitle() {  //修改标题显示问题
				var myMonthName = ['一月份','二月份','三月份','四月份','五月份','六月份','七月份','八月份','九月份','十月份','十一月份','十二月份'];
				var myMonth = new Date();
				var myMonthNum = Number(myMonth.getMonth());
				var myYearNum = Number(myMonth.getFullYear());
				// console.log(myYearNum);
				$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
				$('.fc-prev-button').click(function() {
					if (myMonthNum > 0) {
						myMonthNum --;
						$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
					} else {
						myMonthNum = 11;
						myYearNum --;
						$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
					}
				});
				$('.fc-next-button').click(function() {
					if (myMonthNum > 10) {
						myMonthNum = 0;
						myYearNum ++;
						$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
					} else {
						myMonthNum ++;
						$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
					}
				});
			}
			setTitle();

		});	
//以上日历
(function(){


	var j=0;
	$(".con-left").click(function(){
		j++;
		var lef=j*-225;
		$(".c-ul").animate({marginLeft:lef},1000);
		j = j == 4 ? -1 : j;
		
	});
	$(".con-right").click(function(){
    	
   	 var mlr=(j*225)/j-225;
    			
    	$(".c-ul").animate({marginLeft:mlr

    	},1000);
    	
 	})
})();

var t=0;
	function fyn(){

			t++;
			var marLeft = t* -225;
			$(".c-ul").animate({
				marginLeft:marLeft
			},500);
			//三目运算符，条件运算符
			t = t == 4? -1 : t;
		};
	
var t= setInterval(fyn,3000);
			
// 全部评价

(function(){
	
	
	$(".dli").click(function(){
    		var index=$(this).index();
    		$(".sv-box").eq(index-1).css("display","block").siblings().css("display","none");
    	

	});

	$(".con10-p").click(function(){
		$(".sv-box").css("display","block");
	})

})();
(function(){
	$(".b-qd").click(function(){
		var tex=$(".in").val();
		$(".sv-box").eq(tex-1).css("display","block").siblings().css("display","none");
		
	})
})();
(function(){
	var a=0;
	$(".btn2").click(function(){
		a++;
		
			
			$(".sv-box").eq(a).css("display","block").siblings().css("display","none");
		a=a==4?-1:a;
		
	})
	
	$(".btn1").click(function(){
		a++;
		
			
			$(".sv-box").eq(a).css("display","block").siblings().css("display","none");
		a=a==4?-1:a;
		
	})

})();