$(document).ready(function() {                      /*js fo alll placeholder while focased*/               $('input').data('holder',$('input').attr('placeholder'));
    $('input').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('input').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });

/*for activepost from blog homepage*/ 
 $('.blog ').add                             
                              
});