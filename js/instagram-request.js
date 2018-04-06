
 /* Ajax request with Axips
    -------------------------------------------------------*/



var token = '1512142395.63188dc.55e45582bd444cdf960daf930471fa14';
 	

var infoUser = new Vue({
  el: '#vue-app-1',
  data: { 
    myUser:[]
  },
  	created(){
  		var vm = this;

		axios.get('https://api.instagram.com/v1/users/1512142395/?access_token=1512142395.63188dc.55e45582bd444cdf960daf930471fa14')
		  .then(function(response){
		 	
		 vm.myUser=response.data.data;

		  }); 


  	}


})


var mediaPost = new Vue({
  el: '#vue-app-2',
  data: { 
    images:[],
  },
  	created(){
  		var vm = this;
		axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=1512142395.63188dc.55e45582bd444cdf960daf930471fa14')
		  .then(function(response){
		 	
		 vm.images=response.data.data;

		  }); 

  	}


})


