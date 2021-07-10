$(function()
{
        $("#formModif_Theme").click(function(){
                    var numero=$("#idtheme1").val();
                    var theme=$("#theme1").val();
                    if(numero==''||theme==''){
                                    swal({   title: "Message d'erreur!",   text: "Vérifiez le champs vide!",   timer:  2500,   showConfirmButton: false });
                    }
                    else{
                                    $.ajax({
                                                    url:'../ThemeModif',
                                                    type:'POST',
                                                    data:$("#formTheme1").serialize(),
                                                    success:function(data){
                                                            swal({   title: "Message !",   text: data,   timer:  4000,   showConfirmButton: false });
                                                            location.reload();
                }
            });
            }
        });
});