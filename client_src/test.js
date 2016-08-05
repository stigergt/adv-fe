$(document).ready(function() {
    var postsJsonTemplateRaw=$('#post-json-template').html();
//    var postsTableTemplateRaw=$('#posts-table-template').html();
    
    var postsJsonTemplate = Handlebars.compile(postsJsonTemplateRaw);
//    var postsTableTemplate = Handlebars.compile(postsTableTemplateRaw);
    
    Handlebars.registerHelper('json',function(properties){
       return JSON.stringify(properties); 
    });
    
    renderJson();
    
    function renderJson() {
        var html = postsJsonTemplate({posts: Data.getPosts()});
        $('#posts-json').html(html);
    };
    
    
    
    
});