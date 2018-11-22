/**
Sources:
https://www.w3schools.com/js/default.asp
https://stackoverflow.com/questions/tagged/javascript
 * Created by steve on 17/04/2017.
 */

$(document).ready(function(){
    $(".accordion").click(function(){
        var a="#"+$(this).attr("id")+"-panel"
        $(a).slideToggle("slow");
    });
});


$(document).ready(function() {

    $('#update-form').submit(function(event) {

        var formData= JSON.stringify($(this).serializeObject());
        console.log(formData);

        $.ajax({
            type: "PUT",
            dataType: "json",
            url: "process.php?x="+formData,
            data: formData,
            //contentType: "application/json; charset=utf-8",
            success: function(data){
                console.log(data);
                document.getElementById("demo").innerHTML =data;
            },
            error: function(data){
                console.log(data);
                document.getElementById("demo").innerHTML ='False';
            }
        });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

    $('#create-form').submit(function(event) {

        //var formData=JSON.stringify($(this).serializeObject());
        //console.log(formData);

        var UID = document.getElementById("UID").value
        var RSS = document.getElementById("RSS").value

        var newObj = {UID: UID, RSS: RSS};

        // process the form
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "http://192.168.1.7:8080",
            data: JSON.stringify(newObj),
            //contentType: "application/json; charset=utf-8",
            success: function(data){
                console.log(data);
                document.getElementById("demo").innerHTML = data;
            },
            error: function(data){
                console.log(data);
                document.getElementById("demo").innerHTML = data;
            }
        });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();

    });

    $('#recall-form').submit(function(event) {

        event.preventDefault();
        var UID = document.getElementById("UIDGET").value
        var newObj = {UID: UID};

        $.ajax({
            type: "GET",
            dataType: "json",
            crossDomain:true,
            url: "http://192.168.1.7:8080?UID="+UID,
            //contentType: "application/json; charset=utf-8",
            success:function(data) {
              document.getElementById("demo").innerHTML = data;
              console.log(data);
            },
            error:function(data) {
              document.getElementById("demo").innerHTML = data;
              console.log(data);
            },

        });

        // stop the form from submitting the normal way and refreshing the page
        
    });

    $('#delete-form').submit(function(event) {

        var formData= JSON.stringify($(this).serializeObject());
        console.log(formData);

        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: "process.php?x="+formData,
            data: formData,
            //contentType: "application/json; charset=utf-8",
            success: function(data){
                console.log(data);
                document.getElementById("demo").innerHTML = data;
            },
            error: function(data){
                console.log(data);
                document.getElementById("demo").innerHTML = data;
            }
        });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

$.fn.serializeObject = function()
{
    var o = {"table":"reading_list_item",};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

});
