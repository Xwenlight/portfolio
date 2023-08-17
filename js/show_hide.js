let about_arr = document.getElementsByClassName("about-content");
let tab_btn = document.getElementsByClassName("tab-btn");
let idx = 0;

function hide()
{
    for(let i=1; i<about_arr.length; i++)
    {
        about_arr[i].style.display = "none";
    }
}

function border_bottom(idx)
{
    tab_btn[idx].style.borderBottom = "none";
}

hide();
tab_btn[0].style.borderBottom = "2px var(--primary) solid";
for(let i=0; i<tab_btn.length; i++)
{
    tab_btn[i].addEventListener
    (
        "click",
        function()
        {
            about_arr[idx].style.display = "none";
            tab_btn[idx].style.borderBottom = "none";
            about_arr[i].style.display = "flex";
            tab_btn[i].style.borderBottom = "2px var(--primary) solid";
            idx = i;
        }
    )
}