import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { dropErrorAC } from "../../redux/actionCreators/errorsAC";
import { SagaGetAllServicesAC } from '../../redux/actionCreators/getServices'
import { Item } from "../Item/Item";
import styles from "./ItemList.module.css"



export const ItemList = () => {

  const services = useSelector(state => state.services)
  const errorMessage = useSelector(state => state.error)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SagaGetAllServicesAC());
  }, [])

  const errorHandle = () => {
    dispatch(SagaGetAllServicesAC());
    dispatch(dropErrorAC());
  }

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        {
          errorMessage.message ?
            <>
              <p className={styles.errorMessage}>{errorMessage.message}</p>
              <button type="button" className="btn btn-secondary" onClick={errorHandle}>Попробовать снова</button>
            </>
            : null
        }
      </div>
      {
        services[0]?.length ?
          services[0].map(el =>
            <Item key={el.id} id={el.id} name={el.name} price={el.price} content={el.content} />)
          : null
      }
    </div>
  )
}
