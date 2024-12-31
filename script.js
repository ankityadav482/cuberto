
// nav
Shery.mouseFollower({
    skew:true
});
Shery.makeMagnet('.magnet')
Shery.makeMagnet('#featured h3')
Shery.makeMagnet('.btn-div buttom')
Shery.makeMagnet('#featured h4')
Shery.makeMagnet('#dev h1')
Shery.textAnimate('#website h3',{
    style:1,
    duration:2
})

//website
Shery.hoverWithMediaCircle('.hvr',{
    videos:'3855f0efaa51b3def1d09f99f3c5fd87'
})

Shery.hoverWithMediaCircle('.img img',{
    images:['https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1584266032559-fe29c2fc22e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVudmlyb25tZW50fGVufDB8fDB8fHww','https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.webp?a=1&b=1&s=612x612&w=0&k=20&c=XZd1aEIfH36jd17fReJUMc8Ct3aa4GvNCGXAAJZ7B-I=']
})


//.fleftelm
gsap.to(".fleftelm",{
    scrollTrigger:{
        trigger:"#fimage",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1
})

var sections = document.querySelectorAll('.fleftelm')

Shery.imageEffect(".images", {
    style: 5,
    // config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
     sections.forEach(function(section,index){
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            onUpdate:function(prog){
                setScroll(prog.progress+index)
            }
        })
     })
    
    },
  });

