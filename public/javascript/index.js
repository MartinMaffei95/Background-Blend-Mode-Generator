const image = document.getElementsByClassName("droppedImage")
        let textureSelected
        let colorSelected
        let effectSelected

        effect_Selector.addEventListener("input",(e)=>{
            console.log(e.target.value)
            const effect_Selected = e.target.value
            document.documentElement.style.setProperty('--blendMode',`${effect_Selected}`);
        })

        color_Selector.addEventListener("input",(e)=>{
            console.log(color_Opacity.checked)
            const color_Selected = e.target.value
            if(color_Opacity.checked){
                return document.documentElement.style.setProperty('--blendColor',`${color_Selected}`)
                colorSelected = color_Selected
            } else{
                return
            }       
        })
        
        color_Opacity.addEventListener("input",(e)=>{
            console.log(color_Opacity.checked)
            if(!color_Opacity.checked){
                return document.documentElement.style.setProperty('--blendColor',`none`)
            }else{
                return document.documentElement.style.setProperty('--blendColor',`${color_Selector.value}`)
            }
        }) 
        
        texture_OnOff.addEventListener("input",(e)=>{
            console.log(texture_OnOff.checked)
            if(!texture_OnOff.checked){
                return document.documentElement.style.setProperty('--IMAGE2',`none`)
            }
            else{
                return document.documentElement.style.setProperty('--IMAGE2',`${textureSelected}`)
            }
        }) 

        dropZone.addEventListener("dragover",(e)=>{
            e.preventDefault()
        })

        dropZone.addEventListener("drop",(e)=>{ /*SOLTAR*/
            let i = e.dataTransfer.getData("textura")
            // dropZone.style.background= `url("./txt${i}.png")`

            if(texture_OnOff.checked){
                document.documentElement.style.setProperty('--IMAGE2',`url("../D&D1/textures/txt${i}.png")`);
                textureSelected = `url("../D&D1/textures/txt${i}.png")`;
            }else{return}
            
        })

        const transferirTextura = (i,e)=>{
            e.dataTransfer.setData("textura",i)
        }

        for (let i = 1; i < texture_Selector.children.length + 1; i++) {       
            console.log(`.textura${i}`)     
            document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>{
                transferirTextura(i,e)                
            })
        }