const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".card", { y: "0%", duration: 2, stagger: 0.4}); 

tl.to('.card .card-title', {opacity: 1, duration: 1, stagger: 0.4}, '-=1.5');

tl.to('.card .card-text', {opacity: 1, duration: 1, stagger: 0.4}, '-=1.5');

tl.to('.card .btn', {opacity: 1, duration: 1, stagger: 0.4}, '-=1.5');



//----------//


