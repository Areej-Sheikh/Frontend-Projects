function loader() {
 
    gsap.to("#loader", {
      y: "-100%",
      duration: 0.7,
      delay: 3,
    });
}
function smoothScrolling() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
function randomImage() {
  var arr = [
    "https://www.datocms-assets.com/106915/1717687178-betteroffstudio_work-loop_10.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687414-betteroffstudio_work-loop_18-1.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687460-betteroffstudio_work-loop_26.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687440-betteroffstudio_work-loop_22.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687454-betteroffstudio_work-loop_25.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687450-betteroffstudio_work-loop_24.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
    "https://www.datocms-assets.com/106915/1717687471-betteroffstudio_work-loop_29.jpg?auto=format%2Ccompress&fit=max&h=800&w=800",
  ];

  var randomNumber = Math.floor(Math.random() * arr.length);

  var img = document.querySelector(".textdiv img");

  img.setAttribute("src", arr[randomNumber]);
}
function page1Animation() {
  gsap.to("#page1-heading", {
    scale: 1.3,
    marginTop: "15%",
    scrollTrigger: {
      trigger: "#page1-heading",
      scroller: "body",

      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });
}
function page2Animation() {
  gsap.from(".text-para p", {
    y: 100,
    stagger: 0.15,
    rotate: 1,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".text-para",
      scroller: "body",
      start: "top 80%",

    },
  });
  gsap.from(".textpara p", {
    y: 100,
    stagger: 0.15,
    rotate: 1,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".textpara",
      scroller: "body",
      start: "top 80%",
    },
  });
}

function page3Animation() {
  gsap.from('.columns',{
    y:100,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".page3",
      scroller: "body",
      start: 'top 80%',
      end: "top 0%",

    },
  })
}
function page4Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top -13%",
      end: "top -80%",
      scrub: 1,
      pin: true,
    },
  });

  tl.to(".page4-heading", {
    gap: "500px",
    duration: 0.6,
  });
  tl.to("#page4 .page4-video", {
    opacity: 1,
    duration: 0.5,
  });
  tl.to("#page4 .page4-video", {
    scale: 3,
    top: "45%",
    left: "35%",
    duration: 1,
  });
}

function page5Animation() {
  gsap.from(".page5-box1 p, span", {
    y: 100,
    stagger: 0.15,
    rotate: 1,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".page5-box1",
      scroller: "body",
      start: "top 80%",

    },
  });
  gsap.from(".textpara p", {
    y: 100,
    stagger: 0.15,
    rotate: 1,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".textpara",
      scroller: "body",
      start: "top 80%",
    },
  });
  gsap.from('.page5-box3',{
    y:100,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".page5-box3",
      scroller: "body",
      start: 'top 80%',
      end: "top 0%",

    },
  })
  gsap.from('page5-content',{
    y:100,
    opacity: 1,
    duration: 0.7,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "page5-content",
      scroller: "body",
      start: 'top 80%',
      end: "top 0%",
    },
  })

}
function page6Animation() {
    gsap.from(".page6-content h4 ", {
      y: 70,
      stagger: 0.15,
      rotate: 1,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".page6-content",
        scroller: "body",
        start: "top 80%",
  
      },
    });
    gsap.from(".page6-name span, p", {
      y: 70,
      rotate: 1,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".page6-name",
        scroller: "body",
        start: "top 90%",
      },
    });
  }
  function page7Animation() {
    gsap.from('.page7-box1',{
      y:100,
      opacity: 1,
      duration: 0.7,
      stagger: 0.3,
      rotate:1,
      scrollTrigger: {
        trigger: ".page7-content1",
        scroller: "body",
        start: 'top 80%',
        end: "top 0%",
      scrub: 1,

      },
    })
    gsap.from('.page7-box1 img',{
      width:'0%',
      scrollTrigger:{
        trigger:".page7-content1",
        scroller:"body",
        start:"top 80%",
        end:'top -80%',
        scrub:2,
      }
    })
    gsap.to('.page7-box1 img',{
      width:'27%',
      opacity: 1,
      scrollTrigger:{
        trigger:".page7-content1",
        scroller:"body",
        start:"top -100%",
        end:'top -80%',
        scrub:2,
      }
    })
    
  }
  
function cursorAnimation() {
  var body = document.querySelector("body");
  var cursor = document.querySelector(".cursor");
  var videoDiv = document.querySelector(".page4-video");

  body.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  videoDiv.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      opacity: 1,
    });
  });
  videoDiv.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      opacity: 0,
    });
  });
}

loader()
smoothScrolling();
randomImage();
page1Animation();
page2Animation();
page3Animation();
page4Animation()
page5Animation()
page6Animation()
page7Animation()
cursorAnimation();