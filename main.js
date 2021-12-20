$(function(){
	getPatientsList();
	$( "#dob" ).datepicker();
});

function getPatientsList(){
	$.ajax({
		url: 'ajax.php',
		type:'post',
		data:{action:'getPatientList'},
		dataType:'json',
		success: function(data){
			var html = '';
			if(data['d'].length === 0){
				html+='<tr>';
				html+='<td colspan="9" align="center">No Record Found</td>';
				html+='</tr>';
			}else{
				$.each(data['d'],function(index,value){
					html+='<tr id="patient_id_'+value.patient_id+'">';
					html+='<td>'+value.patient_id+'</td>';
					html+='<td>'+value.name+'</td>';
					html+='<td>'+value.age+'</td>';
					html+='<td>'+value.city+'</td>';
					html+='<td>'+value.state+'</td>';
					html+='<td>'+value.country+'</td>';
					html+='<td>'+value.dob+'</td>';
					html+='<td>'+value.blood_group+'</td>';
					html+='<td><i title="Edit" class="fa fa-pencil box-button" style="color:#3682c4;" aria-hidden="true" onclick="getPatientDetail('+value.patient_id+');"></i><i title="Delete" style="color:red;" class="fa fa-trash box-button" aria-hidden="true" onclick="deletePatient('+value.patient_id+');"></i></td>';
					html+='</tr>';
				});
			}
			$('.patient__list table tbody').html(html);
		}
	});
}

function savePatient(){
	var name = $('#name').val();
	var age = $('#age').val();
	var dob = $('#dob').val();
	var city = $('#city').val();
	var state = $('#state').val();
	var country = $('#country').val();
	var blood_group = $('#blood_group').val();
	var patient_id = $('#patient_id').val();
    
    var error_fields=[];
	if(name == ''){
		error_fields.push('Name');
	}
	if(age == '' || age < 1){
		error_fields.push('Age');
	}
	if(dob == ''){
		error_fields.push('DOB');
	}
	if(city == ''){
		error_fields.push('City');
	}
	if(state == ''){
		error_fields.push('State');
	}
	if(country == ''){
		error_fields.push('Country');
	}
	if(blood_group == ''){
		error_fields.push('Blood Group');
	}
	if(error_fields != ''){
		$('.toast__message').html('Please enter valid '+error_fields.toString());
		$('.toast__message').removeClass('hide_div success-message__display').addClass('show_div error-message__display');
		return false;
	}

	$.ajax({
		url: 'ajax.php',
		type:'post',
		data:{patient_id:patient_id,name:name,age:age,dob:dob,city:city,state:state,country:country,blood_group:blood_group,action:'savePatient'},
		dataType:'json',
		success: function(data){
			getPatientsList();
			cancelForm();
			if(data['s'] == 1){
				$('.toast__message').html(data['m']);
				$('.toast__message').removeClass('hide_div error-message__display').addClass('show_div success-message__display');
			}else{
				$('.toast__message').html(data['m']);
				$('.toast__message').removeClass('hide_div success-message__display').addClass('show_div error-message__display');
			}
		}

	});
}
function deletePatient(patient_id){
	if(patient_id > 0){
		if(confirm('Are you sure you want o delete the patient details?')){
			$.ajax({
				url: 'ajax.php',
				type:'post',
				data:{action:'deletePatient','patient_id':patient_id},
				dataType:'json',
				success: function(data){
					if(data['s'] == 1){
						$('#patient_id_'+patient_id).remove();
					}
				}
			});
		}
	}
}
function getPatientDetail(patient_id){
	if(patient_id > 0){
		$.ajax({
			url: 'ajax.php',
			type:'post',
			data:{action:'getPatientDetail','patient_id':patient_id},
			dataType:'json',
			success: function(data){
				var detail = data['d'];
				$('#name').val(detail.name);
				$('#age').val(detail.age);
				$('#dob').val(detail.dob);
				$('#city').val(detail.city);
				$('#state').val(detail.state);
				$('#country').val(detail.country);
				$('#blood_group').val(detail.blood_group);
				$('#patient_id').val(detail.patient_id);
				onAddPatientButtonClick();
			}
		});
	}	
}
function onAddPatientButtonClick(){
	$('.add-patient__button,.patient__list,.toast__message').removeClass('show_div').addClass('hide_div');
	$('.add-patient__form').removeClass('hide_div').addClass('show_div');
}
function cancelForm(){
	$('#patient-form__main')[0].reset();
	$('#patient_id').val('');
	$('.add-patient__button,.patient__list').removeClass('hide_div').addClass('show_div');
	$('.add-patient__form,.toast__message').removeClass('show_div').addClass('hide_div');
}
