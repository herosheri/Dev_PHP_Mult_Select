$(function()
{
        $("#formSave_newAjCl2").click(function(){
                    var dateprevu=$("#calendar1").val();
                    var id_emprunt=$("#id1").val();

                    if(dateprevu==''||id_emprunt==''){
                                    alert("Verifiez les champs vides");
                    }
                    else{
                                    $.ajax({
                                                    url:'../ModifEmprunt',
                                                    type:'POST',
                                                    data:$("#form2").serialize(),
                                                    success:function(data){

                                                            swal({   title: "Message !",   text: data,   timer:  4000,   showConfirmButton: false });
                                                            location.reload();
                }
            });
            }
        });
});