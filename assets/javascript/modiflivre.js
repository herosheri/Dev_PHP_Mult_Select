$(function(){
    //alert('haha');

    var url_modif=$('#form_modif').attr('action');

    $('.modifier12').click(function(){
        //console.log($(this).attr('id')+" "+$(this).prop('id'));
        var id=$(this).attr('id');
        $('#form_modif').attr('action',url_modif+id);

        $('#cotation1').val($('#livre_'+id).text());
        $('#titre1').val($('#livre1_'+id).text());
        $('#edition1').val($('#livre2_'+id).text());
        $('#theme1').val($('#livre3_'+id).text());

        $('#nombre1').val($('#livre4_'+id).text());
        $('#type1').val($('#livre5_'+id).text());
        $('#observation1').val($('#livre6_'+id).text());
        $('#nombre1').val($('#livre7_'+id).text());
    });
});