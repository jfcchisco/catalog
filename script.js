console.log("Oh yeah");

const menuClick = (menuNumber) => {

    const mainMenu = document.querySelector(`[data-index="0"]`);
    const showMenu = document.querySelector(`[data-index="${menuNumber}"]`);
    

    mainMenu.dataset.status = "inactive-menu";
    showMenu.dataset.status = "active";

    document.getElementById("container").setAttribute('style', 'overflow-y: scroll');
}

const menuBack = () => {

    const currentMenu = document.querySelector(`[data-status="active"]`);
    const mainMenu = document.querySelector(`[data-index="0"]`);

    mainMenu.dataset.status = "active";
    currentMenu.dataset.status = "inactive";

    document.getElementById("container").setAttribute('style', 'overflow-y: hidden');
}