module.exports=$.fn.extend({

	setScore:function(target){

		var currentScore=parseInt($(this).html());

		if(currentScore==target){
			return
		}

		var newTarget=target-100;

		$(this).html(newTarget);

		var father=$(this);

		var t=setInterval(function(){

			newTarget=newTarget+1;
			
			if(newTarget>target){

				clearInterval(t)
				return
			}
			father.html(newTarget);
		},1)

	}

})