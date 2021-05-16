(function ($) {
    $(document).ready(function () {

        $.get("https://api.github.com/users/basdanny/gists", function (data) {
            jPut.gist.data = data;
            $(".gist .fa-spin").hide();
        });

        $(".stackoverflow .fa-spin").hide();

        $(".somequestions").click(function () {
            $(".stackoverflow").toggle();
        });

        $("li.filter").click(function () {
            jPut.stackoverflow.data = [];
            $(".stackoverflow .fa-spin").show();
            $.get("https://api.stackexchange.com/2.2/search?order=desc&sort=votes&tagged=" + encodeURIComponent($(this).text()) + "&site=stackoverflow", function (data) {
                jPut.stackoverflow.data = data.items;
                $(".stackoverflow .fa-spin").hide();
            });
        });
    });
}(jQuery));
