window.addEventListener('DOMContentLoaded', (event) => {
    var carousel = document.querySelector('.home-box-site-head');
    if (carousel) {
        carousel.classList.add('landed');
    }

    var pageTempate = document.querySelector('.page-template-homelandingpage');
    if (pageTempate) {
        var controller = new ScrollMagic.Controller();


        var homeboxHead = document.querySelector('.home-box-site-head.landed');
        homeboxHead.addEventListener('transitionend', function () {
            // var rule = CSSRulePlugin.getRule('.qw-features-abs-control .quiver-section-title span::after');
            // var spanWidth = window.getComputedStyle(document.querySelector('.qw-features-abs-control .quiver-section-title span'));

            // var items = document.querySelectorAll('.qw-features-abs-control .sow-features-feature');
            // var tween = new TimelineMax()
            //     .to(".qw-features-abs-control .quiver-section-title", 0.5, {
            //         opacity: 1,
            //         y: -0,
            //         transformOrigin: '0% 100% 0'
            //     })
            //     .to(items[0], 1, {
            //         x: -0,
            //         opacity: 1
            //     })
            //     .to(items[2], 1, {
            //         x: 0,
            //         opacity: 1
            //     }, '-=1')
            //     .to(items[1], 1, {
            //         opacity: 1
            //     }, '-=.6');
            // var scene = new ScrollMagic.Scene({
            //     triggerElement: ".qw-features-abs-control",
            //     duration: 0,
            //     // offset: -70
            //     triggerHook: 1
            // })
            // .reverse(false)
            // // animate color and top border in relation to scroll position
            // .setTween(tween) // the tween durtion can be omitted and defaults to 1
            // //.addIndicators({name: "Abs Control title"}) // add indicators (requires plugin)
            // .addTo(controller);
        });

        //var rule = CSSRulePlugin.getRule('.qw-features-abs-control .quiver-section-title span::after');
        //var spanWidth = window.getComputedStyle(document.querySelector('.qw-features-abs-control .quiver-section-title span'));

        var items = document.querySelectorAll('.qw-features-abs-control .sow-features-feature');
        var tween = new TimelineMax()
            .to(".qw-features-abs-control .quiver-section-title", 0.5, {
                opacity: 1,
                y: -0,
                transformOrigin: '0% 100% 0'
            })
            .to(items[0], 1, {
                x: -0,
                opacity: 1
            })
            .to(items[2], 1, {
                x: 0,
                opacity: 1
            }, '-=1')
            .to(items[1], 1, {
                opacity: 1
            }, '-=.6');
        var scene = new ScrollMagic.Scene({
            triggerElement: ".qw-features-abs-control",
            duration: 0,
            // offset: -70
            triggerHook: 0.8
        })
            .reverse(false)
            // animate color and top border in relation to scroll position
            .setTween(tween) // the tween durtion can be omitted and defaults to 1
            //.addIndicators({name: "Abs Control title"}) // add indicators (requires plugin)
            .addTo(controller);

        // Video Player Home
        var videoTween = new TimelineMax({ onComplete: onVidTweenComplete, onReverseComplete: onVidTweenReverseComplete })
            .to('.qw-video-home-section .qw-video-player-widget-content-block', 0.4, {
                x: -0
            })
            .to('.qw-video-home-section .quiver-section-title', 0.5, {
                x: -0,
                opacity: 1
            })
            .to('.qw-video-home-section .qw-video-player-widget-content-block-body', 0.5, {
                x: -0,
                opacity: 1
            }, '-=0.3')
            .to('.qw-video-home-section .qw-video-player-widget-content-block-actions', 0.5, {
                x: -0,
                opacity: 1
            }, '-=0.4');

        var videoPlyrEl = document.querySelector('.qw-video-home-section');
        var videoScene = new ScrollMagic.Scene(
            {
                triggerElement: ".qw-video-home-section",
                duration: 0,
                offset: -80
            }
        )
            .setTween(videoTween)
            .reverse(false)
            .on('enter', function (event) {
                if (event.scrollDirection === 'REVERSE' && event.currentTarget.triggerElement().classList.contains('landed')) {
                    event.currentTarget.triggerElement().classList.remove('landed');
                    var vids = document.querySelector('.qw-video-widget');
                    vids.pause();
                }
            })
            //.addIndicators({name: "video Scene"}) // add indicators (requires plugin)
            .addTo(controller);

        // var homeboxHead = document.querySelector('.home-box-site-head.landed');
        // var carouselEl = document.querySelector('.carousel');
        // homeboxHead.addEventListener('transitionend', function () {
        //     var distance = parseFloat((carouselEl.getBoundingClientRect().y / window.innerHeight).toFixed(2));
        //     var videoPosterScene = new ScrollMagic.Scene({
        //         triggerElement: ".qw-video-home-section",
        //         duration: document.querySelector('.qw-video-widget-poster').clientHeight,
        //         offset: 0,
        //         triggerHook: distance

        //     })
        //     .setTween('.qw-video-widget-poster', 0.5, {
        //         y: 80,
        //         ease: Linear.easeNone
        //     })
        //     .addIndicators({name: "Poster parallax Scene"}) // add indicators (requires plugin)
        //     .addTo(controller);
        // });
        const videoPoster = document.querySelector('.qw-video-widget-poster');
        if (videoPoster) {
            var videoPosterScene = new ScrollMagic.Scene({
                triggerElement: ".qw-video-home-section",
                duration: document.querySelector('.qw-video-widget-poster').clientHeight,
                offset: -90

            })
                .setTween('.qw-video-widget-poster', 0.5, {
                    y: 80,
                    ease: Linear.easeNone
                })
                //.addIndicators({name: "Poster parallax Scene"}) // add indicators (requires plugin)
                .addTo(controller);
        }

        // Price Table
        var priceTableTl1 = new TweenMax
            .fromTo(".quiver-price-table-widget .quiver-section-title", 0.5,
                {
                    opacity: 0,
                    y: -100,
                },
                {
                    opacity: 1,
                    y: -0
                });

        var priceTableTl12 = TweenMax.staggerFromTo('.quiver-widget-price-table-item-wrapper', 2, {
            y: 150,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Back.easeOut
        }, 0.15);

        var priceTableTimeline = new TimelineMax()
            .add(priceTableTl1)
            .add(priceTableTl12, '-=0.3');

        var priceTableScene = new ScrollMagic.Scene({
            triggerElement: ".so-widget-sow-price-table",
            duration: 0,
            offset: -50

        })
            .setTween(priceTableTimeline)
            .reverse(false)
            //.addIndicators({name: "Price table Scene"}) // add indicators (requires plugin)
            .addTo(controller);

        // Quiver Features
        var qvFeaturesItems = document.querySelectorAll('.quiver-features-home .sow-features-feature');
        var qvFeaturesItemsArr = Array.from(qvFeaturesItems);
        qvFeaturesItemsArr.sort(function () {
            return 0.5 - Math.random();
        });
        var qvFeaturesTl1 = new TweenMax
            .fromTo(".quiver-features-home .quiver-section-title", 0.5,
                {
                    opacity: 0,
                    y: -100,
                },
                {
                    opacity: 1,
                    y: -0
                });
        var qvFeaturesTl2 = TweenMax.staggerFromTo(qvFeaturesItemsArr, 0.5, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Quad.easeInOut
        }, 0.15);

        var qvFeaturesTimeline = new TimelineMax()
            .add(qvFeaturesTl1)
            .add(qvFeaturesTl2, '-=0.3');

        var qvFeatureScene = new ScrollMagic.Scene({
            triggerElement: ".quiver-features-home",
            duration: 0,
            offset: -50

        })
            .setTween(qvFeaturesTimeline)
            .reverse(false)
            //.addIndicators({name: "Quiver Features Scene"}) // add indicators (requires plugin)
            .addTo(controller);

        // Quiver TExt list quiver-hero-widget-textlist
        var qvHeroBgTween = TweenMax.to('.qv-with-quiver-enterprise .quiver-hero-widget-textlist', 0.5, {
            backgroundPosition: '50% 0%'
        }
        );
        var qvHeroTextListScene = new ScrollMagic.Scene({
            triggerElement: ".qv-with-quiver-enterprise",
            duration: parseInt(document.querySelector('.qv-with-quiver-enterprise').clientHeight),
            offset: 0,
            triggerHook: 0.75

        })
            .setTween(qvHeroBgTween)
            //.addIndicators({name: "Quiver Text List Scene"}) // add indicators (requires plugin)
            .addTo(controller);

        // JumboTron
        var JumbotronTween = new TimelineMax()
            .to('.qw-jumbotron-section div[data-column="left"]', 0.5, {
                opacity: 1,
                x: -0,
                transformOrigin: '0% 100% 0'
            })
            .to('.qw-jumbotron-section div[data-column="right"]', 1, {
                x: 0,
                opacity: 1
            }, '-=0.3');
        var qvJumboTronScene = new ScrollMagic.Scene({
            triggerElement: ".qw-jumbotron-section",
            duration: 0,
            offset: -30
        })
            .setTween(JumbotronTween)
            .reverse(false)
            //.addIndicators({name: "Quiver Jumbotron Scene"}) // add indicators (requires plugin)
            .addTo(controller);
    }
});

var onVidTweenComplete = function () {
    console.log('complete');
    const videoHomeSection = document.querySelector('.qw-video-home-section ');
    if (videoHomeSection) {
        videoHomeSection.classList.add('landed');
    }
};
var onVidTweenReverseComplete = function () {
    console.log('reverse complete');
    const videoHomeSection = document.querySelector('.qw-video-home-section ');
    if (videoHomeSection) {
        videoHomeSection.classList.remove('landed');
    }
};
