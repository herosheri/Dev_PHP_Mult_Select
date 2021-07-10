$(function()
{
        $("#formSave_Theme").click(function(){
                    var theme=$("#theme").val();
                    if(theme==''){
                                     swal({   title: "Message d'erreur!",   text: "Vérifiez le champs vide!",   timer: 1000,   showConfirmButton: false });
                    }
                    else{
                                    $.ajax({
                                                    url:'../ThemeAjout',
                                                    type:'POST',
                                                    data:$("#formTheme").serialize();
                                                    success:function(data){
                                                            swal({   title: "Message !",   text: data,   timer:  4000,   showConfirmButton: false });
                                                            location.reload();
                       }
                          });
            }
        });
});