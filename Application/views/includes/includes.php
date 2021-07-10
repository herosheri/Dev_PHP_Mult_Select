  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Gestion</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="assets/plugins/select2/select2.min.css">
    <link rel="stylesheet" href="assets/dist/css/jquery-ui.css">
    <link rel="stylesheet" href="assets/plugins/iCheck/all.css">
    <link rel="stylesheet" href="assets/plugins/colorpicker/bootstrap-colorpicker.min.css">
    <link rel="stylesheet" href="assets/plugins/timepicker/bootstrap-timepicker.min.css">
    <link href="assets/includes/assets/datatables/css/dataTables.bootstrap.css" rel="stylesheet"/>  
    <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/> 
    <link href="assets/styles/css/main.css" rel="stylesheet"/> 
    <link href="assets/includes/css/font-awesome.min.css" rel="stylesheet" />      
    <script src="assets/assets/jquery/jquery-2.1.4.min.js"></script>
    <link href="assets/includes/css/style.css" rel="stylesheet"/> 
    <link href="assets/css/jquery.dataTables.min.css" rel="stylesheet" />
    <link href="assets/css/buttons.dataTables.min.css" rel="stylesheet" />
    <style>
      body{  
       background-image: url('assets/styles/img/V.png');
      }
    </style>
   </head>
      <div class="bg-dark dk" id="wrap">
                <div id="top">
                    <nav class="navbar navbar-inverse navbar-static-top">
                        <div class="container-fluid">
                    
                            <header class="navbar-header">
                    
                            
                                 <a class="navbar-brand"></a>
                    
                            </header>
                    
                            <div class="topnav">
                                <div class="btn-group">
                                    <a data-placement="bottom" data-original-title="Agrandir" data-toggle="tooltip"
                                       class="btn btn-default btn-sm" id="toggleFullScreen">
                                        <i class="glyphicon glyphicon-fullscreen"></i>
                                    </a>
                                </div>                               
                                <div class="btn-group">
                                    <a href="" data-toggle="tooltip" data-original-title="Déconection" data-placement="bottom"
                                       class="btn btn-metis-1 btn-sm">
                                        <i class="glyphicon glyphicon-off"></i>
                                    </a>
                                </div>                                                  
                            </div>

                            <div class="collapse navbar-collapse navbar-ex1-collapse">
                                <ul class="nav navbar-nav">
                                    <li class="active"> 
                                        <a href='index.php'>
                                          Acceuil</a></li>
                                    <li class='dropdown '>
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                            Info<b class="caret"></b>
                                        </a>
                                        <ul class="dropdown-menu">
                                           <li>
                                              <li><a href='#'> - </a> </li>
                                              <li><a href='#'> - </a> </li>
                                              <li><a href='#'> - </a> </li>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <header class="head">
                            <div class="search-bar">
                                <form class="main-search" action="">
                                    <div class="input-group">
                                         <span class="input-group-btn">
                                            <button class="btn btn-primary btn-sm text-muted" type="button">
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            <div class="main-bar">                        
                        </div>
                   </header>
               </div>
                    <div id="left">
                        <div class="media user-media bg-dark dker">
                           
                            <div class="user-wrapper bg-dark"><br/>

                               <a class="user-link" href="">
                                    
                                </a>
                        
                        
                                <div class="media-body">
                                  
                                   <h5 class="media-heading">GESTIONS</h5>  
                                    <ul class="list-unstyled user-info">
                                        <li>Categories et<br>
                                            Fiches
                                        </li>
                                    </ul>
                                    <br/>
                      
                                </div>
                            </div>
                        </div>
                        <ul id="menu" class="bg-blue dker">
                        <meter min=0 max=0 style="width:180px"></meter>
                                  <li class="nav-header">Menu</li>
                                  <li class="">
                                      <li>
                                        <a href='index.php'>      
                                        <i class="glyphicon glyphicon-home"></i>&nbsp; Acceuil  </a>
                                      </li>
                                    </a>
                                  </li>

                                  <li class="">
                                    <a href="javascript:;">
                                        <i class=""></i>
                                      <span class="glyphicon glyphicon-plus">&nbsp;Gestions</span>                                    
                                    
                                    </a>
                                    <ul class="collapse">
                              
                                      <li>
                                        <a href='Application/views/categorie_view.php'>    
                                        <i class="glyphicon glyphicon-minus"></i>&nbsp; Categories</a>
                                      </li>
                                      <li>
                                        <a href='Application/views/fiche_view.php'>
                                        <i class="glyphicon glyphicon-minus"></i>&nbsp; Fiches</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                    </div>
               





























