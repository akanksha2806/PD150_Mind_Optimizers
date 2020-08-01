var videoControl = null;
var videoEl = null;
var currTarget = null;
document.addEventListener("DOMContentLoaded", function(event) {
    var opts = {
        play_button: typeof qwBtnPlay !== 'undefined' ? qwBtnPlay : ''
    };
    videoControl = new quiverWidgetVideoControls();
    videoControl.init(opts);
});

function quiverWidgetVideoControls () {
    var vm = this;
    vm.playBtn = null;
    vm.stopBtn = null;
    vm.init = function (opts) {
        if (opts) {
            var playEl = opts.play_button;
            if (playEl) {
                playEl.addEventListener('click', vm.onVideoBtnPlay, false);
            }
        }
    };
    vm.onVideoBtnPlay = function (e) {
        currTarget = e.currentTarget;
        videoEl = currTarget.closest('.qw-video-embed').querySelector('.qw-video-widget');
        videoEl.currentTime = 0;
        videoEl.play();
        videoEl.controls = true;
        e.currentTarget.classList.add('d-none');
        currTarget.closest('.qw-video-embed').querySelector('.qw-video-player-widget-content-block').classList.add('b-transite');
        var self_poster = currTarget.closest('.qw-video-embed').querySelector('.qw-video-widget-poster');
        if (self_poster) {
            self_poster.classList.add('hide');
        }
        if (isMobile) {
            if (typeof videoEl.requestFullscreen === 'undefined') {
                videoEl.webkitEnterFullScreen();
            } else {
                videoEl.requestFullscreen();
            }
        }
        videoEl.addEventListener('pause', vm.onVideoPause, false);
        videoEl.addEventListener('play', vm.onVideoPlay, false);
    };
    vm.onVideoPause = function (e) {
        if (videoEl.paused && !videoEl.seeking) {
            currTarget = e.currentTarget;
            currTarget.closest('.qw-video-embed').querySelector('.qw-video-player-widget-content-block').classList.remove('b-transite');
        }
    };
    vm.onVideoPlay = function (e) {
        currTarget = e.currentTarget;
        currTarget.play();
        currTarget.closest('.qw-video-embed').querySelector('.qw-video-player-widget-content-block').classList.add('b-transite');
    };
}
