const var times = 24*15
$(document).ready(function(){
	$(document).on('click',thing,function(){
		$(div).empty()

		var table = $('<table></table>').addClass(tablestyle);
		for(i=0; i<3; i++){
		    var row = $('<tr></tr>').addClass('bar').text('result ' + i);
		    table.append(row);
		}

		$(sometable).append(table);

	}
		

	});


        });