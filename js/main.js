(function ($) {
    $(document).ready(function () {

        $(".gists-header").click(function () {
            $(".gists").toggle(function () {
                if ($(".gists").is(":visible") && $.isEmptyObject(jPut.gist.data)) {
                    $(".gists .spinner").show();
                    $.get("https://api.github.com/users/basdanny/gists", function (data) {
                        jPut.gist.data = data.slice(0, 3);
                        $(".gists .spinner").hide();
                    });
                }
            });
        });


        $(".somequestions-header").click(function () {
            $(".stackoverflow").toggle();
        });

        $("li.filter").click(function () {
            jPut.stackoverflow.data = [];
            $(".stackoverflow .spinner").show();
            $.get("https://api.stackexchange.com/2.2/search?order=desc&sort=votes&tagged=" + encodeURIComponent($(this).text()) + "&site=stackoverflow", function (data) {
                jPut.stackoverflow.data = data.items;
                $(".stackoverflow .spinner").hide();
            });
        });
    });
}(jQuery));
