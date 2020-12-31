// document.onreadystatechange = function() {
//     if (document.readyState === "interactive") {

//     }
// }
// $(window).on('load', () => {
window.addEventListener("load", function () {
    // variables
    const $iconMenuToggle = document.querySelector('.icon--menu-toggle'),
        $body = document.querySelector('body'),
        $mainNavigation = document.querySelector('.main-navigation'),
        $main = document.querySelector('main')
    // selecror
    // /selecror
    // /variables
    // ----------------------------------------------
    // universal function
    // function ajaxRequest(ajaxForm, url) {
    //     try {
    //         history.replaceState(null, null, "#")
    //     } catch (z) {
    //         console.log(z)
    //     }
    //     $.ajax({
    //         url: url,
    //         type: "POST",
    //         dataType: "html",
    //         data: $("#" + ajaxForm).serialize(), // Сеарилизуем объект
    //         success: function (response) {
    //             //Данные отправлены успешно
    //             let result = $.parseJSON(response)
    //             console.log(result)
    //         },
    //         error: function (response) {
    //             // Данные не отправлены
    //             alert("Ошибка. Данные не отправлены.")
    //         },
    //     })
    // }
    //  /universal function
    // ----------------------------------------------
    // event

    // $('body').on('click', (e) => {}) 
    document.querySelector('body').addEventListener('click', (e) => { })

    $iconMenuToggle.addEventListener('click', toggleMobileMenu)
    // forms
    // $("#registration-form").on("input, submit", (e) => {
    //     e.preventDefault()
    //     ajaxRequest("registration-form", "test.php")
    // })
    // /forms
    // /event
    // ----------------------------------------------
    // unique function
    function toggleMobileMenu() {
        $body.classList.toggle('block')
        $iconMenuToggle.classList.toggle('icon--menu-toggle--active')
        $mainNavigation.classList.toggle('main-navigation--active');
        $main.classList.toggle('main--block')
    }
    // /unique function
    // ----------------------------------------------
    // Page load
    // /Page load
});
