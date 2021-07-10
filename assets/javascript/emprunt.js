$(function(){
    //alert('haha');

    var url_modif=$('#form_modif').attr('action');

    $('.modifier12').click(function(){
        //console.log($(this).attr('id')+" "+$(this).prop('id'));
        var id=$(this).attr('id');
        $('#form_modif').attr('action',url_modif+id);

        $('#filiere_mod').val($('#fil_'+id).text());
    });
});