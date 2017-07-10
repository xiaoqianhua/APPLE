//轮播
$(function() {
	var pic = $('.picture li');
	var scroll = $('.scroll li');
	var i = 0;

	function autoPlay() {
		scroll.eq(i).find('p').animate({ width: '100%' }, 2000, function() {
			scroll.find('p').css('width', '0');
			i++;
			if(i > 2) {
				i = 0;
			}
		});
		pic.eq(i).fadeIn(100).siblings().fadeOut(100);
	}
	
	setInterval(function() {
		autoPlay();
	}, 2000);
	autoPlay();
});


// 选项卡1
function dianji(num) {

	for(i = 1; i <= 7; i++) {
	var selfs = 'selfs' + i;
	var id = 'id' + i;
	document.getElementById(selfs).className = '';
	document.getElementById(id).style.display = 'none';
		}
	var slef = 'selfs' + num;
//  alert(slef); 
	var ids = 'id' + num;
	document.getElementById(slef).className = 'active';
	document.getElementById(ids).style.display = 'block';
	}


//图文解析2
$(function () {
    $('.ulist2 li').click(function () {

        var i = $(this).index();
        $('.ulist2 li').attr('class', '');
        $(this).attr('class', 'active');
        $('.tables2').find('.thumbs').css('display', 'none');
        $('.tables2').find('.thumbs').eq(i).css('display', 'block');
    });
});
