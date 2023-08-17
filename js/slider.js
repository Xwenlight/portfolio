// Global Variable
let project_box = document.getElementsByClassName("project-box");
let slider =  document.getElementsByClassName("slider");
let slide_project = [];
let next_project = document.getElementById("next-project");
let prev_project = document.getElementById("prev-project");
let project_img = document.getElementsByClassName("project-img");
let project_cover = document.getElementsByClassName("project-cover");
let project_content = document.getElementsByClassName("project-content");
let mid;
let last = 2;
let first = 0;

function adjust_box()
{
    for(let i=0; i<project_box.length; i++)
    {
        if(i > 2)
        {
            project_box[i].style.display = "none";
        }
        else
        {
            slide_project.push(project_box[i]);
        }
    }

}

function translate(middle)
{
    mid = middle;
    slide_project[mid].style.transform = `scale(${1.1})`;
    if(mid != 0)
    {
        slide_project[mid - 1].style.transform = `scale(${0.9})`;
    }
    if(mid < slide_project.length - 1)
    {
        slide_project[mid + 1].style.transform = `scale(${0.9})`;
    }
}

function slide_next()
{
    if(last == 1)
    {
        slider[1].style.justifyContent = "center";
        project_box[last + 1].style.display = "flex";
        slide_project.push(project_box[last + 1]);
        first++;
        last++;
        translate(1);
    }
    else if(last < project_box.length - 1)
    {
        slider[1].style.justifyContent = "center";
        slide_project.shift().style.display = "none";
        project_box[last + 1].style.display = "flex";
        slide_project.push(project_box[last + 1]);
        first++;
        last++;
        translate(1);
    }
    else if(last == project_box.length - 1)
    {
        slider[1].style.justifyContent = "left";
        slide_project.shift().style.display = "none";
        if(window.screen.width <= 425 && window.screen.width > 375)
        {
            slide_project[1].style.marginRight = "35%";
        }
        else if(window.screen.width <= 375 && window.screen.width > 362)
        {
            slide_project[1].style.marginLeft = "7%";
        }
        else if(window.screen.width <= 362 && window.screen.width > 338)
        {
            slide_project[1].style.marginLeft = "6%";
        }
        first++;
        last++;
        translate(1);
    }
}

function slide_prev()
{
    if(first == project_box.length - 2)
    {
        slider[1].style.justifyContent = "center";
        project_box[first - 1].style.display = "flex";
        slide_project.unshift(project_box[first - 1]);
        first--;
        last--;
        translate(1);

    }
    else if(first > 0)
    {
        slider[1].style.justifyContent = "center";
        slide_project.pop().style.display = "none";
        project_box[first - 1].style.display = "flex";
        slide_project.unshift(project_box[first - 1]);
        first--;
        last--;
        translate(1);
    }
    else if(first == 0)
    {
        slider[1].style.justifyContent = "right";
        slide_project.pop().style.display = "none";
        if(window.screen.width <= 425 && window.screen.width > 375)
        {
            slide_project[0].style.marginLeft = "35%";
        }
        else if(window.screen.width <= 375 && window.screen.width > 362)
        {
            slide_project[0].style.marginRight = "7%";
        }
        else if(window.screen.width <= 362 && window.screen.width > 338)
        {
            slide_project[0].style.marginRight = "6%";
        }
        translate(0);
        first--;
        last--;
    }
}

function flip_ani()
{
    for(let i=0; i<project_box.length; i++)
    {
        project_box[i].addEventListener
        (
            "mouseenter",
            function()
            {
                if(project_box[i] === slide_project[mid])
                {
                    project_img[i].style.display = "none";
                    project_cover[i].style.display = "block";
                    project_cover[i].style.animation = "slide-down 1s 1";
                    project_cover[i].addEventListener
                    (
                        "animationend",
                        function()
                        {
                            project_content[i].style.display = "block";
                        }
                    )   
                }
            }
        )

        project_box[i].addEventListener
        (
            "mouseleave",
            function()
            {
                if(project_box[i] === slide_project[mid])
                {
                    project_img[i].style.animation = "slide-down 1s 1";
                    project_img[i].style.display = "block"; 
                    project_cover[i].style.display = "none";
                    project_content[i].style.display = "none"; 
                }
                project_img[i].addEventListener
                (
                    "animationend",
                    function()
                    {
                        project_img[i].style.animation = null;
                        project_img[i].style.animation = "none";
                        project_cover[i].style.animation = null;
                        project_cover[i].offSetHeight;
                        project_cover[i].style.animation = "none";
                    }
                )
            }
        )
    }
}

adjust_box();
translate(1);
flip_ani();
next_project.addEventListener
(
    "click",
    slide_next
);
prev_project.addEventListener
(
    "click",
    slide_prev
);



