function confirmationAuth(identifiant)
 {
      if(identifiant=="")
 {
 alert("suppression non effectué");
 }
      else
  {
        var question= confirm("voulez vous supprimer l' auteur "+identifiant);

        if(question)
        {
        $.ajax(

            {
            type:'GET',
                url:'../AutSuppr?numero='+identifiant,
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