import "./Category.css" ;
import Input from "../../components/Input" ;

const Category = ({handleChange})=>{
    

    return(
       <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
                <label className="sidebar-label-container">
                 <input onChange={handleChange} type="radio" value="" name="text"/>
                 <span className="checkmark"></span>All
                 </label>
                 <Input handleChange={handleChange}
                   value="sneakers"
                   title="Sneakers"
                   name="text"
                />

                 <Input handleChange={handleChange}
                   value="flats"
                   title="Flats"
                   name="text"
                 />
                  <Input handleChange={handleChange}
                   value="sandals"
                   title="Sandals"
                   name="text"
                 />
                  <Input handleChange={handleChange}
                     value="heels"
                     title="Heels"
                     name="test"
                  />
             </div>       
       </div>       
    );
}



export default Category ;