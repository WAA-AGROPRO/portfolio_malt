
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./AnimationLandingPage.scss"


function AnimationLandingPage() {
    useEffect(() => {
        const doc = document.documentElement;
    
        doc.classList.remove('no-js');
        doc.classList.add('js');
    
        // Reveal animations
        if (document.body.classList.contains('has-animations')) {
          doc.classList.add('anime-ready');
      
          anime.timeline({
            targets: '.hero-figure-box-05',
          })
            .add({
              duration: 400,
              easing: 'easeInOutExpo',
              scaleX: [0.05, 0.05],
              scaleY: [0, 1],
              perspective: '500px',
              delay: anime.random(0, 400),
            })
            .add({
              duration: 400,
              easing: 'easeInOutExpo',
              scaleX: 1,
            })
            .add({
              duration: 800,
              rotateY: '-15deg',
              rotateX: '8deg',
              rotateZ: '-1deg',
            });
    
          anime.timeline({
            targets: '.hero-figure-box-06, .hero-figure-box-07',
          })
            .add({
              duration: 400,
              easing: 'easeInOutExpo',
              scaleX: [0.05, 0.05],
              scaleY: [0, 1],
              perspective: '500px',
              delay: anime.random(0, 400),
            })
            .add({
              duration: 400,
              easing: 'easeInOutExpo',
              scaleX: 1,
            })
            .add({
              duration: 800,
              rotateZ: '20deg',
            });
    
          anime({
            targets: '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10',
            duration: anime.random(600, 800),
            delay: anime.random(600, 800),
            rotate: [anime.random(-360, 360), function (el) { return el.getAttribute('data-rotation') }],
            scale: [0.7, 1],
            opacity: [0, 1],
            easing: 'easeInOutExpo',
          });
        }
      }, []);

  return (
    <div className="hero-figure anime-element">
        <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
            <rect width="528" height="396" style={{ fill: 'transparent' }} />
        </svg>
        <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
        <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
        <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
        <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
        <div className="hero-figure-box hero-figure-box-05"></div>
        <div className="hero-figure-box hero-figure-box-06"></div>
        <div className="hero-figure-box hero-figure-box-07"></div>
        <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
        <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
        <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
    </div>
  )
}

export default AnimationLandingPage