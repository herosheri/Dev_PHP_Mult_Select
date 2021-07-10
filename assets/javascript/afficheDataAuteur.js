
    function MofierAut(id){

                $(function() {
                    var source = [];

                    $.getJSON('../AutListeId?numero='+id, function(data) {
                        $.each(data.aaData, function(i, f) {
                            $("[name=idauteur1]").val(f.id_auteur);
                            $("[name=auteur1]").val(f.nom_auteur);
                      });
                });
                });
    }
