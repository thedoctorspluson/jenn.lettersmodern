let burger = false;

$('#burgericon').click(function(){
    if(burger == false)
    {
        burger = true;
        $('nav').css("margin-top", "0px");
    }
    else if(burger == true)
    {
        burger = false;
        $('nav').css("margin-top", "-255px");
    }
});
    