class AnimationManager {
  constructor() {
    this.textWrapper = document.querySelector(".title");
    this.box = document.querySelector(".box");
    this.images = document.querySelectorAll("img");
    this.wrapperImg = document.querySelector(".wrapper-img");
    this.imgElements = document.querySelectorAll(".img");
    this.left = document.querySelector(".left");
    this.right = document.querySelector(".right");
    this.menuItems = document.querySelectorAll(".menu > div, .hero-container > div");
  }

  animateText() {
    this.textWrapper.innerHTML = this.textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".title .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 40 * i,
    });
  }

  animateBox() {
    TweenMax.to(this.box, 2.4, {
      y: "-100%",
      ease: Expo.easeInOut,
      delay: 1,
    });
  }

  animateImages() {
    TweenMax.from(this.images, 4, {
      scale: "2",
      ease: Expo.easeInOut,
      delay: 0,
    });
  }

  animateWrapperImg() {
    TweenMax.to(this.wrapperImg, 2.4, {
      width: "400",
      height: "500",
      ease: Expo.easeInOut,
      delay: 3.6,
    });
  }

  animateImgElements() {
    TweenMax.from(this.imgElements, 0.4, {
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 3.4,
    });
  }

  animateLeftAndRight() {
    TweenMax.to(this.left, 2, {
      x: "-400",
      rotation: -10,
      ease: Expo.easeInOut,
      delay: 3.8,
    });

    TweenMax.to(this.right, 2, {
      x: "100",
      rotation: 10,
      ease: Expo.easeInOut,
      delay: 3.8,
    });
  }

  animateMenuItems() {
    TweenMax.staggerFrom(
      this.menuItems,
      2,
      {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut,
        delay: 4.2,
      },
      0.1
    );
  }

  startAnimation() {
    this.animateText();
    this.animateBox();
    this.animateImages();
    this.animateWrapperImg();
    this.animateImgElements();
    this.animateLeftAndRight();
    this.animateMenuItems();
  }
}

const animationManager = new AnimationManager();
animationManager.startAnimation();
