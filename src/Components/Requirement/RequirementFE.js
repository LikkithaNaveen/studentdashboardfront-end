const RequirementFE=(props)=>{
    
    const {Company,Link,role,ctc,natureofjob,opening,deadline,program}=props
            return(
                
                
                <>
                
                <div class='requireborder '>
                <div class='grid-container'>
                <div class="grid-item"><h2>{Company}</h2></div>
                <div class="grid-item"><h3>Role:</h3></div>
                <div class="grid-item"><h3>Nature Of Job:</h3></div>
                <div class="grid-item"><h3>Deadline:</h3> </div>
                <div class="grid-item">{Link}</div>
                <div class="grid-item1">{role}</div>
                <div class="grid-item1">{natureofjob}</div>
                <div class="grid-item">{deadline}</div>
                </div><br></br>
                <div class='grid-container'>
                <div class="grid-item2"><h2>{Company}</h2></div>
                <div class="grid-item"><h3>Current CTC:   </h3></div>
                <div class="grid-item"><h3> Openings:</h3></div>
                <div class="grid-item"><h3><pre><b>     Program:</b></pre></h3> </div>
                <div class="grid-item2">{Link}</div>
                <div class="grid-item1">{ctc}</div>
                <div class="grid-item1">{opening}</div>
                <div class="grid-item">{program}</div>
                </div>
                
                    
                  
                    
                </div> 
    
                

                   
                    
                
                </>
            )
}
export default RequirementFE