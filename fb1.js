 $( document ).ready(function() {  //loading of DOM
    //storing the token to a variable
    var myFacebookToken = 'EAACEdEose0cBADO8cDgl808f1nkJSZBYs7RkYqwMp3yDNKB0YJ2x4wCWB10Fx9lmAZAvBYZBzgL866ZBEZCh30ghh3PmOB5HseJB7TGOoGExk6MjhA8HqZCq32GC9ZBd2YLG7AvqgHpdlZCnRHg8iExA8JJL28355TVNObAJsbTwiPAwY9WxOCZAKCNRq6ma6CZAwZD';
 $('.loader').hide();//hidibg the loader at first
    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{ //ajax call to the api with the url

                success : function(response){ //fuction to execute on successfully receiving the api details to the response variable
                    console.log(response);//consoling the api data
                    console.log(typeof(response));
                    //getting values for the corresponding fields from the api data
                    $("#myname").val(response.first_name +' '+ response.last_name);
                    $("#mygender").val(response.gender);
                    $("#mydob").val(response.birthday);
                    $("#mymail").val(response.email);
                    $("#myschool").val(response.education[1].school.name);
                    $("#mycollege").val(response.education[2].school.name);
                    $("#myms").val(response.relationship_status);
                     $("#myproid").val(response.link);
                     $("#fbut").hide();


                },//end of success
                error : function(request,errorType,errorMessage){//function to handle error
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                },//end of error
                timeout:3000,//timeout for success
                beforeSend : function(){
                    $('.loader').show();//showing loader before executing action
                },//end of beforeSend
                complete : function(){
                   $('.loader').hide();//hiding loader after the completion of funtion on success

                }//end of complete


            }
             
 );// end ajax call 


    }// end get facebook info

    $("#fbut").on('click',getFacebookInfo);//declaring the event to be done on button click

    function getFacebookPost(){
        $.ajax('https://graph.facebook.com/me/posts?fields=id,message&access_token=' + myFacebookToken,{//ajax call to the api with the url

            success : function(response){//function to handle error
                    console.log(response);
                    console.log(typeof(response));
                    function ShowInfo(i,value){
                            $("#post").append('<p>'+'<b>'+(i+1)+'.'+'</b>'+'</p>'+'<p>'+'<b>'+'Id:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+'</b>' + response.data[i].id+'<br>'+'<b>'+'Message:&nbsp&nbsp&nbsp'+'</b>'+ response.data[i].message+'<br>'+'<b>'+'Link:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+'</b>'+response.data[i].link+'<br>'+'<b>'+'Created time:'+'</b>'+response.data[i].created_time+'</span>'+'<br>');
                      $("#fbut1").hide();
          }
           jQuery.each(response.data,ShowInfo);
                },
                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                },//end of error
                timeout:3000,//timeout for success
                beforeSend : function(){
                    $('.loader').show();//showing loader before executing action
                },//end of beforeSend
                complete : function(){
                   $('.loader').hide();//hiding loader after the completion of funtion on success

                }//end of complete
                
          
    }

);//end of ajax
}//end of function GetFacebookPost
 $("#fbut1").on('click',getFacebookPost);//declaring the event to be done on button click




  });//end