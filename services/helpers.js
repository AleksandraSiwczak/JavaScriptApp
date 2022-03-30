 const makeDiv = (content) => {
    const div = document.createElement("div");
    div.textContent = content;
    return div;
  };
  
   const makeImg = (src) => {
    const img = document.createElement("img");
    img.src = src;
    return img;
  };
  
export {makeDiv,makeImg}
