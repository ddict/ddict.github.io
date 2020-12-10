;(function($) {
    if (location.hash === '#update') $('#updateModal').modal()

    $('#fundBtn').click(() => {
        $('#updateModal').modal('hide')
        location.href = '#about'
    })
})(jQuery)
