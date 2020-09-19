/* For Loader */
// const loader = document.getElementById("loader");
// const container = document.getElementById("main-container");
// function loadFunction()
// {
// }

window.addEventListener("load", function(){
      document.querySelector(".loading").classList.add("opacity-0");
      setTimeout(function(){
            document.querySelector(".loading").style.display="none";
            document.getElementById("main-container").style.display="block";
            document.querySelector(".style-switcher").classList.remove("hide");
            document.body.style.backgroundColor = "#f2f2fc";
      },1000)
})
/* For Portfolio Filter */
const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtns = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItems = portfolioItems.length;
for(let i=0; i<totalFilterBtns; i++)
{
      filterBtns[i].addEventListener('click', function()
      {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioItems; k++)
            {
                  if(filterValue === portfolioItems[k].getAttribute("data-category"))
                  {
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                  }
                  else
                  {
                        portfolioItems[k].classList.remove("show");
                        portfolioItems[k].classList.add("hide");
                  }
                  if(filterValue === "all")
                  {
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                  }
            }

      })
}

/* For Lightbox */
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector(".lightbox-img");
const lightboxText = lightbox.querySelector(".caption-text");
const lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for(let i=0; i<totalPortfolioItems; i++)
{
      portfolioItems[i].addEventListener('click', function()
      {
            itemIndex = i;
            changeItem();
            toggleLightbox();
      });
}

function changeItem()
{
      imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
      lightboxImage.src = imgSrc;
      lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
      lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItems;
}

function toggleLightbox()
{
      lightbox.classList.toggle("open");
}

function prevItem()
{  
      if(itemIndex === 0)
      {
            itemIndex = totalPortfolioItems - 1;
      }
      else
      {
            itemIndex--;
      }
      changeItem();
}

function nextItem()
{  
      if(itemIndex === totalPortfolioItems-1)
      {
            itemIndex = 0;
      }
      else
      {
            itemIndex++;
      }
      changeItem();
}

/* For Close Lightbox */
const lightboxClose = lightbox.querySelector(".lightbox-close");
lightbox.addEventListener('click', function()
{
      if(event.target === lightboxClose || event.target === lightbox)
      {
            toggleLightbox();
      }
})