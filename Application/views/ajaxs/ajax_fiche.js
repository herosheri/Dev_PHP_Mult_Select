$(document).ready(function () {
  $('#add_button').click(function () {
    $('#fiche_form')[0].reset();
    $('.modal-title').text("Ajoût Fiche");

    $('#action').val("Ajoût");
    $('#operation').val("Ajoût");

    $('#fiche_uploaded_image').html('');
  });

  var dataTable = $('#fiche_data').DataTable({
    "processing": true,
    "serverSide": true,
    "order": [],
    "ajax": {
      url: "../controllers/fiche_list_controler.php",
      type: "POST"
    },
    "columnDefs": [
      {
        "targets": [0, 3, 4],
        "orderable": false,
      },
    ],

  });


  $(document).on('submit', '#fiche_form', function (event) {
    event.preventDefault();
    var ref_cat =  $('#ref_cat').val();
    var libelle = $('#libelle').val();
    var description = $('#description').val();
    var extension = $('#fiche_image').val().split('.').pop().toLowerCase();
    if (extension != '') {
      if (jQuery.inArray(extension, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
        alert(" Image Invalid");
        $('#fiche_image').val('');
        return false;
      }
    }
    if (ref_cat != '' && libelle != '' && description != '') {
      $.ajax({
        url: "../controllers/fiche_insert_controler.php",
        method: 'POST',
        data: new FormData(this),
        contentType: false,
        processData: false,
        success: function (data) {
          alert(data);
          $('#fiche_form')[0].reset();
          $('#ficheModal').modal('hide');
          dataTable.ajax.reload();
        }
      });
    }
    else {
      alert("Remplir tous les champs");
    }
  });


  $(document).on('click', '.update', function () {
    var fiche_id = $(this).attr("id");
    $.ajax({
      url: "../controllers/fiche_update_controler.php",
      method: "POST",
      data: { fiche_id: fiche_id },
      dataType: "json",
      success: function (data) {
        $('#ficheModal').modal('show');

        $('#ref_cat').val(data.ref_cat);
        $('#libelle').val(data.libelle);
        $('#description').val(data.description);

        $('.modal-title').text("Modifier Fiche");
        $('#fiche_id').val(fiche_id);
        $('#fiche_uploaded_image').html(data.fiche_image);

        $('#action').val("Modifier");
        $('#operation').val("Modifier");

      }
    })
  });

  $(document).on('click', '.delete', function () {
    var fiche_id = $(this).attr("id");
    if (confirm("Etes-vous sur de vouloir supprimer ?")) {
      $.ajax({
        url: "../controllers/fiche_delete_controler.php",
        method: "POST",
        data: { fiche_id: fiche_id },
        success: function (data) {
          alert(data);
          dataTable.ajax.reload();
        }
      });
    }
    else {
      return false;
    }
  });


});