function confirmationTheme(identifiant)
 {
      if(identifiant=="")
 {
 alert("suppression non effectué");
 }
      else
  {
        var question= confirm("voulez vous supprimer le thème "+identifiant);

        if(question)
        {
        $.ajax(

            {
            type:'GET',
                url:'../ThemeSuppr?numero='+identifiant,
                success:function(data)
                {
                swal({   title: "Message de success!",   text: data,   timer:  900000,   showConfirmButton: false });
                 location.reload();
                }


            });//end ajax
            //document.location.href="supression.php?idplane="+identifiant;
        }
}
}