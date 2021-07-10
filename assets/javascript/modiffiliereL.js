$(function(){
    $("#dialogModif").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
                width:500,
                show : {effect : "clip",duration : 500
                },
                hide : {effect : "clip",duration : 500
                }
    });
    });
    function MofierCl(id){
        $("#dialogModif").dialog("open");

                $(function() {
                    var source = [];

                    $.getJSON('../index.php/ClientListeId?numero='+id, function(data) {
                        $.each(data.aaData, function(i, f) {
                            $("[name=numero1]").val(f.numero);
                            $("[name=nom1]").val(f.nom);
                            $("[name=prenom1]").val(f.prenom);
                            $("[name=adresse1]").val(f.adresse);
                            $("[name=cont1]").val(f.contact);
                            $("[name=mail1]").val(f.mail);
                            $("[name=typ2]").val(f.type);
                            $("[name=nif1]").val(f.nif);
                            $("[name=nomSoc1]").val(f.nomsociete);
                            $("[name=nomSer1]").val(f.nomservice);
                      });
                });
                });



    }
        function Fermer1(){
        $("#dialogModif").dialog("close");
    }
