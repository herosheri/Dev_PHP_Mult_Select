
    function ModifierTheme(id){

                $(function() {
                    var source = [];

                    $.getJSON('../ThemeListeId?numero='+id, function(data) {
                        $.each(data.aaData, function(i, f) {
                            $("[name=idtheme1]").val(f.id_auteur);
                            $("[name=theme1]").val(f.nom_auteur);
                      });
                });
                });
    }
