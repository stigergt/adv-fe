$(document).ready(function() {
    var postsJsonTemplateRaw=$('#posts-json-template').html();
    var postsTableTemplateRaw=$('#posts-table-template').html();
    
    var postsJsonTemplate = Handlebars.compile(postsJsonTemplateRaw);
    var postsTableTemplate = Handlebars.compile(postsTableTemplateRaw);
    
    Handlebars.registerHelper('json', function(posts){
       console.log(posts);
       return JSON.stringify(posts.slice(5,8), null, 1); 
    });
    
    Handlebars.registerHelper('table', function(posts, options) {
        return posts.map(function(post, number) { 
            if (number >= 2 && number < 8) {         
                return ('<div' + (number%2?' class=stripedEven':' class = stripedOdd') + '>' + options.fn(post) + '</div>')};
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