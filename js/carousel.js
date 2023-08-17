// Global Variables
let intro_arr = document.getElementsByClassName("intro");
let next = document.getElementById("next")
let prev = document.getElementById("prev");
let slide_idx = 0;
let is_next = false;
let is_prev = false;

function hide()
{
    for(let i=1; i<intro_arr.length; i++)
    {
        intro_arr[i].style.display = "none";
    }
}

function next_slide()
{
   if(slide_idx + 1 < intro_arr.length)
   {
        intro_arr[slide_idx].style.animation = null;
        intro_arr[slide_idx].offSetHeight;
        intro_arr[slide_idx].style.animation = "fade-out 600ms 1";
        intro_arr[slide_idx].addEventListener
        (
            "animationend",
            function()
            {
                if(intro_arr[slide_idx].style.animationName === "fade-out" && is_next)
                {
                    intro_arr[slide_idx].style.display = "none";
                    slide_idx++;
                    intro_arr[slide_idx].style.display = "block";
                    intro_arr[slide_idx].style.animation = null;
                    intro_arr[slide_idx].offSetHeight;
                    intro_arr[slide_idx].style.animation = "slide-in 1s 1";   
                }
            }
        ); 
   }
}

function prev_slide()
{
   if(slide_idx - 1 >= 0 && is_prev)
   {
        intro_arr[slide_idx].style.animation = null;
        intro_arr[slide_idx].offSetHeight;
        intro_arr[slide_idx].style.animation = "fade-out 600ms 1";
        intro_arr[slide_idx].addEventListener
        (
            "animationend",
            function()
            {
                if(intro_arr[slide_idx].style.animationName === "fade-out" && is_prev)
                {
                    intro_arr[slide_idx].style.display = "none";
                    slide_idx--;
                    intro_arr[slide_idx].style.display = "block";
                    intro_arr[slide_idx].style.animation = null;
                    intro_arr[slide_idx].offSetHeight;
                    intro_arr[slide_idx].style.animation = "slide-in 1s 1";
                }
            }
        ); 
   }
}

hide();
next.addEventListener
(
    "click",
    function()
    { 
        is_next = true;
        is_prev = false;   
        next_slide();
    }
);
prev.addEventListener
(
    "click",
    function()
    {
        is_next = false;
        is_prev = true;
        prev_slide();
    }
);