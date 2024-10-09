gsap.from("img",{
    rotate:360,
    duration:1,
    delay:1,
    repeat:1,
    yoyo:0.2
})
var tl = gsap.timeline();
tl.from("li",{
    opacity:0,
    y:-20,
    duration:1,
    stagger:0.5
})
tl.from(".key",{
    opacity:0,
    y:20,
    duration:.1,
    stagger:0.5
})
tl.from(".fam",{
    opacity:0,
    y:20,
    duration:.1,
    // stagger:0.5
})



