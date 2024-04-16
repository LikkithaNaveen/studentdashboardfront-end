import React from 'react'
import RequirementFE from './RequirementFE'
import {RequirementProduct} from './UtlisRequirement'

const RequirementProductBE = () => {
  return (
    
    <>

      <div >
      <h2 class='headingtaskass1'>Requirement Process</h2>
         <i class="fa fa-search-plus"/><input  class='Searchrequirement2' type='text' placeholder='Search'/><br></br>
        {
        RequirementProduct.map((element) => (
        <RequirementFE    {...element} />))
        }
      </div>
      </>
      

  )
}

export default RequirementProductBE