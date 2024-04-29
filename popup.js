//button
let btn=document.getElementById('btn')

//title div
let title=document.getElementById('title')

//Get currenttab title 
async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    title.textContent = tab.title || "No title available";
}

//Add event listener to button
btn.addEventListener('click',getCurrentTab)

