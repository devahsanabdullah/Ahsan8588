const openBtn =document.getElementById('open');
const closeBtn =document.getElementById('close');
const modal = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", function()
{
modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function()
{
modal.classList.remove("open-modal");
});