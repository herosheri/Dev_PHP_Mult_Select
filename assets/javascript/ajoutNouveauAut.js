$(function()
{
        $("#formSave_Aut").click(function(){
                    var auteur=$("#auteur").val();
                    if(auteur==''){
                                     swal({   title: "Message d'erreur!",   text: "Vérifiez le champs vide!",   timer: 1000,   showConfirmButton: false });
                    }
                    else{
                                    $.ajax({
                                                    url:'../AutAjout',
                                                    type:'POST',
                                                    data:$("#formAut").serialize(),
                                                    success:function(data){
                                                            swal({   title: "Message !",   text: data,   timer:  4000,   showConfirmButton: false });
                                                            location.reload();
                       }
                          });
            }
        });
});