$('ul').on('click', 'li', function() {

    $(this).toggleClass("complete");
});

$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});
$('input').keypress(function(e) {
    if (e.which === 13) {
        $('ul').append('<li><span class="glyphicon glyphicon-remove-sign"></span> ' + $(this).val() + '</li>');
        $(this).val('');
    }
});

$('.glyphicon-plus').click(function(){
    $('input').fadeToggle();
})