import { getTabHeader, getTabContent } from "./service.js";


const tabs = document.querySelector(".tabs");
const tabContent = document.querySelector(".tab-content");
const btns = document.getElementsByClassName("btns");
const body = document.querySelector("body");

const renderContent = async (path) => {
    const backendData = await getTabContent(path);
    tabContent.innerHTML = backendData.map((item) => `
    <h2>${item.name}</h2>
    `
    ).join("");
};

const renderTab = async () => {
    const productTypeData = await getTabHeader();
    tabs.innerHTML = productTypeData.map((item) => `   
            <button class="btns" data-path="${item.path}">${item.name}</button>
        `
    ).join("");
    renderContent(productTypeData[0].path);
    btns[0].style.backgroundColor = "skyblue";
}
renderTab();


tabs.addEventListener("click", (e) => {
    if (e.target.dataset.path) {
        renderContent(e.target.dataset.path);
        for (let i of btns){
            i.style.backgroundColor = "";
        }
        if(e.target.dataset.path == "/vegetables"){
            body.style.backgroundColor = "#34001a";
            btns[1].style.backgroundColor = "hotpink";
        } else if (e.target.dataset.path == "/clothes") {
            body.style.backgroundColor = "#002101";
            btns[2].style.backgroundColor = "lawngreen";
        } else if (e.target.dataset.path == "/fruits"){
            body.style.backgroundColor = "#001f2b"
            btns[0].style.backgroundColor = "skyblue";
        }
    }
});




