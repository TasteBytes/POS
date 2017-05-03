// using context
$('.context.example .ui.sidebar')
    .sidebar({
        context: $('.context.example .bottom.segment')
    })
    .sidebar('attach events', '.context.example .menu .item');

$(document).ready(function() {
    $('.secondary.menu .item').tab({
        history: false
    });
    $('.tabular.menu .item').tab({
        history: false
    });
});;

$(document).ready(function() {
    $('.ui.accordion').accordion();
});
