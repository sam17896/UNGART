/*var headers = $(".wrap h1");
var imgs = ["imgs/folio1.jpg","imgs/folio2.jpg","imgs/folio3.jpg","imgs/folio3.jpg","imgs/folio2.jpg","imgs/folio1.jpg"];
var i = 0;
var quote = "upload with jquery";
$("#fifth").find('img').on('mouseover',function(e){
    e.preventDefault();
    
    switch($(this).attr('href'))
        {
            case 'imgs/team4.jpg':
                $('#detail').load("new.html");
                break;
            case 'imgs/team3.jpg':
                $('#detail').load("newk.html");
                break;
            case 'imgs/team2.jpg':
                $('#detail').load("newj.html");
                break;
            case 'imgs/team1.jpg':
                $('#detail').load("newm.html");
                break;
        }
});

$("#fifth").find('a').colorbox({rel:'gal'});

function load(){
    $("#detail").load("http://qoutes.fahadfarooq.com/");
}

headers.each(function(){
   $(this).on("mousemove",function(){
      $(this).addClass("highlight"); 
   });
    $(this).on("mouseleave",function(){
      $(this).removeClass("highlight"); 
   });
});

$("#Load").click(function(){
$("#sixth").find("input:first").after("<p> ERRORRR!!!!!</p>");
$("#sixth").find("input:nth-child(2)").after("<p> Good choice asshole</p>");
});


$("#FO").click(function(){
    headers.fadeOut();
});

$("#FT").click(function(){
    headers.fadeTo("normal",0.3);
});

$("#FT2").click(function(){
    headers.fadeTo("normal",1.0);
});

$("#RI").click(function(){
    setInterval(changeImage,1000);
});

function changeImage(){
    $(".row img").each(function(){
       $(this).attr("src",imgs[i++]); 

    });
    if(i>2)
        {
            i=0;
        }
}
$.addTemplateFormatter("up",function(value){
    return value.toUpperCase();
});

$('#container').loadTemplate($("#itemtemplate"),[
    {"name": "Jonny Doe"    , "job":"Designer"      , "img" : "imgs/team4.jpg"},
    {"name": "Kristin Doe"  , "job":"Developer"     , "img" : "imgs/team3.jpg"},
    {"name": "Jane Doe"     , "job":"Manger"        , "img" : "imgs/team2.jpg"},
    {"name": "Martin Doe"   , "job":"Video Director", "img" : "imgs/team1.jpg"}
]);
*/
var template = $("#itemtemplate").html();

var result = Mustache.render(template , 
    {"members" : [
        {"name": "Jonny Doe"    , "job":"Designer"      , "img" : "../imgs/team4.jpg"},
        {"name": "Kristin Doe"  , "job":"Developer"     , "img" : "../imgs/team3.jpg"},
        {"name": "Jane Doe"     , "job":"Manger"        , "img" : "../imgs/team2.jpg"},
        {"name": "Martin Doe"   , "job":"Video Director", "img" : "../imgs/team1.jpg"}
    ]
});

$('#container').html(result);


$("#fifth").find('img').on('mouseover',function(e){
    e.preventDefault();
    
    switch($(this).attr('src'))
        {
            case '../imgs/team4.jpg':
                $('#detail').load("new.html");
                break;
            case '../imgs/team3.jpg':
                $('#detail').load("newk.html");
                break;
            case '../imgs/team2.jpg':
                $('#detail').load("newj.html");
                break;
            case '../imgs/team1.jpg':
                $('#detail').load("newm.html");
                break;
        }
});
$("#container").sortable();
$("#container img").effect('puff',1500,function(){
    $(this).show();
});
//$("#name").datepicker();
$("#acc").accordion({
    header: 'header',
    heightStyle: 'content',
    collapsible: true 
});