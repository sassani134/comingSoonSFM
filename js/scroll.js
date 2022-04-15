var controller = new ScrollMagic.Controller();
var timel = new TimelineMax({onUpdate:updatePercentage});

tl.from('.divid2', 1, {y: -300, opacity: 0});
tl.from('.divid2 h2', 1, {x: 200, opacity: 0});
tl.from('.divid2 p', 1, {x: -200, opacity: 0});
tl.from('.divid2 a', 1, {x: 100, opacity: 0});
// tl.from('.s-2 img', 1, {x: 50, opacity: 0});
// tl.from('.s-2 .box', 1, {scale: 0, opacity: 0}, "-=2");