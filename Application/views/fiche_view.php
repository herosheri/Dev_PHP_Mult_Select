<?php include 'includes/includes_Menus.php'; ?>

<link href="select2/select2.min.css" rel="stylesheet" />
<script src="select2/select2.min.js"></script>
<div id="content">
  <div class="outer">
    <div class="inner bg-light lter">
      <div class="row" style="height: 1px">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <section class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div align="left">
                      <button type="button" id="add_button" data-toggle="modal" data-target="#ficheModal" class="btn btn-info btn-lg">Créer fiche</button>
                      <h4 align="right">LISTES FICHES</h4>
                    </div>
                    <div class="card-body">
                      <div class="container box">
                        <div class="table-responsive">
                          <table id="fiche_data" class="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th width="35%">Libellé Fiche</th>
                                <th width="35%">Libellé Categorie</th>
                                <th width="35%">Description</th>
                                <th width="10%">Fiche</th>
                                <th width="10%">Modifier</th>
                                <th width="10%">Supprimer</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
<script src="ajaxs/ajax_fiche.js"></script>

<?php include 'includes/includes_JS.php'; ?>
</body>

</html>

<div id="ficheModal" class="modal fade">
  <div class="modal-dialog">
    <form method="post" id="fiche_form" enctype="multipart/form-data">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Ajoût Fiche</h4>
        </div>
        <div class="modal-body">
          <label>Libellé Fiche</label>
          <input type="text" name="libelle" id="libelle" class="form-control" />
          <br />

          <label>Libellé Categorie</label> <br />
          <select type="text" name="ref_cat[]" id="ref_cat" class="form-control multiple-select" multiple style="width: 570px;">
            <option> SELECT
              <option />

              <?php

              include('../controllers/select_categorie.php');

              $query_run = mysqli_query($con, $query);

              if (mysqli_num_rows($query_run) > 0) {

                foreach ($query_run as $rowhob) {
              ?>

            <option value="<?php echo $rowhob['id_cat']; ?>">
              <?php echo $rowhob['libele_cat']; ?>
            </option>

        <?php
                }
              } else {
                echo "No Record Found";
              }
        ?>


          </select>
          <br /> <br />
          <label>Description</label>
          <input type="text" name="description" id="description" class="form-control" />
          <br />
          <label>Fiche</label>
          <input type="file" name="fiche_image" id="fiche_image" />
          <span id="fiche_uploaded_image"></span>
        </div>
        <div class="modal-footer">
          <input type="hidden" name="fiche_id" id="fiche_id" />
          <input type="hidden" name="operation" id="operation" />
          <input type="submit" name="action" id="action" class="btn btn-success" value="Ajoût" />
          <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
        </div>
      </div>
    </form>
  </div>
</div>
<script>
  $(".multiple-select").select2({

  });
</script>