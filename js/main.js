// 찾기 이벤트
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
});

// 뱃지 스크롤 이벤트 (사라지기)
const badgeEl = document.querySelector("header .badges");

// _.throttle(함수, 시간) 화면을 스크롤할때 시간 딜레이로 작동된다.
window.addEventListener(
    "scroll",
    _.throttle(function () {
        console.log(window.scrollY);
        if (window.scrollY > 500) {
            //배지를 숨긴다.
            // gsap.to(요소, 지속시간(초단위), 옵션{객체});
            gsap.to(badgeEl, 0.6, {
                opacity: 0,
                display: "none",
            });
        } else {
            //배지를 보인다.
            gsap.to(badgeEl, 0.6, {
                opacity: 1,
                display: "block",
            });
        }
    }, 300)
);

//visual section 요소 페이드 인 처리
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간(초단위), 옵션{객체});
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
        opacity: 1,
    });
});

//스와이프
//new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true,
});
new Swiper(".promotion .swiper-container", {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
        clickable: true,
    },
    navigation: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next",
    },
});
