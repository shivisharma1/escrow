import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_LINK } from './helper/constent'

function Data() {
    const [data,setData] = useState()
    useEffect(()=>{
axios.get(API_LINK).then((res)=>{
    console.log(res);
    setData(res.data.item)
/*.post(api,{
    email:
}) */
}).catch(error=>{
    console.log(error);
})
    },[])
  return (
    <div>
        {!data?<h2>loading</h2>:
        data.map((e)=>{
            return <div>
                <p>{e.id}</p>
            </div>
        })
        }
    </div>
  )
}

export default Data