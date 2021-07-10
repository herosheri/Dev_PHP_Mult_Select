$( document ).ready(function() {
        $('#exemple1').dataTable(
            {
            "sScrollY": "300px",
            "bScrollCollapse": true,
            "aaSorting": [ [0,'desc'] ],
            "bJQueryUI": true,
            "bSort": false,
            "bPaginate": false
            });
    });