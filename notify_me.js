$('.message:not(.message-end)').click(function (event) {
    $('.notify-form').addClass('active')
    $('.field input').focus()
})

$('.field input').keyup(function(event) {

    if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(event.target.value)) {
        $('.btn-send').addClass('active')				
    }
    else {
        $('.btn-send').removeClass('active')
    }
})

$('.btn-send').click(function (event) {
    $('.notify-form').removeClass('active')
    $('.message-end').addClass('active')

    setTimeout( function (event) {
        $('.message-end').removeClass('active')
        $('.btn-send').removeClass('active')
        $('.field input').val("")
    }, 2000)
})