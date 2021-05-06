import { Link } from "react-router-dom"

export const Item = ({id, name}) => {
  return (
    <ul>
        <Link to={`${id}/details`} >{name}</Link>
    </ul >
  )
}
