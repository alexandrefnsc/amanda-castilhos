//Meu código de JQuery Pessoal
$(document).ready(function(){
	
//--------------------TUDO REFERENTE A FUNCAO MENU-----------------------//
	$("#listaMenu img").mouseover(function(){
		$(this).animate({
			'marginTop':'-85px'
		},300)
	});
	
	$("#listaMenu img").mouseout(function(){
		$(this).animate({
			'marginTop':'0px'
		},300)
	});
	
//--------------------------------------------------TUDO REFERENTE AO FAUX-MENU-----//
	$(window).scroll(function(){
		if($(this).scrollTop() > 710){
			$('#fauxMenu').fadeIn("slow");
		} else{
			$('#fauxMenu').fadeOut("slow");
		}
		return false;
   });
	
//--------------------------------------------------TUDO REFERENTE AO MENU CLICK-----//
	$(".home").click(function(){
   		 $('body,html').animate({scrollTop: $("header").offset().top}, "slow");
   		 return false;
   });
	
	$(".sobre").click(function(){
   		 $('body,html').animate({scrollTop: $("#area02").offset().top}, "slow");
   		 return false;
   });
   
   $(".solucoes").click(function(){
   		 $('body,html').animate({scrollTop: $("#area03").offset().top}, "slow");
   		 return false;
   });
   
   
   $(".beneficios").click(function(){
   		 $('body,html').animate({scrollTop: $("#area04").offset().top}, "slow");
   		 return false;
   });


   $(".parceiros").click(function(){
   		 $('body,html').animate({scrollTop: $("#parceiros").offset().top}, "slow");
   		 return false;
   });
   
   $(".clientes").click(function(){
   		 $('body,html').animate({scrollTop: $("#clientes").offset().top}, "slow");
   		 return false;
   });
   
   
//---------------- TUDO REFERENTE A AREA 01 -------------//
	$("#textoScroll h1").css({
			'opacity':0,
			'margin-left': '-380px'
	});
	
	$("#textoScroll h2").css({
			'opacity':0,
			'margin-right': '-380px'
	});
	
		var controller = new ScrollMagic();
		
		//SCENE 01 ----------
		var tween = TweenMax.to("#textoScroll h1", 0.8, {opacity: 1, marginLeft: 0, ease: Power1.easeOut});	
		
		var scene = new ScrollScene({triggerElement: ".alvo01"})
							.setTween(tween)
							.addTo(controller);
							
		//SCENE 02 ----------
		var tween_02 = TweenMax.to("#textoScroll h2", 0.8, {opacity: 1, marginRight: 0, ease: Power1.easeOut});	
		
		var scene_02 = new ScrollScene({triggerElement: ".alvo01"})
							.setTween(tween_02)
							.addTo(controller);
	
	
	
//--------------------------------------------------TUDO REFERENTE A AREA 02---//
	
	$("#iconSobre").css({
		'opacity': 0
	});
	
	$("#textoSobre").css({
		'opacity': 0
	});
	
	$("#sobre01").css({
		'opacity': 0
	});
	
	//SCENE 01 ------------
	var tween = TweenMax.to("#iconSobre", 0.8, {opacity: 1, ease: Power1.easeOut});	
		
	var scene = new ScrollScene({triggerElement: "#alvo02"})
						.setTween(tween)
						.addTo(controller);
						
	//SCENE 02 ------------
	var tween = TweenMax.to("#textoSobre", 0.8, {opacity: 1, delay: 0.2, ease: Power1.easeOut});	
		
	var scene = new ScrollScene({triggerElement: "#alvo02"})
						.setTween(tween)
						.addTo(controller);
						
	//SCENE 03 ------------
	var tween = TweenMax.to("#sobre01", 0.8, {opacity: 1, delay: 0.4, ease: Power1.easeOut});	
		
	var scene = new ScrollScene({triggerElement: "#alvo02"})
						.setTween(tween)
						.addTo(controller);
						
	// CUSTOM SCROLL --------------
	$("#about").mCustomScrollbar({
		theme:"dark-thin",
		mouseWheel: true,
		autoHideScrollbar:true
	});
	
	//CIRCLE CLICK ----------
		
	$("#circle02").click(function(){
   		 $('body,html').animate({scrollTop: $("#area02").offset().top}, "slow");
   		 return false;
   });
   
//--------------------------------------------------TUDO REFERENTE A AREA 03---//
	$("#iconSolucoes").css({
		'opacity': 0
	});
	
	$("#textoSolucoes").css({
		'opacity': 0
	});
	
	$("#solucoes01").css({
		'opacity': 0
	});
	
	//SCENE 01 ------------
	var tween = TweenMax.to("#iconSolucoes", 0.8, {opacity: 1, ease: Power1.easeOut});	
		
	var scene = new ScrollScene({triggerElement: "#alvo03"})
						.setTween(tween)
						.addTo(controller);
						
	//SCENE 02 ------------
	var tween = TweenMax.to("#textoSolucoes", 0.8, {opacity: 1, delay: 0.2, ease: Power1.easeOut});	
		
	var scene = new ScrollScene({triggerElement: "#alvo03"})
						.setTween(tween)
						.addTo(controller);
						
	//SCENE 03 ------------
	var tween = TweenMax.to("#solucoes01", 0.8, {opacity: 1, delay: 0.4, ease: Power1.easeOut});	
		
	var scene = new ScrollScene({triggerElement: "#alvo03"})
						.setTween(tween)
						.addTo(controller);

	//CIRCLE CLICK ----------
		
	$("#circle03").click(function(){
   		 $('body,html').animate({scrollTop: $("#area03").offset().top}, "slow");
   		 return false;
   });
   
   // HOVER SOLUCOES CONTENT ----------
   $(".solucoes_content")
   
//--------------------------------------------------TUDO REFERENTE A DIV PARA SUA EMPRESA---//
	$('.areaEmpresa').hover(function(){
		$("p",this).slideToggle();
	});
	
//--------------------------------------------------TUDO REFERENTE A DIV BENEFICIOS---//
//---CONTROLE ESQUERDA
	$('#controleEsq').css('cursor','pointer');

	$('#controleEsq').click(function(){		
		if($('#contentBeneficios').css('right')<='0px'){
			//alert('DEU!!!');
			$('#contentBeneficios').animate({
				right: '0px'
			}, 300);
			
			$('#controleEsq').css({
				'cursor':'default',
				'opacity':0.5
			});		
		}else{
			$('#controleDir').css({
				'cursor':'pointer',
				'opacity':1
			});
			$('#contentBeneficios').animate({
				right: '-=400px'
			}, 400);
		}
		
	});

//---CONTROLE DIREITA	
	$('#controleDir').css('cursor','pointer');

	$('#controleDir').click(function(){		
		if($('#contentBeneficios').css('right')=='4000px'){
			//alert('DEU AQUE!!!');
			$('#controleDir').css({
				'cursor':'default',
				'opacity':0.5
			});
			
		}else{
			$('#controleEsq').css({
				'cursor':'pointer',
				'opacity':1
			});
			
			$('#contentBeneficios').animate({
				right: '+=400px'
			}, 400);
		}
		
	});
	
//--------------------------------------------------TUDO REFERENTE A DIV PARCEIROS---//
	$('.logoParceiros').mouseenter(function(){
		$(this).animate({
			opacity:1
		}, 400);
	});
	
	$('.logoParceiros').mouseleave(function(){
		$(this).animate({
			opacity:0.5
		}, 400);
	});
	
//--------------------------------------------------TUDO REFERENTE A DIV CLIENTES---//
	loopDepoimentos = function(){
		if($('#contentClientes').css('right')=='1440px'){
			$('#contentClientes').animate({
				right:"0px"
			}, 700, loopDepoimentos).delay(10000);
		} else{
			$('#contentClientes').animate({
				right:"+=720px"
			}, 700, loopDepoimentos).delay(10000);
		};
	};
//-----CONTROLE DIREITA
	$('#contentClientes').ready(function(){
		loopDepoimentos();
		
		$('#clientesDir').click(function(){
			$('#contentClientes').delay(1000).stop(true);
			$('#contentClientes').animate({
				right: "+=720px"
			}, 700, loopDepoimentos).delay(10000);
			
			setTimeout(function(){
				loopDepoimentos();
			}, 10000);
		});
//-----CONTROLE ESQUERDA
		$('#clientesEsq').click(function(){
			$('#contentClientes').delay(1000).stop(true);
			$('#contentClientes').animate({
				right: "-=720px"
			}, 700);
			
			setTimeout(function(){
				loopDepoimentos();
			}, 10000);
		});
		
	});
	
	






});