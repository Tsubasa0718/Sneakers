const FadeElement = document.querySelectorAll('.fadeIn');

const handleScroll = () =>{
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

  FadeElement.forEach(elem =>{
    const targetPosition = elem.getBoundingClientRect().top + scrollY;

    if (scrollY > targetPosition - windowHeight + 200) {
        elem.classList.add("fade-in-active"); // クラスを追加
    }
})
}

window.addEventListener("scroll", handleScroll);