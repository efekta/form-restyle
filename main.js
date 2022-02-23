$(document).ready(function(){
    $('body').on('click', '.toggle-password', function() {
        $(this).toggleClass('show');
        var input = $('#pass_log_id');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }
    });
});

