(function ($) {
    $(document).ready(function () {

        $(".fa-spin").hide();


        $(".gists-header").click(function () {
            $(".gists").toggle(function () {
                if ($(".gists").is(":visible") && $.isEmptyObject(jPut.gist.data)) {
                    $(".gists .fa-spin").show();
                    $.get("https://api.github.com/users/basdanny/gists", function (data) {
                        jPut.gist.data = data.slice(0, 3);
                        $(".gists .fa-spin").hide();
                    });
                    $(".gists .fa-spin").hide();
                }
            });
        });


        $(".somequestions-header").click(function () {
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
