/*$(function(){
        function MofierCl(id){

                /*$(function() {
                    var source = [];

                    $.getJSON('../ListeIdEmprunt?id_emprunt='+id, function(data) {
                        $.each(data.aaData, function(i, f) {
                            $("[name=matricule1]").val(f.user_id);
                            $("[name=dateprevu1]").val(f.date_prevu_rem);
                      });
                });
                });
            alert(id);
    }
}*/

    function MofierCl(id,date,matricule){
        $(function(){
            $("[name=dateprevu1]").val(date);
            $("[name=matricule1]").val(matricule);
            $("[name=id1]").val(id);
        });

    };

