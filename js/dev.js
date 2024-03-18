/** Shopify CDN: Minification failed

Line 12:2 Transforming let to the configured target environment ("es5") is not supported yet
Line 13:2 Transforming let to the configured target environment ("es5") is not supported yet
Line 14:2 Transforming let to the configured target environment ("es5") is not supported yet
Line 15:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 29:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 31:2 Transforming const to the configured target environment ("es5") is not supported yet

**/
document.addEventListener("DOMContentLoaded", () => {
  let aipreview = document.querySelector(".AIPreview");
  let aiuploadbtn = document.querySelector(".AIImageUpload");
  let aisettings = document.querySelector(".AIImageSettings");
  const mediaWapperProduct = document.querySelector('.product__media-wrapper');
  
  if(Boolean(aipreview)){
    aipreview.parentNode.classList.add("wrapperAIPreview");
    mediaWapperProduct.appendChild(aipreview.parentNode);
  }
  if(Boolean(aiuploadbtn)){
    aiuploadbtn.parentNode.classList.add("wrapperAIUploadBtn");
    mediaWapperProduct.appendChild(aiuploadbtn.parentNode);
  }
  if(Boolean(aisettings)){
    aisettings.parentNode.classList.add("wrapperAISettings");
  }
    
  const formProduct = document.querySelector('form[data-type=add-to-cart-form]');
  
  const config = { attributes: true, childList: true, subtree: true };

  /*
  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length>0 ) {
        //console.log(mutation);
        //|| mutation.target.id == "tee-artwork-form"
        if(mutation.target.id == formProduct.id){
          console.log(mutation);
          let wrapperTee = document.querySelector("#tee-artwork-form");
          let priceWrapper = document.querySelector(".tee-block.tee-product-price");
          let priceLabel = document.createElement("label");
          priceLabel.classList.add("tee-price__total");
          priceLabel.innerHTML="Total";
          priceWrapper.prepend(priceLabel);

          
          let wrapperQuantitySize = document.createElement("div");
          wrapperQuantitySize.classList.add("tee-form-atc-wrapper");

          let optionSize = document.querySelector(".tee-option.tee-block.tee-option--size");
          let teeQuantity = document.querySelector(".tee-quantity");

          wrapperQuantitySize.appendChild(teeQuantity);
          //wrapperQuantitySize.appendChild(optionSize);
          
          
          let teeFormActions = document.querySelector("#teeFormActions");
          wrapperTee.insertBefore(wrapperQuantitySize, teeFormActions);
          wrapperTee.insertBefore(priceWrapper, teeFormActions);

        }
      }
    }
  };
  
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);
  
  // Start observing the target node for configured mutations
  observer.observe(formProduct, config);
  
  // Later, you can stop observing
  //observer.disconnect();
  */
});