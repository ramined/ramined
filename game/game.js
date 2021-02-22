var isBlinking;
var n;
var timer;
var talking;
var marginT;
var marginL;
var zoom;
var zoom1;
var scale;
var blog;
var story2;
var category2;


function switchHtmlContent(id)
{
//	$("#content").load("game/pages/" + id + ".html"); 
}


function start() {
	switchHtmlContent("default");

	isBlinking = false;
	n = 0;
	timer = null;
	talking = false;
	marginT = -300;
	marginL = -465;
	blog = "";
	story2 = "";
	// Default feed:
	category = "http://web.archive.org/web/20131016194312/http://raminibar.com/category/games/feed";
	category2 = "games";

	function GEBI(tag)
	{ x = document.getElementById(tag)
		return x
	}
	
	// default content=
	function preventBehavior(e) {
		e.preventDefault(); 
	};

	//document.addEventListener("touchmove", preventBehavior, false);
	function showFeed(story) {

		var domain = "http://web.archive.org/web/20131016194312/http://www.raminibar.com/";
			if(window.location.href.toString().indexOf("www") == -1) { // no www
			domain = "http://web.archive.org/web/20131016194312/http://raminibar.com/";
		} 
		
		var html = '';
		GEBI("content2").innerHTML = 'loading...';

		// list rss post titles with jFeed
		}
			clearTimeout(timer);
			talk("ramineText","ramine", gamestrings.welcome, 0);
			talk("ramineText","ramine", gamestrings.welcome_click_around, 2000);
			talk("marioText","mario", gamestrings.welcome_from_mario, 4000);
			talk("spaceinvaderText","spaceinvader", gamestrings.welcome_from_spaceinvader, 6000);
		timer = setTimeout(function (){
					hideInactive();
				}, 8000); 
		
		// Door
		$("#door").click(function() {
			GEBI("door_open").style.visibility = "visible";
		});
		$("#door_open").click(function() {
			GEBI("door_open").style.visibility = "hidden";
		});
		$("#door").hover(function() {
			GEBI("text").innerHTML = gamestrings.use_door;
			GEBI("text").style.visibility = "visible";
		},
		function() {
			GEBI("text").style.visibility = "hidden";
		});
		function hideInactive() {
		GEBI("tetrisText").style.visibility = "hidden";
		GEBI("ramineText").style.visibility = "hidden";
		GEBI("spaceinvaderText").style.visibility = "hidden";
		GEBI("pacmanText").style.visibility = "hidden";
		GEBI("marioText").style.visibility = "hidden";
	  }
	  
	function animation(animated) {
		
		function speak1(speaking) {
			GEBI(animated).style.visibility = "hidden";
			GEBI(animated + "_speak").style.visibility = "visible";
		}
		function speak2(speaking) {
			GEBI(animated).style.visibility = "visible";
			GEBI(animated + "_speak").style.visibility = "hidden";

			if (speaking == "tetris") {	
				GEBI(animated).style.top = ((208 / 279) * ((screen.width - 20) * 0.45)) + "px";
			}
		}

			timers[7] = setTimeout(function (){	
						speak1(animated);
			}, (200));
			timers[8] = setTimeout(function (){	
						speak2(animated);	
			  }, (400));
			
			timers[9] = setTimeout(function (){	
						speak1(animated);
			}, (600));
			timers[10] = setTimeout(function (){	
						speak2(animated);
			  }, (800));
			
	}
	var timers=[]
	var iconSelected=false;

	function talk(speaker,animated,msg, delay) {
		  var timer = setTimeout(function (){
			hideInactive();
				GEBI(speaker).innerHTML = msg;
				GEBI(speaker).style.visibility = "visible";
				animation(animated);			
		  }, delay);
		  return timer
	}
	  
	// clear all text timers if another dialogue is running
	function clearTimers(){
  		     clearTimeout(timers[0]);
			 clearTimeout(timers[1]);
			 clearTimeout(timers[2]);
			 clearTimeout(timers[3]);
			 clearTimeout(timers[4]);
			 clearTimeout(timers[5]);
			 clearTimeout(timers[6]);
			 clearTimeout(timers[7]);
			 clearTimeout(timers[8]);
			 clearTimeout(timers[9]);
			 clearTimeout(timers[10]);
	}
	// Tetris (dialogue)
	$("#tetris").click(function() {
		switchHtmlContent("tetris");

	    if (iconSelected) {
		     clearTimers();
		}
	    iconSelected = true;

		timers[0] = talk("tetrisText","tetris", gamestrings.tetris_ted_talk, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_ask_tetris_about_ted_talk, 2000);
		timers[2] = talk("tetrisText","tetris", gamestrings.tetris_ted_talk_shy, 4000);
		timers[3] = talk("ramineText","ramine", gamestrings.ramine_ted_talk_nervous, 6000);
		timers[4] = setTimeout(function (){
			hideInactive();
			iconSelected = false;
		}, 8000); 
	});
	$("#tetris").hover(function() {
		GEBI("text").innerHTML = gamestrings.tetris_talk_to_Tetramino;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	
	// Ramine
	$("#ramine").click(function() {
		switchHtmlContent("ramine");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_stop_tickling, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_stop_tickling2, 2000);
		timers[2] = setTimeout(function (){
				hideInactive();
				iconSelected = false;
			}, 4000); 
	});
	$("#ramine").hover(function() {
		GEBI("text").innerHTML = gamestrings.tickle_ramine;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	// Space Invader
	$("#spaceinvader").click(function() {
		switchHtmlContent("spaceinvader");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("spaceinvaderText","spaceinvader", gamestrings.spaceinvader_invite_hackathon, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_hackathon_description, 2000);
		timers[2] = talk("ramineText","ramine", gamestrings.ramine_hackathon_approval, 4000);
		timers[3] =  setTimeout(function (){
				hideInactive();
				iconSelected = false;
			}, 6000); 
	});
	$("#spaceinvader").hover(function() {
		GEBI("text").innerHTML = gamestrings.talk_to_spaceinvader;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	
	// Pacman
	$("#pacman").click(function() {
		switchHtmlContent("pacman");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("pacmanText","pacman", gamestrings.pacman_ask_games, 0);
		timers[1] = talk("pacmanText","pacman", gamestrings.pacman_ask_indie_games, 1500);
		timers[2] = talk("pacmanText","pacman", gamestrings.pacman_ask_retro_games, 3000);
		timers[3] = talk("ramineText","ramine", gamestrings.ramine_ask_mod, 4500);
		timers[4] = talk("pacmanText","pacman", gamestrings.pacman_thanks, 6500);
    timers[5] =  setTimeout(function (){
				hideInactive();
				iconSelected = false;
    }, 8000); 
	});
	$("#pacman").hover(function() {
		GEBI("text").innerHTML = gamestrings.talk_to_pacman;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	// Mario
	$("#mario").click(function() {
		switchHtmlContent("mario");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("marioText","mario", gamestrings.mario_gaming_community, 0);
		timers[1] = talk("marioText","mario", gamestrings.mario_ask_tips, 2000);
		timers[2] = talk("ramineText","ramine", gamestrings.ramine_community_tips, 6000);
    timers[3] =  setTimeout(function (){
				hideInactive();
				iconSelected = false;
    }, 8000); 
	});
	$("#mario").hover(function() {
		GEBI("text").innerHTML = gamestrings.talk_to_mario;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	
  // SMALL ITEMS
	// Laptop
	$("#laptop").click(function() {
		switchHtmlContent("laptop");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("tetrisText","tetris", gamestrings.tetris_shh, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_not_disturb_tetramino, 1500);
		timers[2] = setTimeout(function (){
				hideInactive();
				iconSelected = false;
    }, 3500); 
	});
	$("#laptop").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_laptop;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	
	// Eiffel
	$("#eiffel").click(function() {
		switchHtmlContent("eiffel");
		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_lived_in_Paris, 0);
		timers[1] = talk("ramineText","ramine", 'and all I got was this Eiffel tower.', 2000);
		timers[2] = setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 4000); 
	});

	$("#eiffel").hover(function() {
		GEBI("text").innerHTML = gamestrings.ramine_eiffel_tower;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	// Note
	$("#note").click(function() {
		switchHtmlContent("note");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_writing_web, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_writing_list, 2000);
    	timers[2] =  setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 4000); 
	});
	$("#note").hover(function() {
		GEBI("text").innerHTML = 'Look at text note';
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	// Globe
	$("#globe").click(function() {
		switchHtmlContent("globe");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_trips, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_trips_list, 2000);
    	timers[2] =  setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 4000); 
	});
	$("#globe").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_globe;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	
	// MySites
	$("#mysites").click(function() {
		switchHtmlContent("mysites");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_my_sites, 0);
		timers[1] = talk("pacmanText","pacman", gamestrings.pacman_chrome_os_question, 2000);
		timers[2] = talk("tetrisText","tetris", gamestrings.tetris_cloud, 4000);
		timers[3] = talk("tetrisText","tetris", gamestrings.tetris_services, 6000);
		timers[3] = talk("marioText","mario", gamestrings.mario_monetize, 8000);
		timers[4] = talk("ramineText","ramine", gamestrings.ramine_mistake, 10000);
		timers[5] =  setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 12000); 
	});
	$("#mysites").hover(function() {
		GEBI("text").innerHTML = gamestrings.read_mysites_story;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});
	// Rovio
	$("#rovio").click(function() {
		switchHtmlContent("rovio");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_ceo_monocle, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_manager, 2000);
		timers[2] = setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 4000); 
	});
	$("#rovio").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_rovio_poster;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});

	// Startup sauna
	$("#sauna").click(function() {
		switchHtmlContent("sauna");
		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_startups_coach, 0);
    	timers[1] =  setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 2000); 
	});

	$("#sauna").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_startup_sauna_poster;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});

	// Hax poster
	$("#hack").click(function() {
		switchHtmlContent("hack");
		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_spaceinvader_hackathon_prep, 0);
    	timers[1] = setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 2000); 
	});

	$("#hack").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_hackathon_poster;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});

	// Rubik
	$("#rubik").click(function() {
		switchHtmlContent("rubik");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_olympic_sport, 0);
    	timers[1] = setTimeout(function (){
				hideInactive();
				iconSelected = false;
    	}, 2000); 
	});

	$("#rubik").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_rubik_cube;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});

	// NES
	$("#nes").click(function() {
		switchHtmlContent("nes");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_box, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_box_adventures, 2000);
		timers[2] =  setTimeout(function (){
				hideInactive();
				iconSelected = false;
    	}, 4000); 
	});
	$("#nes").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_nes;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});

	// Laptop2
	$("#slaptop").click(function() {
		switchHtmlContent("slaptop");

		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_observes_website, 0);
    	timers[1] = setTimeout(function (){
				hideInactive();
				iconSelected = false;
    	}, 2000); 
	});

	$("#slaptop").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_computer;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});

	// Sign
	$("#sign").click(function() {
		switchHtmlContent("sign");
		if (iconSelected) {
			clearTimers();
		}
		iconSelected = true;
		timers[0] = talk("ramineText","ramine", gamestrings.ramine_home, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.ramine_nickname, 2000);
		timers[3] =  setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 6000); 
	});

	$("#sign").hover(function() {
		GEBI("text").innerHTML = gamestrings.look_at_sign;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});

	// Credits
	$("#credits").hover(function() {
		GEBI("text").innerHTML = gamestrings.read_credits;
		GEBI("text").style.visibility = "visible";
	},
	function() {
		GEBI("text").style.visibility = "hidden" ;
	});

	$("#credits").click(function() {
		switchHtmlContent("credits");

		clearTimeout(timer);
		timers[0] = talk("ramineText","ramine", gamestrings.credits_graphics, 0);
		timers[1] = talk("ramineText","ramine", gamestrings.credits_code, 2000);
		timers[2] = talk("ramineText","ramine", gamestrings.credits_concept, 4000);
		timers[1] = setTimeout(function (){
			hideInactive();
			iconSelected = false;
    	}, 6000); 
	});

	// the creepy blinking eyes (idle)
  	window.setInterval(blink, 1000);
	function blink() {
		window.setTimeout(blinkTimer, 100);

		function blinkTimer() {
			if (isBlinking) {
				var random = Math.floor((Math.random()*4)+1); 
				switch (random)
				{
				case 1:
					document.getElementById("ramine_blink").style.visibility = "visible";
					document.getElementById("ramine").style.visibility = "hidden";
				break;
				case 2:
					document.getElementById("spaceinvader_blink").style.visibility = "visible";
					document.getElementById("spaceinvader").style.visibility = "hidden";
				break;
				case 3:
					document.getElementById("pacman_blink").style.visibility = "visible";
					document.getElementById("pacman").style.visibility = "hidden";
				break;
				case 4:
					document.getElementById("mario_blink").style.visibility = "visible";
					document.getElementById("mario").style.visibility = "hidden";
				break;
				}
				isBlinking = false;
			} else if (!isBlinking) {
				document.getElementById("ramine_blink").style.visibility = "hidden";
				document.getElementById("spaceinvader_blink").style.visibility = "hidden";
				document.getElementById("mario_blink").style.visibility = "hidden";
				document.getElementById("pacman_blink").style.visibility = "hidden";

				document.getElementById("ramine").style.visibility = "visible";
				document.getElementById("spaceinvader").style.visibility = "visible";
				document.getElementById("mario").style.visibility = "visible";
				document.getElementById("pacman").style.visibility = "visible";
				isBlinking = true;
			}
		}	
	}
  
}