import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'
function UserView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [])
  const  {loading,user,error} = useSelector((state) =>{
   return {
     loading:state.user.loading,
     user:state.user.user,
     error:state.user.error,
   }
  });
  return (
    <div>
        {loading?(<h2>Loading</h2>):null}
        <h2>List of Users:-</h2>
        {
          !error.length?
          user.map((data) => (
            <h2 key={data}>{data}</h2>
          )):(<h2>{error}</h2>)
        }
    </div>
  )
}

export default UserView