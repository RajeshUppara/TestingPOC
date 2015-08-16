$(document).ready(function() {
    function expandlogin() {                
        $("#loginpagediv").animate({            
            height: '+=276px',                   
        });
        
        $('#logincontentdiv').addClass('logincontent');
        $('#logincontenttopdiv').addClass('logincontenttop');
    }
   $("#loginregister").on('click',expandlogin);                        
});