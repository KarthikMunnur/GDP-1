$(document).ready(function () {
  switch (window._STATE) {
    case "home":
      home();
      break;
    case "service":
      service();
      break;
    case "service-details":
      serviceDetails();
      break;
    case "aboutus":
      aboutus();
      break;
    case "blog":
      blog();
      break;
    case "contact":
      contact();
      break;
    case "career":
      career();
      break;
    case "blogdetails":
      blogdetails();
      break;
    case "ourworks":
      ourworks();
      break;
    case "digitaleventmanagementplatform":
      digitaleventmanagementplatform();
      break;
    case "intelligentlending":
      intelligentlending();
      break;
    case "intelligentprocess":
      intelligentprocess();
      break;
    case "intelligentprocess":
      intelligentprocess();
      break;
    case "iotdriven":
      iotdriven();
      break;
    case "smartdigitalization":
      smartdigitalization();
      break;
    case "smartcity":
      smartcity();
      break;
    case "awards":
      awards();
      break;
    case "marketingpage":
      marketingpage();
      break;
    case "artofpossible":
      artofpossible();
      break;
    case "uxdesignmanager":
      uxdesignmanager();
      break;
    case "msdynamics":
      msdynamics();
      break;
    case "technicalarchitectfrontend":
      technicalarchitectfrontend();
      break;
    case "sharepointdeveloper":
      sharepointdeveloper();
      break;
    case "sharepointlead":
      sharepointlead();
      break;
    case "qalead":
      qalead();
      break;
    case "careeropenings":
      careeropenings();
      break;
  }
});

$(".slick-slider-banner").slick({
  slidesToShow: 1,
  infinite:false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true
 });

const home = () => {
  TweenMax.to(".first", 1, { delay: 0, top: "-100%", ease: Expo.easeInOut });
  TweenMax.to(".second", 1, { delay: 0.1, top: "-100%", ease: Expo.easeInOut });
  TweenMax.to(".third", 1, { delay: 0.2, top: "-100%", ease: Expo.easeInOut });
  $(".home-bnr-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });
  TweenMax.from(".dot_1", 1.5, {
    delay: 0.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 0.8,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 1.1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".vision_1 span", 1, {
    delay: 1.1,
    opacity: 0,
    duration: 0.75,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
  });
  TweenMax.from(".vision_2 span", 1, {
    delay: 1.2,
    duration: 0.75,
    opacity: 0,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
  });
  TweenMax.from(".vision_3 span", 1, {
    delay: 1.3,
    duration: 0.75,
    opacity: 0,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
  });
  TweenMax.from(".vision_4 span", 1, {
    delay: 1.4,
    duration: 0.75,
    opacity: 0,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
  });
  TweenMax.from(".menu, .portal", 1.5, {
    delay: 1.5,
    opacity: 0,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
  });
  TweenMax.from("#service-home-dots .dot_1", 1.5, {
    delay: 1.6,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from("#service-home-dots .dot_2", 1.5, {
    delay: 1.9,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from("#service-home-dots .dot_3", 1.5, {
    delay: 2.2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  $(function () {
    (function autoChange() {
      $(".note_list li.active").each(function () {
        if (!$(this).is(":last-of-type")) {
          $(this)
            .delay(1000)
            .fadeOut(100, function () {
              $(this)
                .removeClass("active")
                .next()
                .addClass("active")
                .fadeIn(200);
              setTimeout(autoChange, 3000);
            });
        } else {
          $(this)
            .delay(1600)
            .fadeOut(100, function () {
              $(this)
                .removeClass("active")
                .parent(".note_list")
                .find("li:eq(1)")
                .addClass("active")
                .fadeIn(200);
              autoChange();
            });
        }
      });
    })();
  });
  if ($(window).width() > 600) {
    $(".blog-slider").slick({
      dots: true,
      arrows: false,
      autoplay: false,
      speed: 500,
      responsive: [{ breakpoint: 991, settings: "unslick" }],
    });
    $(document).ready(function () {
      const testimonialContainer = document.querySelector(
        ".testimonial-container"
      );
      const testimonialControlsContainer = document.querySelector(
        ".testimonial-controls"
      );
      const testimonialControls = ["previous", "add", "next"];
      const testimonialItems = document.querySelectorAll(".testimonial-item");
      class Carousel {
        constructor(container, items, controls) {
          this.carouselContainer = container;
          this.carouselControls = controls;
          this.carouselArray = [...items];
        }
        updatetestimonial() {
          this.carouselArray.forEach((el) => {
            el.classList.remove("testimonial-item-1");
            el.classList.remove("testimonial-item-2");
            el.classList.remove("testimonial-item-3");
            el.classList.remove("testimonial-item-4");
            el.classList.remove("testimonial-item-5");
          });
          this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`testimonial-item-${i + 1}`);
          });
        }
        setCurrentState(direction) {
          if (direction.className == "testimonial-controls-previous") {
            this.carouselArray.unshift(this.carouselArray.pop());
          } else {
            this.carouselArray.push(this.carouselArray.shift());
          }
          this.updatetestimonial();
        }
        setNav() {
          testimonialContainer.appendChild(
            document.createElement("ul")
          ).className = "testimonial-nav";
          this.carouselArray.forEach((item) => {
            const nav = testimonialContainer.lastElementChild;
            nav.appendChild(document.createElement("li"));
          });
        }
        s;
        setControls() {
          this.carouselControls.forEach((control) => {
            testimonialControlsContainer.appendChild(
              document.createElement("button")
            ).className = `testimonial-controls-${control}`;
            document.querySelector(
              `.testimonial-controls-${control}`
            ).innerText = control;
          });
        }
        useControls() {
          const triggers = [...testimonialControlsContainer.childNodes];
          triggers.forEach((control) => {
            control.addEventListener("click", (e) => {
              e.preventDefault();
              if (control.className == "testimonial-controls-add") {
                const newItem = document.createElement("img");
                const latestItem = this.carouselArray.length;
                const latestIndex =
                  this.carouselArray.findIndex(
                    (item) =>
                      item.getAttribute("data-index") ==
                      this.carouselArray.length
                  ) + 1;
                Object.assign(newItem, {
                  className: "testimonial-item",
                  src: `http://fakeimg.pl/300/?text=${
                    this.carouselArray.length + 1
                  }`,
                });
                newItem.setAttribute(
                  "data-index",
                  this.carouselArray.length + 1
                );
                this.carouselArray.splice(latestIndex, 0, newItem);
                document
                  .querySelector(`[data-index="${latestItem}"]`)
                  .after(newItem);
                this.updatetestimonial();
              } else {
                this.setCurrentState(control);
              }
            });
          });
        }
      }
      const exampleCarousel = new Carousel(
        testimonialContainer,
        testimonialItems,
        testimonialControls
      );
      exampleCarousel.setControls();
      exampleCarousel.useControls();
    });
  }
  $(".testimonials-slider").slick({
    centerMode: true,
    centerPadding: "18vw",
    slidesToShow: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
  });
  $(".testimonials-slider-resp").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 600,
  });
  var acc = document.getElementsByClassName("accordion-home-service ");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.classList.toggle("accordion-home-service-font");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};
$("ul.main-menu-list  li.dropdown").hover(
  function () {
    $(this).find(".main-dropdown-menu").stop(true, true).delay(200).fadeIn(500);
    $(this)
      .find(".fa.fa-caret-down")
      .css("-webkit-transform", "rotate(" + 180 + "deg)");
  },
  function () {
    $(this)
      .find(".main-dropdown-menu")
      .stop(true, true)
      .delay(200)
      .fadeOut(500);
    $(this)
      .find(".fa.fa-caret-down")
      .css("-webkit-transform", "rotate(" + 0 + "deg)");
  }
);
$("ul.main-menu-list  li.dropdown").hover(
  function () {
    $(this)
      .find(".main-dropdown-menu-cas")
      .stop(true, true)
      .delay(200)
      .fadeIn(500);
    $(this)
      .find(".fa.fa-caret-down")
      .css("-webkit-transform", "rotate(" + 180 + "deg)");
  },
  function () {
    $(this)
      .find(".main-dropdown-menu-cas")
      .stop(true, true)
      .delay(200)
      .fadeOut(500);
    $(this)
      .find(".fa.fa-caret-down")
      .css("-webkit-transform", "rotate(" + 0 + "deg)");
  }
);
function changeImage(anything) {
  document.getElementById("slider").src = anything;
}
function changeImageRes(anything) {
  document.getElementById("menu-resource").src = anything;
}
$(" .main-dropdown-resou-l ul li").hover(function () {
  $("#menu-resource").css("display", "block");
});
$(".our-blog-menu").hover(function () {
  $("#menu-resource").css("display", "none");
});
$(".main-dpdw-menu a").hover(function () {
  $(this).find(".fa.fa-arrow-right").css("display", "block");
});
$(" .main-dropdown-case-stu-l li ").hover(function () {
  $(this).siblings().toggleClass("hover");
});
$(" .main-dropdown-menu li ").hover(function () {
  $(this).siblings().toggleClass("hover");
});
$(".main-dropdown-case-stu-l li a")
  .mouseenter(function () {
    $(this).find("span").css("display", "inline-block");
  })
  .mouseleave(function () {
    $(this).find("span").css("display", "none");
  });
$(".main-dropdown-menu li a")
  .mouseenter(function () {
    $(this).find("span").css("display", "inline-block");
  })
  .mouseleave(function () {
    $(this).find("span").css("display", "none");
  });
$(".main-dpdn-menu-about li a")
  .mouseenter(function () {
    $(this).find("span").css("display", "inline-block");
  })
  .mouseleave(function () {
    $(this).find("span").css("display", "none");
  });
$(function () {
  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate(
      { left: activeState ? "0%" : "-100%" },
      400
    );
  }
  $("#menu-wrapper").click(function (event) {
    console.log("test");
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();
    $("body").toggleClass("overflow-hidden");
  });
  $(".menu-list")
    .find(".accordion-toggle")
    .click(function () {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this)
        .toggleClass("active-tab")
        .find(".menu-link")
        .toggleClass("active");
      $(".menu-list .accordion-content")
        .not($(this).next())
        .slideUp("fast")
        .removeClass("open");
      $(".menu-list .accordion-toggle")
        .not(jQuery(this))
        .removeClass("active-tab")
        .find(".menu-link")
        .removeClass("active");
    });
});
const service = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
};
$(".our-team-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 600,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});
const serviceDetails = () => {};
const aboutus = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  $(".leader-ship-slider").slick({
    autoplay: false,
    focusOnSelect: true,
    slidesToShow: 3,
    infinite: false,
    dots: true,
    speed: 300,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
  var modal1 = document.getElementById("aboutus-inner");
  var modal2 = document.getElementById("aboutus-inner-pra");
  var modal3 = document.getElementById("aboutus-inner-manoj");
  var modal4 = document.getElementById("aboutus-inner-rajan");
  var modal5 = document.getElementById("aboutus-inner-tanmay");
  var modal6 = document.getElementById("aboutus-inner-sunil");
  var btn1 = document.getElementById("apratim-bio");
  var btn2 = document.getElementById("prash-bio");
  var btn3 = document.getElementById("manoj-bio");
  var btn4 = document.getElementById("nagaraj-bio");
  var btn5 = document.getElementById("tanmay-bio");
  var btn6 = document.getElementById("sunil-bio");
  var span1 = document.getElementsByClassName("closing-icon")[0];
  var span2 = document.getElementsByClassName("closing-icon")[1];
  var span3 = document.getElementsByClassName("closing-icon")[2];
  var span4 = document.getElementsByClassName("closing-icon")[3];
  var span5 = document.getElementsByClassName("closing-icon")[4];
  var span6 = document.getElementsByClassName("closing-icon")[5];
  btn1.onclick = function () {
    modal1.style.display = "block";
  };
  btn2.onclick = function () {
    modal2.style.display = "block";
  };
  btn3.onclick = function () {
    modal3.style.display = "block";
  };
  btn4.onclick = function () {
    modal4.style.display = "block";
  };
  btn5.onclick = function () {
    modal5.style.display = "block";
  };
  btn6.onclick = function () {
    modal6.style.display = "block";
  };
  span1.onclick = function () {
    modal1.style.display = "none";
  };
  span2.onclick = function () {
    modal2.style.display = "none";
  };
  span3.onclick = function () {
    modal3.style.display = "none";
  };
  span4.onclick = function () {
    modal4.style.display = "none";
  };
  span5.onclick = function () {
    modal5.style.display = "none";
  };
  span6.onclick = function () {
    modal6.style.display = "none";
  };
  $(document).ready(function () {
    $("#apratim-bio").click(function () {
      $("#about-section-5");
      $("body").css({ overflow: "hidden" });
    });
    $(".closing-icon, .bio-info").click(function () {
      $("#about-section-5");
      $("body").css({ overflow: "scroll" });
    });
  });
  bannerText(
    [
      "Artificial Intelligence ",
      "Digital Transformation",
      "Automation Process",
      " Sharepoint",
    ],
    "text",
    ["#3addc8"]
  );
  function bannerText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("curosor");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 40);
    window.setInterval(function () {
      if (visible === true) {
        con.className = "text-cursor";
        visible = false;
      } else {
        con.className = "text-cursor";
        visible = true;
      }
    }, 400);
  }
  var acc = document.getElementsByClassName("about-app-resp ");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  $(document).ready(function () {
    $("#team-mem li").slice(0, 2).show();
    $("#loadMoreTeams").on("click", function (e) {
      e.preventDefault();
      $("#team-mem li:hidden").slice(0, 2).slideDown();
      if ($("#team-mem li:hidden").length == 0) {
        $(".more-info-team").css("display", "none");
      }
    });
  });
  $(document).ready(function () {
    $("#about-section-5 .leader-team").slice(0, 1).show();
    $("#loadMoreLeaders").on("click", function (e) {
      e.preventDefault();
      $("#about-section-5 .leader-team:hidden").slice(0, 1).slideDown();
      if ($("#about-section-5 .leader-team:hidden").length == 0) {
        $(".more-info-leader").css("display", "none");
      }
    });
  });
};
const career = () => {
  TweenMax.to(".second", 1, { delay: 0.7, top: "-100%", ease: Expo.easeInOut });
  TweenMax.to(".third", 1, { delay: 0.9, top: "-100%", ease: Expo.easeInOut });
  TweenMax.from(".dot_1", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  $(document).ready(function () {
    $(".content").slice(0, 0).show();
    $("#loadMore").on("click", function (e) {
      e.preventDefault();
      $(".content:hidden").slice(0, 4).slideDown();
      if ($(".content:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
  });
  var acc = document.getElementsByClassName("career-accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.style.fontWeight = 200;
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  $(".carrer-sec").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
  $(document).ready(function () {
    $("#team-mem .cards-sec").slice(0, 2).show();
    $("#loadMoreOpenings").on("click", function (e) {
      e.preventDefault();
      $("#team-mem .cards-sec:hidden").slice(0, 2).slideDown();
      if ($("#team-mem .cards-sec:hidden").length == 0) {
        $(".more-info-open").css("display", "none");
      }
    });
  });
  $(document).ready(function () {
    $(".testimonial-1").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
    });
  });
};
const blog = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  $(document).on("click", "#clicked li", function () {
    $(this)
      .css({
        "font-weight": "bold",
        "border-bottom": "3px solid #7580d2",
        color: "#7580d2",
      })
      .siblings()
      .css({ "font-weight": "normal", "border-bottom": "unset" });
  });
  $("#all").click(function () {
    $(".blogs,.whitepaper").show();
    $(".message").hide();
  });
  $("#blogs").click(function () {
    $(".blogs").show();
    $(".whitepaper,.message").hide();
  });
  $("#whitepaper").click(function () {
    $(".whitepaper").show();
    $(".blogs,.message,#loadMoreBlogs").hide();
  });
};
$(document).ready(function () {
  size_li = $("#myList li").size();
  x = 9;
  $("#myList li:lt(" + x + ")").show();
  $("#loadMoreBlogs").click(function () {
    x = x + 6 <= size_li ? x + 6 : size_li;
    $("#myList li:lt(" + x + ")").show();
  });
});
const blogdetails = () => {
  if ($(window).width() > 576) {
    $(".blog-details-blog-related-slider").slick({
      autoplay: true,
      focusOnSelect: true,
      slidesToShow: 2,
      infinite: true,
      dots: true,
      speed: 300,
      slidesToScroll: 1,
      arrows: false,
    });
  }
};
$("#subscriptionform").validate({
  rules: { email: { required: true, email: true } },
  messages: {
    email: { required: "Please, enter an email", email: "Email is invalid" },
  },
  submitHandler: function (form) {
    alert("Thank You! for registering, out team will contact you soon.");
    $("#subscriptionform").trigger("reset");
    return false;
  },
});
const smartdigitalization = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 0.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
};
const intelligentlending = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 0.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
};
const intelligentprocess = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 0.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
};
const smartcity = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 0.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  $(document).ready(function () {
    $("#smartcity-casestudy").click(function () {
      $("#ourworks-casestudy").css({ "font-weight": "bold" });
    });
  });
};
const digitaleventmanagementplatform = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 0.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
};
const iotdriven = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 0.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
};
const ourworks = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 0.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
};
$("#downloadform").validate({
  rules: { name: { required: true }, email: { required: true, email: true } },
  messages: {
    name: "Please specify your name",
    email: "Please specify a valid email address",
  },
});
$(document).ready(function () {
  $(".download-btn").click(function () {
    $(".download-btn").css({ "padding-top": "1.5416vw" });
  });
});
const awards = () => {
  TweenMax.from(".dot_1", 1.5, {
    delay: 1,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1.5,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  $(".awards-achievements").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: false,
    speed: 300,
  });
};
const marketingpage = () => {
  TweenMax.from(".ms_partner", 1.5, {
    delay: 3,
    opacity: 0,
    duration: 0.01,
    x: 550,
    autoAlpha: 0,
    ease: Expo.easeInOut,
  });
  $(".home-bnr-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });
  TweenMax.from(".dot_1", 1.5, {
    delay: 1.6,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_2", 1.5, {
    delay: 1.9,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".dot_3", 1.5, {
    delay: 2.2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  $(document).ready(function () {
    $(".sponcers-logo").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
        },
      ],
    });
  });
  $(document).ready(function () {
    $(".testimonial-1").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    });
  });
  $(document).ready(function () {
    $(".library-info").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });
  });
  $("#contact").validate({
    rules: {
      interest: { required: true },
      name: { required: true },
      email: { required: true, email: true },
    },
    messages: {
      interest: "Please provide information",
      name: "Please specify your name",
      email: "Please specify a valid email address",
    },
    submitHandler: function (form) {
      alert("Thank You! for registering, out team will contact you soon.");
      $("#submit").text("Sent");
      saveContact();
      $("#contact").trigger("reset");
      return false;
    },
  });
};
$(" .casestudies_responsive").slick({
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  responsive: [{ breakpoint: 992, settings: "unslick", arrows: false }],
});
jQuery(function ($) {
  let path = window.location.href;
  $(".casestudies_responsive ul li a").each(function () {
    if (this.href === path) {
      $(this).find(".casestudies_slider_c1").css("font-weight", "50");
      $();
    }
  });
});
$(document).ready(function () {
  $(".casestudies_responsive ul").slice(0, 1).show();
  $("#loadMoreCaseStudies").on("click", function (e) {
    e.preventDefault();
    $(".casestudies_responsive ul:hidden").slice(0, 1).slideDown();
    if ($(".casestudies_responsive ul:hidden").length == 0) {
      $(".load-more-case").css("display", "none");
    }
  });
});
$(document).ready(function () {
  if (window.location.href.indexOf("services") > -1) {
    $(".dropdown.services").css({ "font-weight": "600" });
  }
  if (window.location.href.indexOf("case-studies") > -1) {
    $(".dropdown.case-stu").css({ "font-weight": "600" });
  }
  if (window.location.href.indexOf("about") > -1) {
    $(".dropdown.about-us").css({ "font-weight": "600" });
  }
  if (window.location.href.indexOf("blogs") > -1) {
    $(".blogs ").css({ "font-weight": "600" });
  }
  if (window.location.href.indexOf("contact") > -1) {
    $(".contact-us").css({ "font-weight": "600" });
  }
});
const careeropenings = () => {
  $(document).ready(function () {
    $("#team-mem .cards-sec").slice(0, 2).show();
    $("#loadMoreOpenings").on("click", function (e) {
      e.preventDefault();
      $("#team-mem .cards-sec:hidden").slice(0, 2).slideDown();
      if ($("#team-mem .cards-sec:hidden").length == 0) {
        $(".more-info-open").css("display", "none");
      }
    });
  });
};
const contact = () => {};
const artofpossible = () => {
  TweenMax.from("#art-of-possible .dot_1", 1.5, {
    delay: 1.6,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from("#art-of-possible .dot_2", 1.5, {
    delay: 1.9,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from("#art-of-possible .dot_3", 1.5, {
    delay: 2.2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut,
  });
  $(document).ready(function () {
    $(".testimonial-1").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
    });
  });
};
function initMap() {
  const myLatLng = { lat: 17.4222, lng: 78.3366 };
  const myLatLng1 = { lat: 39.7233309, lng: -75.6592274 };
  const center = { lat: 28.0339, lng: 1.6596 };
  const map = new google.maps.Map(
    document.getElementById("map"),
    {
      zoom: 3,
      center: center,
      minZoom: 3,
      maxZoom: 3,
      disableDefaultUI: true,
      gestureHandling: "none",
      zoomControl: false,
      scaleControl: false,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    },
    { center: myLatLng1 }
  );
  new google.maps.Marker({
    position: new google.maps.LatLng(myLatLng),
    map,
    title:
      "The Hive, Corporate capital, Financial district, Nanakramguda, Hyderabad",
  });
  new google.maps.Marker({
    position: myLatLng1,
    map,
    title: "2055 Limestone Rd, STE 200-C, Wilmington, DW 19808",
    optimized: false,
  });
}
window.initMap = initMap;
if ($(window).width() < 991) {
  function initMap() {
    const myLatLng = { lat: 17.4222, lng: 78.3366 };
    const myLatLng1 = { lat: 39.7233309, lng: -75.6592274 };
    const center = { lat: 28.0339, lng: 1.6596 };
    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 1.5,
        center: center,
        minZoom: 1.5,
        maxZoom: 1.5,
        disableDefaultUI: true,
        gestureHandling: "none",
        zoomControl: false,
        scaleControl: false,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      },
      { center: myLatLng1 }
    );
    new google.maps.Marker({
      position: new google.maps.LatLng(myLatLng),
      map,
      title:
        "The Hive, Corporate capital, Financial district, Nanakramguda, Hyderabad",
    });
    new google.maps.Marker({
      position: myLatLng1,
      map,
      title: "2055 Limestone Rd, STE 200-C, Wilmington, DW 19808",
      optimized: false,
    });
  }
  window.initMap = initMap;
}
if ($(window).width() < 576) {
  function initMap() {
    const myLatLng = { lat: 17.4222, lng: 78.3366 };
    const myLatLng1 = { lat: 39.7233309, lng: -75.6592274 };
    const center = { lat: 28.0339, lng: 1.6596 };
    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 1,
        center: center,
        minZoom: 1,
        maxZoom: 1,
        disableDefaultUI: true,
        gestureHandling: "none",
        zoomControl: false,
        scaleControl: false,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      },
      { center: myLatLng1 }
    );
    new google.maps.Marker({
      position: new google.maps.LatLng(myLatLng),
      map,
      title:
        "The Hive, Corporate capital, Financial district, Nanakramguda, Hyderabad",
    });
    new google.maps.Marker({
      position: myLatLng1,
      map,
      title: "2055 Limestone Rd, STE 200-C, Wilmington, DW 19808",
      optimized: false,
    });
  }
  window.initMap = initMap;
}
$(".our-team-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  autoplay: false,
  autoplaySpeed: 600,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});
if ($(window).width() < 991) {
  $(".case-img-slider").slick({
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
  });
  $(".case-img-slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      console.log("beforeChange", currentSlide, nextSlide);
    }
  );
  $(".case-img-slider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      console.log("afterChange", currentSlide);
    }
  );
}
var modal = document.getElementById("art-spark-Modal");
var btn = document.getElementById("spark-btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
var modal = document.getElementById("art-ignite-Modal");
var btn = document.getElementById("ignite-btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

