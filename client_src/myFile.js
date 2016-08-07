$(document).ready(function() {
    var global = window;
    global.Data = {
        getPeople: function() {
            return data;
        },
        getPerson: function (id) {
            return ( id ? data.filter(function (person) {
                return person.id == id;
            }) : this.getPeople() )[0];
        }
    }
    
    var data = [
        {
            name: "Andrey",
            surname: "Andreev",
            age: 29,
            hobby: "basketball",
            wife: "Andriana"
        },
        {
            name: "Slava",
            surname: "Slavov",
            age: 23,
            hobby: "yoga",
            wife: "Slaviana"
        },
        {
            name: "Dima",
            surname: "Dmitrov",
            age: 24,
            hobby: "kite-serfing",
            wife: "Dmitrina"
        },
        {
            name: "Kolya",
            surname: "Nikolaev",
            age: 25,
            hobby: "football",
            wife: "Nikolina"
        },
        {
            name: "Misha",
            surname: "Mihaylov",
            age: 21,
            hobby: "tennis",
            wife: "Mishelin"
        }
    ]
    
    
    var templateRaw = $('#person').html();
    var template = Handlebars.compile(templateRaw);
//    Handlebars.registerHelper('name', data.name);
    
//     Handlebars.registerHelper('surname', data.surname);
    
    var html = template({
        name: Data.getPerson()
    });
    
    $('#temp').html(html);
//    renderData();
    
//    function renderData() {
//        var html = template({data: Data.getData()});
//        $('#temp').html(html);
//    }
});
