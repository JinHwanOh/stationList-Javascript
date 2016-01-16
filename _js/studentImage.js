$(document).on('pageshow',"#student",function() {
	$.ajax({
		type:"POST",url:"students.json",dataType:"json",
		success:loadFunction,
		error: function(request,error) {
			alert("Network error has occured: " + error);
		}
	});
});
 function loadFunction(data) {
	 
	 start = data.studentInfo.students;
	 for(x=0;x<start.length;x++) {
		 $("#menu").append (
		 "<section data-role='collapsible'>" +
			"<h2 class='ui-btn ui-icon-" + start[x].studentName.toLowerCase() + " ui-btn-icon-left'>" + 
				"<span id = 'n" + x+ "'>" + start[x].studentName + "</span></h2>" + 
				"<div class='ui-grid-a'>" +
					"<div class='ui-block-b'>" +
						"<p>" +
						"<img src='_images/" + start[x].studentImage + "' width='150'>" +
						"</p>" +
					"</div>" +
					"<div class='ui-block-a'>" +
						
									"<li>" + "STUDENT NAME: " +										start[x].studentName +
																			"</li>" +
									"<li>" +  "STUDENT NUMBER: " +
																			start[x].studentNumber +
																			"</li>" +
									"<li>" +  "LOG IN: "  +
																			start[x].studentLogin +
																			"</li><br>" +
																											
								"</table>" +
					"</div>" + 
					
				"</div>" +
		"</section>"

		 );
		 $("#menu").collapsibleset("refresh");
		 
	 }
	 
 }