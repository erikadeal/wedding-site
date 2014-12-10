// App.js

/*****************
      INIT
*****************/

$(document).ready(function() {
    var nav = new PageNav();
    var page = new PageContent('home-content');
});

/******************
     GENERAL
******************/
/*
var setHeight = function (){
    var height = $(window).height();
    $('header').attr("style", "height: " + height + "px;");
};*/

/*******************
    NAVIGATION
*******************/

function PageNav() {
    this.populate('header');
}

PageNav.prototype.populate = function(ref) {
    $.Mustache.load('./templates/'+ ref + '.html')
        .done(function () {
            $('header').mustache(ref);
            addClickEvents();
    });
};

var addClickEvents = function() {
    $('nav li a').click(function() {
        var rel = $(this).attr("rel");
        $('.current').removeClass('current');
        $(this).addClass('current');
      //  window.location.hash = rel;

        var ref = rel.slice(1);
        $('.hero .text').empty();
        $('article').empty();
        var page = new PageContent(ref);

        $('body').attr('class', ref);
        console.log(ref);
    });

    $('.brand a').click(function() {
        $('body').attr('class', 'home');
    });
};

/******************
     CONTENT
******************/

function PageContent(ref) {
    this.ref = ref;
    this.getPageContent(this.ref);
}

PageContent.prototype.getPageContent = function(ref) {
    $.getJSON('./data/pages.json', function(data) {
        $.Mustache.load('./templates/' + ref + '.html')
            .done(function () {
                var heroRef = ref + '-hero'; 
                $('.hero .text').mustache(heroRef, data);
                $('article').mustache(ref, data);

                if (ref === 'travel') {
                    addHotelTabs();
                }
        });
    });
};

var addHotelTabs = function() {
    $('.tabs nav li').click(function() {
        var rel = $(this).attr('id');
        var dest = $('div[name="' + rel + '"]');
        $('.active').removeClass('active');
        dest.addClass('active');
    });
};