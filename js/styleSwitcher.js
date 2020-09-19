const styles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    for(let i=0; i<styles.length; i++)
    {
        if(color == styles[i].getAttribute("title"))
        {
            styles[i].removeAttribute("disabled");
        }
        else
        {
            styles[i].setAttribute("disabled","true");
        }
    }
}