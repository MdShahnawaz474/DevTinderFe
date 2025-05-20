import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import type { RootState } from '../utils/appStore'

const EditProfiles = () => {
    const user = useSelector((store:RootState)=>{
        return store.user
    })
  return user&& (
  <EditProfile user= {user}/>
  )
}

export default EditProfiles