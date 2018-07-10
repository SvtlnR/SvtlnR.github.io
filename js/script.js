$(document).ready(function(){
	$(".hdr").fadeIn('slow', function(){});
	$("#shgi").click(function(){
		$("#favsh").hide('fast');
		$("#cont").hide('fast');
		$("#geninf").show('fast');
	})
	$("#shfsh").click(function(){
		$("#geninf").hide('fast');
		$("#cont").hide('fast');
		$("#favsh").show('fast');
	})
	$("#shcont").click(function(){
		$("#geninf").hide('fast');
		$("#favsh").hide('fast');
		$("#cont").show('fast');	
	})
	
	$("#sandwich").click(function(){
		$("nav ul").toggle('fast');
	})	
	$("footer").text(String.fromCharCode(0169)+ (new Date()).getFullYear());
	if(window.matchMedia("(max-width: 768px)").matches){
	$(window).on("orientationchange",function(){
  		if(window.orientation != 0)
  		{
    		$("nav ul").css({'display':'inline-block'});
  		}
  		else{
  			$("nav ul").css({'display':'none'});	
  		}
	})
	}
	if(window.matchMedia("(min-width: 768px)").matches){
	$(window).on("orientationchange",function(){
  		if(window.orientation != 0)
  		{
    		$("nav ul").css({'display':'inline-block'});
  		}
  		else{
  			$("nav ul").css({'display':'inline-block'});	
  		}
	})
	}
	
});
