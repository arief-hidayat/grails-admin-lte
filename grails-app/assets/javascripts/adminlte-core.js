// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
// ... jquery${grails.util.Environment.current == grails.util.Environment.PRODUCTION ? '.min' : ''}.js
//= require jquery/jquery-${org.codehaus.groovy.grails.plugins.jquery.JQueryConfig.SHIPPED_VERSION}.min
//= require jquery-ui-1.10.3.min.js
//= require bootstrap-3.2.0.min.js
//= require AdminLTE/app.js
//= require jquery.cookie-1.4.1.min.js
//= require_self
$(document).ready(function(){
    var $sideMenu = $(".sidebar .treeview");
    $sideMenu.each(function(index){
        if($.cookie('imms.sel.menu:'+(index+1))) {
            $(this).find("a:eq(0)").click();
        }
    });
    $(".sidebar .treeview").on("click", function(){
        var $this = $(this);
        if($this.hasClass("active")) {
            $.cookie('imms.sel.menu:'+$this.index(), true, { path: '/' });
        } else {
            $.removeCookie('imms.sel.menu:'+$this.index(), { path: '/' });
        }
    });
});