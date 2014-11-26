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

var setHeight = function (){
    var height = $(window).height();
    $('.hero').attr("style", "height: " + height + "px;");
}

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
        window.location.hash = rel;

        var ref = rel.slice(1);
        $('.hero .text').empty();
        $('.container').empty();
        var page = new PageContent(ref);

        $('body').attr('class', ref);
    });
}

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
                $('.container').mustache(ref, data);

                setHeight();
        });
    });
}

