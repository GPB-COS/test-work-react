import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { dropErrorDetailsAC } from "../../redux/actionCreators/errorDetailsAC";
import { SagaGetServicesDetailsAC } from "../../redux/actionCreators/getServicesDetailsAC";
import styles from "./ItemDetails.module.css"


export const ItemDetails = () => {

  const { id } = useParams()
  const detailsItem = useSelector(state => state.servicesDetails)
  const errorMessage = useSelector(state => state.errorDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    (dispatch(SagaGetServicesDetailsAC(id)));
  }, [])

  const errorHandle = () => {
    dispatch(SagaGetServicesDetailsAC(id));
    dispatch(dropErrorDetailsAC());
  }

  return (
    <div className="container">
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

        <h2>Название: {detailsItem.name}</h2>
        <h3>Подробнее: {detailsItem.content}</h3>
        <h3>Цена: {detailsItem.price}</h3>
      </div>
    </div>
  )
}
