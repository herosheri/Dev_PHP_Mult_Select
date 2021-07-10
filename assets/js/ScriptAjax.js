
 //AJAX Pour l'Ajout
 $(document).ready(function(){
		
	 
	 $('#Ajoute_materiel').click(function(){
			
		 var nom_mat=$('#nom_mat').val();
		 var type_mat=$('#type_mat').val();
		 var etat_mat=$('#etat_mat').val();
		 var nombre_mat=$('#nombre_mat').val();
		
		 if($.trim(nom_mat)!="" && $.trim(type_mat)!="" && $.trim(etat_mat)!="" && $.trim(nombre_mat)!=""){
			 $.ajax({
				 url:'insertion_materiel.jsp',
				 method:"POST",
				 data:{nom_mat:nom_mat,type_mat:type_mat,etat_mat:etat_mat,nombre_mat:nombre_mat},
				 success:function(data){
					 $('#nom_mat').val("");
					 $('#type_mat').val("");
					 $('#etat_mat').val("");
					 $('#nombre_mat').val("");		
					 swal("Alert!", " Insertion reuissie"); 
						
						setInterval(function(){					
							$("#pejyload").load("list_materiel.jsp");							
						});					
				 	}
			 });
		 }else{
			 alert("Veuillez remplir tout le champs", " Insertion reuissie"); 
				}
		 
	 });
	 
	 $('#Ajoute_utilisateur').click(function(){			
		 var nom_ut=$('#nom_ut').val();
		 var prenom=$('#prenom').val();
		 var telephone=$('#telephone').val();
		 var cartegorie=$('#cartegorie').val();
		 var mention=$('#mention').val();
		 var niveau=$('#niveau').val();
		 if($.trim(nom_ut)!="" && $.trim(nom_ut)!="" && $.trim(prenom)!="" && $.trim(telephone)!="" &&  $.trim(cartegorie)!="" &&  $.trim(mention)!="" &&  $.trim(niveau)!=""){
			 $.ajax({
				 url:'insertion_utilisateur.jsp',
				 method:"POST",
				 data:{nom_ut:nom_ut,prenom:prenom,telephone:telephone,cartegorie:cartegorie,mention:mention,niveau:niveau},
				 success:function(data){
					 $('#nom_ut').val("");
					 $('#prenom').val("");
					 $('#telephone').val("");
					 $('#cartegorie').val("");
					 $('#mention').val("");
					 $('#niveau').val("");	
					 
					 swal("Alert!", " Insertion reuissie"); 
					 
						setInterval(function(){					
							$("#pejyload").load("list_utilisateur.jsp");
							
						});						
				 }
			 });
		 }else{
			 alert("Veuillez remplir tout le champs", " Insertion reuissie"); 
			}	 
	 });
	 
	 $('#Ajoute_emprunt').click(function(){
			
		 var nom_ut=$('#nom_ut').val();
		 var prenom=$('#prenom').val();
		 var nom_mat=$('#nom_mat').val();
		 var nombre_sortie=$('#nombre_sortie').val();		 
		 var etat_sortie=$('#etat_sortie').val();
		 var date_sortie=$('#date_sortie').val();
		 var dure_utilisation=$('#dure_utilisation').val();			
		 var occupation=$('#occupation').val();
		 
		 if($.trim(nom_ut)!="" && $.trim(prenom)!="" && $.trim(nom_mat)!="" && $.trim(nombre_sortie)!="" && $.trim(etat_sortie)!="" && $.trim(date_sortie)!="" && $.trim(dure_utilisation)!="" && $.trim(occupation)!=""){
			 $.ajax({
				 url:'isertionemprunte.jsp',
				 method:"POST",
				 data:{nom_ut:nom_ut,prenom:prenom,nom_mat:nom_mat,nombre_sortie:nombre_sortie,etat_sortie:etat_sortie,date_sortie:date_sortie,dure_utilisation:dure_utilisation,occupation:occupation},
				 success:function(data){
					 $('#nom_ut').val("");
					 $('#prenom').val("");
					 $('#nom_mat').val("");
					 $('#nombre_sortie').val("");					 
					 $('#etat_sortie').val("");
					 $('#date_sortie').val("");
					 $('#dure_utilisation').val("");					
					 $('#occupation').val("");	
					 swal("Alert!", " Insertion reuissie"); 
						
						setInterval(function(){					
							$("#pejyload").load("list_empruntemateriel.jsp");
							
						});						
				 }
			 });
		 }else{
			 alert("Veuillez remplir tout le champs", " Insertion reuissie"); 
			}		 
	 });
	 
	 $('#Ajoute_depo').click(function(){
			
		 var nom_ut=$('#nom_ut').val();
		 var prenom=$('#prenom').val();
		 var nom_mat=$('#nom_mat').val();
		 var etat_mat=$('#etat_mat').val();		 
		 var nombre=$('#nombre').val();
		 var date_ret=$('#date_ret').val();
		 var saction=$('#saction').val();
		 var disponible=$('#disponible').val();				
		 
		 if($.trim(nom_ut)!="" && $.trim(prenom)!="" && $.trim(nom_mat)!="" && $.trim(nombre)!="" && $.trim(date_ret)!="" && $.trim(saction)!="" && $.trim(disponible)!=""){
			 $.ajax({
				 url:'isertiondisposition.jsp',
				 method:"POST",
				 data:{nom_ut:nom_ut,prenom:prenom,nom_mat:nom_mat,etat_mat:etat_mat,nombre:nombre,date_ret:date_ret,saction:saction,disponible:disponible},
				 success:function(data){
					 $('#nom_ut').val("");
					 $('#prenom').val("");
					 $('#nom_mat').val("");
					 $('#etat_mat').val("");					 
					 $('#nombre').val("");
					 $('#date_ret').val("");						
					 $('#saction').val("");
					 $('#disponible').val("");		
					 swal("Alert!", " Insertion reuissie"); 
						
						setInterval(function(){					
							$("#pejyload").load("list_deposition.jsp");
							
						});						
				 }
			 });
		 }else{
			 alert("Veuillez remplir tout le champs", " Insertion reuissie"); 
			}
		 	 
	 });
	 
	 //AJAX SUPPRIMER
	 
	 $('#supprimer_utilisateur').click(function(){
     	   var id = [];
     	   $('#checkbox:checked').each(function(i){
     		   id[i] = $(this).val();
     	   });
             	if(id.length === 0){
             		alert(" Veuillez cocher au moin un utilisateur !");
             	}else{
             		
             		swal({
	             		  title: "Etes-vous sur ?",
	             		  text: "de vouloir supprimer !",
	             		  type: "warning",
	             		  showCancelButton: true,
	             		  confirmButtonColor: "#DD6B55",
	             		  confirmButtonText: "Valider !",
	             		  closeOnConfirm: false
	             		},
	             		
	             		function(){
	             				for(var i=0; i<id.length; i++){            				
	             				$.get('supprimer_utilisateur.jsp?code='+id[i],function(){            					
	             				});
	             	         }
	             		  swal("Suppression !","Réussie");
	             		  setInterval(function(){
	   		              $("#pejyload").load("list_utilisateur.jsp");
	   		                 
	   		            });
             		});     			
             			
     			}
     	 });
			
		 $('#modifier_utilisateur').click(function(){
				var id = [];
	 	   $('#checkbox:checked').each(function(i){
	 		   id[i] = $(this).val();
	 	   });
	 	   
	 	   if(id.length === 1){
	 		   
	 	
	 		   	
	 		   		$("#pejyload").load('form_modif_utilisateur.jsp?code='+id);
	 		   		
	 		  
	        	}else if(id.length === 0){ 
	        		
	        		alert(" Veuillez cocher un utilisateur!");
				}else{
					
					alert(" Veuillez cocher un seul caze !");
				}
	
		 });
			
		 $('#supprimer_materiel').click(function(){
         	   var id = [];
         	   $('#checkbox:checked').each(function(i){
         		   id[i] = $(this).val();
         	   });
	               	if(id.length === 0){
	               		alert(" Veuillez cocher au moin un utilisateur !");
	               	}else{
	            		swal({
		             		  title: "Etes-vous sur ?",
		             		  text: "de vouloir supprimer !",
		             		  type: "warning",
		             		  showCancelButton: true,
		             		  confirmButtonColor: "#DD6B55",
		             		  confirmButtonText: "Valider !",
		             		  closeOnConfirm: false
		             		},
		             		
		             		function(){
		             				for(var i=0; i<id.length; i++){            				
		             				$.get('supprimer_materiel.jsp?code='+id[i],function(){            					
		             				});
		             	         }
		             		  swal("Suppression !","Réussie");
		             		  setInterval(function(){
		   		              $("#pejyload").load("list_materiel.jsp");
		   		                 
		   		            });
	             		});                			
         			}
         	 });
 			
 			
 			
 			$('#modifier_materiel').click(function(){
					var id = [];
      	   $('#checkbox:checked').each(function(i){
      		   id[i] = $(this).val();
      	   });
      	   
      	   if(id.length === 1){
      		   	
      		   	$("#pejyload").load('form_modif_materiel.jsp?code='+id);
      		   		
      		   
             	}else if(id.length === 0){ 
             		
             		alert(" Veuillez cocher un materiel!");
    			}else{
    				
    				alert(" Veuillez cocher un seul caze !");
    			}
    
			});
 			
 			$('#supprimer_empruntemat').click(function(){
            	   var id = [];
            	   $('#checkbox:checked').each(function(i){
            		   id[i] = $(this).val();
            	   });
 	               	if(id.length === 0){
 	               		alert(" Veuillez cocher au moin un emprunte !");
 	               	}else{
	 	               	swal({
		             		  title: "Etes-vous sur ?",
		             		  text: "de vouloir supprimer !",
		             		  type: "warning",
		             		  showCancelButton: true,
		             		  confirmButtonColor: "#DD6B55",
		             		  confirmButtonText: "Valider !",
		             		  closeOnConfirm: false
		             		},
		             		
		             		function(){
		             				for(var i=0; i<id.length; i++){            				
		             				$.get('supprimer_emprunte.jsp?code='+id[i],function(){            					
		             				});
		             	         }
		             		  swal("Suppression !","Réussie");
		             		  setInterval(function(){
		   		              $("#pejyload").load("list_empruntemateriel.jsp");
		   		                 
		   		            });
	             		});                		
            			}
            	 });
    			
    			
    			$('#modifier_emprunt').click(function(){
 					var id = [];
         	   $('#checkbox:checked').each(function(i){
         		   id[i] = $(this).val();
         	   });
         	   
         	   if(id.length === 1){
         		   
         	
         		   	
         		   $("#pejyload").load('form_modif_empruntemateriel.jsp?code='+id);
         		   		
         		  
                	}else if(id.length === 0){ 
                		
                		alert(" Veuillez cocher un emprunte!");
       			}else{
       				
       				alert(" Veuillez cocher un seul caze !");
       			}
       
 			});
    		
    			$('#supprimer_deposition').click(function(){
                	   var id = [];
                	   $('#checkbox:checked').each(function(i){
                		   id[i] = $(this).val();
                	   });
 		               	if(id.length === 0){
 		               		alert(" Veuillez cocher au moin un déposition !");
 		               	}else{
	 		               	swal({
			             		  title: "Etes-vous sur ?",
			             		  text: "de vouloir supprimer !",
			             		  type: "warning",
			             		  showCancelButton: true,
			             		  confirmButtonColor: "#DD6B55",
			             		  confirmButtonText: "Valider !",
			             		  closeOnConfirm: false
			             		},
			             		
			             		function(){
			             				for(var i=0; i<id.length; i++){            				
			             				$.get('supprimer_deposition.jsp?code='+id[i],function(){            					
			             				});
			             	         }
			             		  swal("Suppression !","Réussie");
			             		  setInterval(function(){
			   		              $("#pejyload").load("list_deposition.jsp");
			   		                 
			   		            });
		             		});   		               			
                			}
                	 });
        			
    			$('#modifier_depostion').click(function(){
 					var id = [];
	         	   $('#checkbox:checked').each(function(i){
	         		   id[i] = $(this).val();
	         	   });
	         	   
	         	   if(id.length === 1){
	         		   
	         	
	         		   	
	         		   		$("#pejyload").load('form_modif_deposition.jsp?code='+id);
	         		   		
	         		   
	                	}else if(id.length === 0){ 
	                		
	                		alert(" Veuillez cocher un emprunte!");
	       			}else{
	       				
	       				alert(" Veuillez cocher un seul caze !");
	       			}
	       
	 			});
    			
    			
    			
    			//ajax Modification
    			 $('#Modifier_materiel').click(function(){
    				 
    				 var id_mat=$('#id_mat').val();				
    				 var nom_mat=$('#nom_mat').val();
    				 var type_mat=$('#type_mat').val();
    				 var etat_mat=$('#etat_mat').val();
    				 var nombre_mat=$('#nombre_mat').val();
    				
    				 if($.trim(nom_mat)!="" && $.trim(type_mat)!="" && $.trim(etat_mat)!="" &&  $.trim(nombre_mat)!=""){
    						swal({
  		             		  title: "Etes-vous sur ?",
  		             		  text: "de vouloir Modifier !",
  		             		  type: "warning",
  		             		  showCancelButton: true,
  		             		  confirmButtonColor: "#DD6B55",
  		             		  confirmButtonText: "Confirmer !",
  		             		  closeOnConfirm: false
  		             		},
  		             		
  		             		function(){
  		             		 $.ajax({
  		             			 url:'modif_materiel.jsp?id='+id_mat,			
  	    						 method:"POST",
  	    						 data:{id_mat:id_mat,nom_mat:nom_mat,type_mat:type_mat,etat_mat:etat_mat,nombre_mat:nombre_mat},
  	    						
  	    						 success:function(data){
  	    							 $('#nom_mat').val("");
  	    							 $('#type_mat').val("");
  	    							 $('#etat_mat').val("");
  	    							 $('#nombre_mat').val("");    												
  	    						 }
  	    					 }); 
  		             		  swal("Modification !","Avec succée");
  		             		  setInterval(function(){
  		   		              $("#pejyload").load("list_materiel.jsp");
  		   		                 
  		   		            });
  	             		});     					 
    				 }else{
    					 alert("Veuillez remplir tout le champs", " Insertion reuissie"); 
    					}	 
    			 });
    			 
    			 $('#Modifier_utilisateur').click(function(){
    				 var id=$('#id').val();				
    				 var nom_ut=$('#nom_ut').val();
    				 var prenom=$('#prenom').val();
    				 var telephone=$('#telephone').val();
    				 var cartegorie=$('#cartegorie').val();
    				 var mention=$('#mention').val();
    				 var niveau=$('#niveau').val();
    				
    				 if($.trim(nom_ut)!="" && $.trim(prenom)!="" && $.trim(telephone)!="" &&  $.trim(cartegorie)!="" &&  $.trim(mention)!="" &&  $.trim(niveau)!=""){
    						swal({
  		             		  title: "Etes-vous sur ?",
  		             		  text: "de vouloir Modifier !",
  		             		  type: "warning",
  		             		  showCancelButton: true,
  		             		  confirmButtonColor: "#DD6B55",
  		             		  confirmButtonText: "Confirmer !",
  		             		  closeOnConfirm: false
  		             		},
  		             		
  		             		function(){
  		             		 $.ajax({
  	    						 url:'modif_utilisateur.jsp?id='+id,			
  	    						 method:"POST",
  	    						 data:{id:id,nom_ut:nom_ut,prenom:prenom,telephone:telephone,cartegorie:cartegorie,mention:mention,niveau:niveau},
  	    						
  	    						 success:function(data){
  	    							 $('#nom_ut').val("");
  	    							 $('#prenom').val("");
  	    							 $('#telephone').val("");
  	    							 $('#cartegorie').val("");
  	    							 $('#mention').val("");
  	    							 $('#niveau').val("");
  	    							 
  	    												
  	    						 }
  	    					 }); 
  		             		  swal("Modification !","Avec succée");
  		             		  setInterval(function(){
  		   		              $("#pejyload").load("list_utilisateur.jsp");
  		   		                 
  		   		            });
  	             		});   					 
    				 }else{
    					 alert("Veuillez remplir tout le champs", " Insertion reuissie"); 
    					}	 
    			 });
    			 
    			 $('#Modifier_emprunt').click(function(){
    				 
    				 var id_empr=$('#id_empr').val();				
    				 var nom_ut=$('#nom_ut').val();
    				 var prenom=$('#prenom').val();
    				 var nom_mat=$('#nom_mat').val();
    				 var nombre_sortie=$('#nombre_sortie').val();
    				 var etat_sortie=$('#etat_sortie').val();
    				 var date_sortie=$('#date_sortie').val();
    				 var dure_utilisation=$('#dure_utilisation').val();
    				 var occupation=$('#occupation').val();
    						
    				 if($.trim(nom_ut)!="" && $.trim(prenom)!="" && $.trim(nom_mat)!="" &&  $.trim(nombre_sortie)!="" &&  $.trim(etat_sortie)!="" &&  $.trim(date_sortie)!="" &&  $.trim(dure_utilisation)!=""  &&  $.trim(occupation)!=""){
    						swal({
    		             		  title: "Etes-vous sur ?",
    		             		  text: "de vouloir Modifier !",
    		             		  type: "warning",
    		             		  showCancelButton: true,
    		             		  confirmButtonColor: "#DD6B55",
    		             		  confirmButtonText: "Confirmer !",
    		             		  closeOnConfirm: false
    		             		},
    		             		
    		             		function(){
    		             		 $.ajax({
    		             			 url:'modif_empruntemateriel.jsp?id='+id_empr,			
    	    						 method:"POST",
    	    						 data:{id_empr:id_empr,nom_ut:nom_ut,prenom:prenom,nom_mat:nom_mat,nombre_sortie:nombre_sortie,etat_sortie:etat_sortie,date_sortie:date_sortie,dure_utilisation:dure_utilisation,occupation:occupation},
    	    						
    	    						 success:function(data){
    	    							 $('#nom_ut').val("");
    	    							 $('#prenom').val("");
    	    							 $('#nom_mat').val("");
    	    							 $('#nombre_sortie').val("");
    	    							 $('#etat_sortie').val("");
    	    							 $('#date_sortie').val("");
    	    							 $('#dure_utilisation').val("");
    	    							 $('#occupation').val("");
    	    											
    	    												
    	    						 }
    	    					 }); 
    		             		  swal("Modification !","Avec succée");
    		             		  setInterval(function(){
    		   		              $("#pejyload").load("list_empruntemateriel.jsp");
    		   		                 
    		   		            });
    	             		});      					 
    				 }else{
    					 alert("Veuillez remplir tout le champs", " Insertion reuissie"); 
    					}	 
    			 });
    			 
    			 $('#Modifier_depo').click(function(){
    				 
    				 var id_depo=$('#id_depo').val();				
    				 var nom_ut=$('#nom_ut').val();
    				 var prenom=$('#prenom').val();
    				 var nom_mat=$('#nom_mat').val();
    				 var etat_mat=$('#etat_mat').val();
    				 var nombre=$('#nombre').val();
    				 var date_ret=$('#date_ret').val();
    				 var saction=$('#saction').val();
    				 var disponible=$('#disponible').val();
    						
    				 if($.trim(nom_ut)!="" && $.trim(prenom)!="" && $.trim(nom_mat)!="" &&  $.trim(etat_mat)!="" &&  $.trim(nombre)!="" &&  $.trim(date_ret)!="" &&  $.trim(saction)!=""  &&  $.trim(disponible)!=""){
    						swal({
    		             		  title: "Etes-vous sur ?",
    		             		  text: "de vouloir Modifier !",
    		             		  type: "warning",
    		             		  showCancelButton: true,
    		             		  confirmButtonColor: "#DD6B55",
    		             		  confirmButtonText: "Confirmer !",
    		             		  closeOnConfirm: false
    		             		},
    		             		
    		             		function(){
    		             		 $.ajax({
    		             			 url:'modif_deposition.jsp?id='+id_depo,			
    	    						 method:"POST",
    	    						 data:{id_depo:id_depo,nom_ut:nom_ut,prenom:prenom,nom_mat:nom_mat,etat_mat:etat_mat,nombre:nombre,date_ret:date_ret,saction:saction,disponible:disponible},
    	    						
    	    						 success:function(data){
    	    							 $('#nom_ut').val("");
    	    							 $('#prenom').val("");
    	    							 $('#nom_mat').val("");
    	    							 $('#etat_mat').val("");
    	    							 $('#nombre').val("");
    	    							 $('#date_ret').val("");
    	    							 $('#saction').val("");
    	    							 $('#disponible').val("");
    	    							 
    	    												
    	    						 }
    	    					 }); 
    		             		  swal("Modification !","Avec succée");
    		             		  setInterval(function(){
    		   		              $("#pejyload").load("list_deposition.jsp");
    		   		                 
    		   		            });
    	             		});    					 
    				 }else{
    					 alert("Veuillez remplir tout le champs", " Insertion reuissie"); 
    					}	 
    			 });
    			 
	 
   });
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 