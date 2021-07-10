$(document).ready(function(){

	$('#add_button').click(function(){
		$('#categorie_form')[0].reset();
		$('.modal-title').text("Ajoût Categorie");

		$('#action').val("Ajoût");
		$('#operation').val("Ajoût");
	});
	
	var dataTable = $('#categorie_data').DataTable({
		"processing":true,
		"serverSide":true,
		"order":[],
		"ajax":{
			url:"../controllers/categorie_list_controler.php",
			type:"POST"
		},
		"columnDefs":[
			{
				"targets":[0, 3, 3],
				"orderable":false,
			},
		],

	});
	

	$(document).on('submit', '#categorie_form', function(event){
		event.preventDefault();

		var libele_cat = $('#libele_cat').val();
		var type = $('#type').val();
		var url = $('#url').val();
		var comment = $('#comment').val();
		
		if(libele_cat != '' && type != '' && url != '' && comment != '')
		{
			$.ajax({
				url:"../controllers/categorie_insert_controler.php",
				method:'POST',
				data:new FormData(this),
				contentType:false,
				processData:false,
				success:function(data)
				{
					alert(data);
					$('#categorie_form')[0].reset();
					$('#categorieModal').modal('hide');
					dataTable.ajax.reload();
				}
			});
		}
		else
		{
			alert("Remplir tous les champs");
		}
	});
	

	$(document).on('click', '.update', function(){
		var categorie_id = $(this).attr("id");
		$.ajax({
			url:"../controllers/categorie_update_controler.php",
			method:"POST",
			data:{categorie_id:categorie_id},
			dataType:"json",
			success:function(data)
			{
				$('#categorieModal').modal('show');

				$('#libele_cat').val(data.libele_cat);
				$('#type').val(data.type);
				$('#url').val(data.url);
				$('#comment').val(data.comment);


				$('.modal-title').text("Modifier categorie");
				$('#categorie_id').val(categorie_id);

				$('#action').val("Modifier");
				$('#operation').val("Modifier");
			}
		})
	});
	
	$(document).on('click', '.delete', function(){
		var categorie_id = $(this).attr("id");
		if(confirm("Etes-vous sur de vouloir supprimer ?"))
		{
			$.ajax({
				url:"../controllers/categorie_delete_controler.php",
				method:"POST",
				data:{categorie_id:categorie_id},
				success:function(data)
				{
					alert(data);
					dataTable.ajax.reload();
				}
			});
		}
		else
		{
			return false;	
		}
	});
	
	
});