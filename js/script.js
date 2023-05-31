var navStack = [];
		
$(document).ready(function(){
    $('.page.home').addClass('current');
    $('.page').each(function(i){
        if($(this).attr('id')==null) $(this).attr('id','page'+Math.floor(Math.random()*10000));
    });
    $('a').each(function(i){
        var link = $(this).attr('href');
        if(link.substr(0,1)=='#' && link.length>1){
            link = link.substr(1,link.length-1);
            if($('#'+link+'.page').length){
                $(this).attr('href','#');
                $(this).click(function(){ navTo(link); return false; });
            }
        }
    });
});

function navTo(id){
    if($('#'+id+'.page').length){
        navStack.push($('.page.current').attr('id'));
        $('.page.current').css('transform','translateX(-50%)');
        $('#'+id+'.page').css('transform','translateX(100%)').addClass('new');
        setTimeout(function(){ $('#'+id+'.page').css('transform','translateX(0px)'); },10);
        setTimeout(function(){
            $('.page.current').removeClass('current');
            $('#'+id+'.page').addClass('current').removeClass('new');
			var onload = $('#'+id+'.page').data('onload');
			if(onload!='') eval(onload);
        },200);
    }
}

function navBack(){
    var id = navStack.pop();
    $('.page.current').addClass('new').removeClass('current').css('transform','translateX(100%)');
    $('#'+id+'.page').css('transform','translateX(-50%)').addClass('current');
    setTimeout(function(){ $('#'+id+'.page').css('transform','translateX(0px)'); },10);
    setTimeout(function(){
        $('.page.new').removeClass('new');
		var onload = $('#'+id+'.page').data('onload');
		if(onload!='') eval(onload);
    },200);
}