/**
 * Created by weily on 06/18/2018.
 */
(function ($) {
    $.fn.foldedMenu = function (options) {
        var settings = $.extend({
            'topMenu': '.menu_item',
            'topMenuTitle': 'h2',
            'topMenuClick': '.menu_item a',
            'childMenu': '.menu_item_child',
            'childMenuClick': '.menu_item_child li',
            'menuShow': 'menu_show',
            'menuCheck': 'check',
            'mainConItem': '.main_con_item',
            'mainConItemChild': 'li',
            'breadcrumb': false
        }, options)
        $(settings.topMenuClick).on('click', function () {
            if ($(this).next(settings.childMenu).css('display') == "none") {
                $(settings.topMenu).children(settings.childMenu).slideUp(300);
                $(this).next(settings.childMenu).slideDown(300);
                $(this).parent(settings.topMenu).addClass(settings.menuShow).siblings(settings.topMenu).removeClass(settings.menuShow);
            } else {
                $(this).next(settings.childMenu).slideUp(300);
                $(settings.topMenu).removeClass(settings.menuShow);
            }
        })

        $(settings.childMenuClick).on('click', function () {
            var index = $(this).index();
            var Pindex = $(this).parents(settings.topMenu).index();
            $(settings.mainConItem).eq(Pindex).show().siblings().hide()
            $(settings.childMenuClick).removeClass(settings.menuCheck)
            $(this).addClass(settings.menuCheck).siblings().removeClass(settings.menuCheck);
            $(settings.mainConItem).eq(Pindex).find(settings.mainConItemChild).eq(index).show().siblings().hide()
        })
        return this;
    }
})(jQuery)