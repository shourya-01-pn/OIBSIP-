$(".txt_input").on("keyup",function(e){
    //13 means enter button
    if(e.keyCode == 13 && $(".txt_input").val() != "")
    {
        var task = $("<div class = 'task'></div>").text($(".txt_input").val());
        
        var del = $("<i class = 'fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        var check = $("<i class = 'fas fa-check'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                $(".completed").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });

        task.append(del, check);
        $(".notcompleted").append(task);
        //to clear the input
        $(".txt_input").val("");
    }
});
