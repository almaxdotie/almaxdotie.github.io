function fnExpandReferencesDiv() {
    console.log("Button to check media query Clicked");
    var mq = window.matchMedia("(min-width: 768px)");

    if (mq.matches) { // window width is at least 768px
        console.log(" window width is at least 500px");
        document.getElementById("collapseReferences").className += " in";

    }
    else { // window width is less than 768px
        console.log(" window width is less than 768px");
    }
}

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));