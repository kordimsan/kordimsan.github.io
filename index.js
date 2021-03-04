$(function () {
    $(".like").click(function () {
        var input = $(this).find('.qty');
        input.val(parseInt(input.val())+ 1);
    });

    $(".dislike").click(function () {
        var input = $(this).find('.qty');
        input.val(input.val() - 1);
    });
});