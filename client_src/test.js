$(document).ready(function() {
    var postsJsonTemplateRaw=$('#posts-json-template').html();
    var postsTableTemplateRaw=$('#posts-table-template').html();
    
    var postsJsonTemplate = Handlebars.compile(postsJsonTemplateRaw);
    var postsTableTemplate = Handlebars.compile(postsTableTemplateRaw);
    
    Handlebars.registerHelper('json', function(properties){
       console.log(properties);
       return JSON.stringify(properties.slice(5,8), null, 1); 
    });
    
    Handlebars.registerHelper('table', function(text, options) {
        return text.map(function(property, i) {
            return ('<div' + (i%2?' class=stripedEven':' class = stripedOdd') + '>' + options.fn(property) + '</div>');
        }).join('');
    });
    
    renderJsonPosts();
    renderTablePosts();
    
    function renderJsonPosts() {
        var html = postsJsonTemplate({posts: Data.getPosts()});
        $('.posts-json').html('<pre>' + html+ '</pre>');
    };
    
    function renderTablePosts() {
        var html = postsTableTemplate({posts: Data.getPosts()});
        $('.posts-table').html(html);
    }
    
    
    
    
});