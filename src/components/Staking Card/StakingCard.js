import React from "react";
import { useEffect } from "react";
import { useState ,useContext} from "react";
import userContext from "../../context/userContext";
import "./stakingCard.css";


function StakingCard({ id,register}) {

	const[selected,setSelected]=useState(false)
  
	return (
			<div className={`card2 ${selected ? 'dark' : 'light' }`}>
			    
				<img  src={`https://gateway.pinata.cloud/ipfs/QmauJREwT16RDJcdxVUGmuN7yshfm6JzpvvV34LVjW1NaF/${id}.png`} alt="" className="logo" />
				
				
				<div className="card-btn1" >
					<input type="checkbox" className="checkbox" value={id}  {...register("id")} onChange={(e)=>{
						if(e.target.checked){
							setSelected(true)
						}else{
							setSelected(false)
						}
					}}></input>
				</div>
				
			</div>
	);
}

export default StakingCard;