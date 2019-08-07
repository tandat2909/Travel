//============= animation-spECIAL DEALS================================
       

var sp_items = document.getElementById("special").getElementsByClassName("item"); 
        var sp_items_lenght = sp_items.length ; // so phan tu item
        var width=0; // chieu dai cua item

        function add_animation (width) 
        {
          
           for(var i = 0 ; i < 7 ; i++)
            {
                sp_items[i].classList.add('animation-sp');
                sp_items[i].style.transform = 'translateX(' + width + '%)';
            }
        }



        function right_sp()
        {
            width -=110 ;
            if(width >= -(sp_items_lenght -4)*110) // (sp_items_lenght -4) = so item an chua hien thi ; 4 là số item được hiển thị mặc định "action" 
                          
                add_animation (width);
              
            else
            {
                width = 0;
                add_animation(width);
            }
        }

        function left_sp()
        {
           
            if(width == 0 )
            {
                width = -(sp_items_lenght -4)*110;
                add_animation(width);
            }
            else
            {
                width += 110;
                add_animation(width);
            }
        }

        
        var a_sp = setInterval(function(){right_sp();}, 3000);
        $("#right_sp,#left_sp").on({
           mouseenter: function(){clearInterval(a_sp);},
           mouseleave: function(){setInterval(function(){right_sp();}, 3000);}  
        });
