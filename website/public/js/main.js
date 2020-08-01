// create namespace breakpoints
var breakpoints = window.breakpoints || {
    mobile:  576, //sm - Small devices (landscape phones, 576px and up)
    tablet:  768, // md - Medium devices (tablets, 768px and up)
    desktop: 992, // lg - Large devices (desktops, 992px and up)
    desktop_md: 1024,
    wide:    1200 // xl - Extra large devices (large desktops, 1200px and up)
};

window.addEventListener('DOMContentLoaded', (event) => {
    jQuery('#navbarNavDropdown').on('show.bs.collapse', function (e) {
        // Action to execute once the collapsible area is expanded
        document.documentElement.classList.add('navbar-visible');
        jQuery('.carousel').carousel('pause');

    }).on('shown.bs.collapse', function (e) {
        // Action to execute once the collapsible area is expanded
    }).on('hidden.bs.collapse', function (e) {
        // Action to execute once the collapsible area is expanded
        document.documentElement.classList.remove('navbar-visible');
        jQuery('.carousel').carousel('cycle');
    });
    var navVisibleBody = document.getElementById('quiverBackDrop');
    if (navVisibleBody) {
        navVisibleBody.addEventListener('click', function (e) {
            e.stopPropagation();
            document.documentElement.classList.remove('navbar-visible');
            jQuery('.carousel').carousel('cycle');
            jQuery('#navbarNavDropdown').collapse('hide');
        });
    }
    var searchBtn = document.getElementById('searchSite');
    if (searchBtn) {
        searchBtn.addEventListener('click', showHideSearch, false);
    }
    var loginModal = document.getElementById('loginModal');
    if (loginModal) {
        jQuery(loginModal).on('show.bs.modal', function (e) {
            document.body.classList.add('login-modal-open');
        })
        .on('hidden.bs.modal', function (e) {
            document.body.classList.remove('login-modal-open');
        });
	}
	var videoIntro = document.getElementById('carouselVideoIntro');
	if (videoIntro) {
		document.documentElement.classList.add('video-intro-html');
		var videoItems = videoIntro.querySelectorAll('.carousel-intro-video-item');
		videoItems.forEach(function (vid) {
			vid.addEventListener('pause', onVideoIntroPause, false);
        	vid.addEventListener('play', onVideoIntroPlay, false);
		});
		jQuery('#carouselVideoIntro').on('slide.bs.carousel', function (e) {
			onVideoIntroPause();
			videoItems.forEach(function (item) {
				item.load();
			});
		});
	// 	var activeCarouselItem = videoIntro.querySelector('.carousel-item.active');
	// 	var activeVideo = activeCarouselItem.querySelector('.carousel-intro-video-item');
	// 	// var firstVideoBtn = document.getElementById('firstVideoBtn');

	// 	var interval = setInterval(function(){
	// 		var countForVideo = activeVideo.readyState;
	// 		if(countForVideo === 4){
	// 			var startPlayPromise = activeVideo.play();

	// 			if (startPlayPromise !== undefined) {
	// 				startPlayPromise.catch(error => {
	// 					if (error.name === "NotAllowedError") {
	// 						console.log('NotAllowedError');
	// 					} else {
	// 					// Handle a load or playback error
	// 					}
	// 				}).then(() => {
	// 					// Start whatever you need to do only after playback
	// 					// has begun.
	// 				});
	// 			}
	// 			clearInterval(interval);
	// 		}
	// 	},2000);
		// activeVideo.addEventListener('loadeddata', function(event) {
		// 	myPlayer = event.target;
		// 	myPlayer.play();
		// 	myPlayer.muted = false;
		// 	// bufferedTimeRange =myPlayer.buffered();
		// 	// if ( (bufferedTimeRange.start(0)==0 ) && ( bufferedTimeRange.end(0) -  bufferedTimeRange.start(0) > 10 ) ){
		// 	// 	myPlayer.play();
		// 	// }
		// 	if(myPlayer.readyState === 4) {
		// 		var startPlayPromise = myPlayer.play();

		// 		if (startPlayPromise !== undefined) {
		// 			startPlayPromise.catch(error => {
		// 				if (error.name === "NotAllowedError") {
		// 					console.log('NotAllowedError');
		// 				} else {
		// 				// Handle a load or playback error
		// 				}
		// 			}).then(() => {
		// 				// Start whatever you need to do only after playback
		// 				// has begun.
		// 				debugger;
		// 			});
		// 		}
		// 	  }
		// }, false);
	}
});
window.addEventListener('scroll', _.debounce(function (e) {
    var navBar = document.getElementById('siteHeader');
    var offset = 50;
    var windowScrollY = window.scrollY;
    if (navBar) {
        var navBarH = navBar.clientHeight;
        if (windowScrollY > (navBarH + offset)) {
            document.documentElement.classList.add('header-sticky-doc');
            navBar.classList.add('header-sticky');
            document.getElementById('page').style.paddingTop = navBarH + 'px';
        } else {
            navBar.classList.remove('header-sticky');
            document.documentElement.classList.remove('header-sticky-doc');
            document.getElementById('page').style.paddingTop = 0;
        }
    }
}, 200));
function onVideoIntroPlay(e) {
	document.documentElement.classList.add('hide-tools');
}
function onVideoIntroPause(e) {
	document.documentElement.classList.remove('hide-tools');
}
function showHideSearch(e) {
    var bodyClass = document.body.classList.contains('no-scroll');
    var searchInput = document.getElementById('searchform').querySelector('#s');
    if (bodyClass) {
        document.body.classList.remove('no-scroll');
        document.body.classList.remove('search-open');
    } else {
        document.body.classList.add('no-scroll');
        document.body.classList.add('search-open');
        if(searchInput) {
            searchInput.focus();
        }
    }
}

// author: Carlos Machado
// version: 0.1
// year: 2015
//
var f_name = "";
var f_ref = "";

function reqListener() {
  if(f_name == "") {f_name = f_ref;}
  var blobObject = this.response;
  window.navigator.msSaveBlob(blobObject, f_name);
}

function myDownload(evt) {
  f_name = this.getAttribute("download");
  f_ref = this.getAttribute("href");
  evt.preventDefault();
  var oReq1 = new XMLHttpRequest();
  oReq1.addEventListener("load",reqListener, false);
  oReq1.open("get", this, true);
  oReq1.responseType = 'blob';
  oReq1.send();
}

document.addEventListener(
  "load",
  function(event){
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    if(isIE) {
      var items = document.querySelectorAll('a[download], area[download]');
      for(var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', myDownload, false);
      }
    }
  }
);

