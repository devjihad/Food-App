
import "./Menu.css"
const SingleMenu = ({value ,valu, setvalu}) => {
  
//    console.log(valu)
    
    return (
        <div onClick={()=>setvalu(prev=>prev===value.menu_name?"data":value.menu_name)} className='  '>
            <img className={`w-[200px] ${valu===value.menu_name?"active":""}`} src={value.menu_image}  alt=""   />
            <h1 className='text-center mt-3'>{value.menu_name}</h1>
        </div>
    );
};

export default SingleMenu;