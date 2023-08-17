let chat_btn = document.getElementById("bot-btn");
let chat_box = document.getElementById("bot-box");
let bot = document.getElementById("bot");
let bot_text = document.getElementsByClassName("bot-text");
let msg = document.getElementById("msg");
let bot_isopen = false;
let bot_idx = 0;

function intro()
{
    bot_text[bot_idx].style.display = "block";
    bot_text[bot_idx].style.animation = null;
    bot_text[bot_idx].offSetHeight;
    bot_text[bot_idx].style.animation = "slide-in 2s 1";
    bot_text[bot_idx].addEventListener
    (
        "animationend",
        function()
        {
            if(bot_idx < bot_text.length - 1)
            {
                bot_idx++;
                intro();
            }
        }
    )
}

function reset_ani(ele)
{
    for(let i=0; i<ele.length; i++)
    {
        ele[i].addEventListener
        (
            "animationend",
            function()
            {
                ele[i].style.animation = null;
            }
        )
    }
}

function read_input()
{
    if(msg.value != "")
    {
        bot.innerHTML += `<div class="human-text container-flex">
                                <p class="text-light py-2 px-2">
                                ${msg.value}
                                </p>
                           </div>`
        msg.value = null;
            }
}

chat_btn.addEventListener
(
    "click",
    function()
    {
        if(!bot_isopen)
        { 
            chat_box.style.display = "block";
            bot_isopen = true;
            if(bot_idx == 0)
            {
                for(let i=0; i<bot_text.length; i++)
                {
                    bot_text[i].style.display = "none";
                }  
                intro();
                reset_ani(bot_text);
            }
        }
        else
        {
            chat_box.style.display = "none";
            bot_isopen = false;
        }
    }
);
