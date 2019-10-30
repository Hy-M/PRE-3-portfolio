function scrollToTop() {
    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    });

}

scrollToTop();