<?php include 'includes/includes_Menus.php';?>  
  <div id="content">
    <div class="outer">
      <div class="inner bg-light lter">
        <div class="row" style="height: 1px">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
            <section class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                     <div align="left">
                      <button type="button" id="add_button" data-toggle="modal" data-target="#categorieModal" class="btn btn-info btn-lg">Créer categorie</button> <h4 align="right">LISTES CATEGORIES</h4>
                      </div>
                      <div class="card-body">
                        <div class="container box">
                          <div class="table-responsive">
                            <table id="categorie_data" class="table table-bordered table-striped">
                              <thead>
                                <tr>
                                  <th width="35%">Libellé</th>
                                  <th width="35%">Type</th>
                                  <th width="35%">Url</th>
                                  <th width="35%">Commentaire</th>

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

<script src="ajaxs/ajax_categorie.js"></script>
<?php include 'includes/includes_JS.php';?>
</body>    
</html>

<div id="categorieModal" class="modal fade">
  <div class="modal-dialog">
    <form method="post" id="categorie_form" enctype="multipart/form-data">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Ajoût</h4>
        </div>
        <div class="modal-body">

          <label>Libellé categorie</label>
          <input type="text" name="libele_cat" id="libele_cat" class="form-control" />
          <br/>

          <label>Type</label>
          <input type="text" name="type" id="type" class="form-control" />
          <br />

          <label>Url</label>
          <input type="text" name="url" id="url" class="form-control" />
          <br />

          <label>Commentaire</label>
          <input type="text" name="comment" id="comment" class="form-control" />
          <br />
          
        </div>
        <div class="modal-footer">
          <input type="hidden" name="categorie_id" id="categorie_id" />
          <input type="hidden" name="operation" id="operation" />
          <input type="submit" name="action" id="action" class="btn btn-success" value="Ajoût" />
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </form>
  </div>
</div>


