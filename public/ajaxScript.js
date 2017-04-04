$(function(){
	$('.btn').on('click', function(){
		$.ajax({
			url:"http://localhost:3000/sendArticles",
			method:"post",
			data:{
				name:$('#name').val(),
				email:$('input[name="email"]').val(),
				phoneNum:$('input[name="phoneNum"]').val(),
				subject:$('input[name="subject"]').val(),
				text:$('textarea[name="text"]').val()
			},
			dataType:'json',
			success:function(res){},
			error:function(res){}
		});
	});
});