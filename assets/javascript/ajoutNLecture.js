$(function()
{
        $("#formSave_Lect").click(function(){
                    var auteur=$("#matricule").val();
                    var auteur=$("#livre").val();
                    if(auteur==''){
                                     swal({   title: "Message d'erreur!",   text: "Vérifiez le champs vide!",   timer: 1000,   showConfirmButton: false });
                    }
                    else{
                                    $.ajax({
                                                    url:'../LectureC/Ajout_Lecture',
                                                    type:'POST',
                                                    data:$("#formLect").serialize(),
                                                    success:function(data){
                                                            swal({   title: "Message !",   text: data,   timer:  4000,   showConfirmButton: false });
                                                            location.reload();
                       }
                          });
            }
        });
});