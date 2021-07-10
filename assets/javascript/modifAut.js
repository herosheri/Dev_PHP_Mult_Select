$(function()
{
        $("#formModif_Aut").click(function(){
                    var numero=$("#idauteur1").val();
                    var auteur=$("#auteur1").val();
                    if(numero==''||auteur==''){
                                    swal({   title: "Message d'erreur!",   text: "Vérifiez le champs vide!",   timer:  2500,   showConfirmButton: false });
                    }
                    else{
                                    $.ajax({
                                                    url:'AutModif',
                                                    type:'POST',
                                                    data:$("#formAut1").serialize(),
                                                    success:function(data){
                                                            swal({   title: "Message !",   text: data,   timer:  4000,   showConfirmButton: false });
                                                            location.reload();
                                                            alert("huhu");
                }
            });
            }
        });
});