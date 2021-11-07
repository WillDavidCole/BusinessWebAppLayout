addTab = function() 
{
    var i = $('.tablinks:contains("New")').length + 1;
    $('<button id="button" type="button" class="tablinks close-button" onclick="reName(event)" onkeydown="completeRename(event)" data-close>Tab' + i + '<span aria-hidden="true">&times;</span></button>').insertBefore('#button-plus');
};

completeRename = function(e)
{
    if(e.keyCode === 13)
    {
        console.log(e.keyCode);
        $(this).blur();
        $(this).attr('contentEditable', false); 
    }
};

reName = function(){
    $(function() {
        $('.tablinks').on('click', function() {
            $(this).attr('contentEditable', true); 
        });
        $('.tablinks').on('blur', function() {
            $(this).attr('contentEditable', false); 
        });
    })
};